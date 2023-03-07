const fileUploadExtensionCheck = require("./fileUploadExtensionCheck");
require("dotenv").config();

const IMAGE_LIMIT = 5 * 1024 * 1024;
const FILE_LIMIT = 20 * 1024 * 1024;

const fileSizeLimitter = async(req, res, next) => {
    try {
        if(req.files){
            if(req.files.image !== undefined){
                if(req.files.image.size > IMAGE_LIMIT) return res.status(400).send("Image over limit");
            }
            if(req.files.file !== undefined){
                if(req.files.file.size > FILE_LIMIT) return res.status(400).send("File over limit");
            }
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).send("Upload Size limitter");
    }
}

module.exports = fileSizeLimitter;
