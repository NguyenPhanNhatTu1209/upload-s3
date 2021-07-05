require("dotenv").config();
const { uploadFile, getFileStream} = require("../Controllers/index");
class UploadController {
  async UploadImage(req, res, next) {
    const file = req.files["Avatar"][0];
    const result = await uploadFile(file);
    console.log(result);
    res.send({ imagePath: `/images/${result.Key}` });
  }
  async getImage(req, res, next) {
    const key = req.params.key
    const readStream = getFileStream(key)
    readStream.pipe(res)
  }
}
module.exports = new UploadController();
