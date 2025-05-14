const multer = require('multer');
const path = require('path');

// validate file types
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['.jpg', '.jpeg', '.png', '.pdf'];

    const ext = path.extname(file.originalname).toLocaleLowerCase()

    if(allowedTypes.includes(ext)){
        cb(null, true)
    }else{
        cb(new Error('only images and PDFs are allowed !'))
    }
}

//  diskConfiguration for multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isPdf = file.mimetype === 'application/pdf';
        cb(null, isPdf ? 'uploads/brochures': 'uploads/images')
    },

    filename: (req, file, cb)=> {
        cb(null, Date.now() +  '-' + file.originalname)
    },
})

const upload = multer({fileFilter, storage})

module.exports = upload;