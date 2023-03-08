const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtGenerator = require("../utils/jwtGenerator");
const nodemailer = require("nodemailer");
require("dotenv").config();


router.post("/register", [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("name").not().isEmpty(),
],
    async (req, res) => {
        try {
            // if error in input return error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            // destructure request
            const { name, email, password } = req.body;

            // check if the user already exists or not
            const user = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            if (user) return res.status(409).send("User email already in use");
            else {
                // hash passowrd
                const saltRounds = 10;
                const salt = await bcrypt.hash(password, saltRounds);
                const hashedPassowrd = await bcrypt.hash(password, salt);

                console.log(hashedPassowrd);
                // create user account
                const newUser = await prisma.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: hashedPassowrd,
                    },
                });

                return res.status(201).send("user created");
            }
        } catch (error) {
            console.error("Error: ", error);
            return res.status(500).send("Server error");
        }
    });

router.post("/login", [
    body("email").isEmail(),
    body("password").isLength({ min: 5 })
],
    async (req, res) => {
        try {
            // if error in input return error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //destructuring req
            const { email, password } = req.body;

            // check if email exists or not
            const user = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            if (!user) return res.status(403).send("Email or password Incorrect");
            else {
                // check if password matches or not
                const validPassowrd = await bcrypt.compare(password, user.password);
                if (!validPassowrd)
                    return res.status(403).send("Email or password Incorrect");
                else {
                    // create access and refresh tokens
                    const accessToken = jwtGenerator(
                        user.id,
                        process.env.ACCESS_TOKEN_SECRET,
                        "10m"
                    );
                    const refreshToken = jwtGenerator(
                        user.id,
                        process.env.REFRESH_TOKEN_SECRET,
                        "1d"
                    );

                    // storing refresh token in http only cookie
                    res.cookie("jwt", refreshToken, {
                        httpOnly: true,
                        maxAge: 24 * 60 * 60 * 1000, // 1-day max age
                    });

                    // storing refresh token to logged in user
                    const updatedUser = await prisma.user.update({
                        where: {
                            email: email,
                        },
                        data: {
                            RefreshToken: refreshToken,
                        },
                    });
                    // console.log(jwtCookie)
                    return res.send({ access_token: accessToken });
                }
            }
        } catch (error) {
            console.error("Error: ", error);
            return res.status(500).send("Server error");
        }
    });

router.get("/logout", async (req, res) => {
    try {
        // delete access token on client side
        const cookie = req.cookies;
        console.log(cookie)
        // check if jwt cookie exists or not
        if (!cookie?.jwt) return res.status(404).send("invalid"); // jwt doesnt exist
        let refreshToken = cookie.jwt;

        // user having that refresh token
        let user = await prisma.user.findFirst({
            where: { RefreshToken: refreshToken },
        });
        // if no user found clear cookie
        if (!user) {
            res.clearCookie("jwt", {
                httpOnly: true,
            });
            return res.status(404);
        }
        const user_email = user.email;
        user = await prisma.user.update({
            where: {
                email: user_email,
            },
            data: {
                RefreshToken: refreshToken,
            },
        });
        res.clearCookie("jwt", { httpOnly: true });
        return res.status(400).send("logged out");
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).send("server error");
    }
});

router.get("/refresh", async(req, res) => {
    try{
        const cookies = req.cookies;
        // check if refresh token exists or not
        if(!cookies?.jwt) return res.status(406).send("Unauthorized");
        else{
            // destructuring refresh token from cookie
            const refreshToken = req.cookies.jwt;
    
            // finding the user having that refresh token
            const foundUser = await prisma.user.findFirst({ where: {RefreshToken: refreshToken} });

            // verifying refresh token
            const payload =  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if(err) return res.status(406).send("Unauthorized") // invalid refresh token
                else{ 
                    const user_id = foundUser.user_id;
                    const accessToken = jwtGenerator(user_id, process.env.ACCESS_TOKEN_SECRET, "10m");

                    return res.send({"token": accessToken});
                }
            }); 
        }
    } catch(error){
        console.log(error);
        res.status(500).send("server error");
    }
});

router.post("/forgotPassword", async(req, res) => {
    try {
        const { email } = req.body;
        // find user email
        const foundUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if(!foundUser) return res.status(200).send("Email not in use")
        const user_id = foundUser.id;
        const user_reset_token = foundUser.resetToken;
        
        let validityCheck = false;
        // check if token already sent, if sent send error
        const validateToken = jwt.verify(user_reset_token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(!err) validityCheck = true;
        });
        if(validityCheck) {
            return res.send("Token Valid, Wait up ").status(200);
        }

        const resetToken = jwtGenerator(user_id, process.env.ACCESS_TOKEN_SECRET, "10m");
        const createResetToken = await prisma.user.update({
            where: {
                email: foundUser.email
            },
            data:{
                resetToken: resetToken,
            }
        });
        mailer(foundUser);
        return res.json(createResetToken);

    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send("Internal Server Error");
    }
});


const mailer = async(foundUser) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'vicky20@ethereal.email',
                pass: 'wtjCGJcxYXt2ddZcK3'
            }
        });
        // save client url in env and use that url
        // bored to add link in .env file will do it later
        const link = `http://127.0.0.1:3001/api/v1/auth/updatePassword?token=${foundUser.resetToken}&id=${foundUser.id}`
        const data = await transporter.sendMail({
            from:"admin@example.com",
            to: foundUser.email,
            subject: "PASSWORD RESET TOKEN",
            html: `<b>Link Valid for 15 mins</b><br>link: ${link}`,
        });
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send("Internal Server Error");
    }
}

router.post("/updatePassword", async(req, res) => {
    try {
        const {resetToken, user_id} = req.query;
        const {password} = req.body;
        // check if token already sent, if sent send error
        let validity = true;
        const validateToken = jwt.verify(resetToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) validity = false;
        });
        if(!validity) return res.send("invalid token");
        const updatePassword = await prisma.user.update({
            where:{
                id: user_id
            }, 
            data: {
                password: password
            }
        });
        return res.send(updatePassword)
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
