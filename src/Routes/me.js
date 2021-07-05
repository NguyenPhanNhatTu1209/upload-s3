const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });
var cpUpload = upload.fields([
  { name: "Avatar", maxCount: 1 },
]);
const uploadController = require("../Controllers/UploadController");

router.post("/upload-image", cpUpload, uploadController.UploadImage);
router.get("/get-image/:key", uploadController.getImage);

module.exports = router;
