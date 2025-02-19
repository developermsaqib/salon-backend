const multer = require("multer");
const path = require("path");

// storage engine 

const storage = multer.diskStorage({
    destination: 'uploads/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    }
})

module.exports = upload;
