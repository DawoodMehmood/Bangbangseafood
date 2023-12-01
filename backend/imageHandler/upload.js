const multer = require('multer');
const path = require('path');

// Set up Multer storage for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/'); // Folder to store uploaded images
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });


// Check file type for image uploads
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG images are allowed.'));
    }
  };

  const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 15 }, // 5MB file size limit
    fileFilter: fileFilter,
  });

module.exports = upload;
