const multer = require("multer");
const path = require("path");

// Konfigurasi multer untuk upload gambar
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const fileUpload = multer({
  storage,
  limits: { fileSize: 5000000 }, // Batas ukuran file 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const mimetype = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (mimetype && extname) return cb(null, true);
    cb(new Error("Hanya file gambar yang diperbolehkan!"));
  },
}).single("image");

module.exports = fileUpload;
