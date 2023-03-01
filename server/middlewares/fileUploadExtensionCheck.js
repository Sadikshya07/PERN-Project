const fileUploadExtensionCheck = async (req, res, next) => {
    try {
        // check type of images and files
        // we have already checked file existance in uploadFileExistance middleware but to use same 
        // middleware in both put and post method we check it again in put method 
        if(req.files){
            if (req.files.image !== undefined) {
                if (!(req.files.image.mimetype === "image/png" || req.files.image.mimetype === "image/jpeg" || req.files.image.mimetype === "image/jpg")) return res.status(400).send("Wrong Image Format");
            }
            if (req.files.file !== undefined) {
                if (req.files.file.mimetype != "application/pdf") return res.status(400).send("Wrong file Format");
            }
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(400).send("Internal upload file error")
    }
}

module.exports = fileUploadExtensionCheck;