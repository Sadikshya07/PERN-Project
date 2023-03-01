const uploadFileExistance = async (req, res, next) => {
    // check if image and book files exists or not
    try {
      // for create
      if (req.method === "POST") {
        if (!req.files || Object.keys(req.files).length === 0)
          return res.status(400).send("No image or files uploaded");
        if (!("image" in req.files)) return res.status(400).send("No image");
        if (!("file" in req.files))
          return res.status(400).send("No file");
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(400).send("file upload server error");
    }
  };
  
  module.exports = uploadFileExistance;
  