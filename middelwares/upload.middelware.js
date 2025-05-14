const multer = require('multer');
const path = require('path');

// validate file types
const fileFilter = (req, file, cb) => {
<<<<<<< HEAD
  const allowedTypes = ['.jpg', '.jpeg', '.png', '.pdf'];

  const ext = path.extname(file.originalname).toLocaleLowerCase();

  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('only images and PDFs are allowed !'));
  }
};
=======
    const allowedTypes = ['.jpg', '.jpeg', '.png', '.pdf'];

    const ext = path.extname(file.originalname).toLocaleLowerCase()

    if(allowedTypes.includes(ext)){
        cb(null, true)
    }else{
        cb(new Error('only images and PDFs are allowed !'))
    }
}
>>>>>>> b71b593c19b495cbe0177161de4938a098073f89

//  diskConfiguration for multer

const storage = multer.diskStorage({
<<<<<<< HEAD
  destination: (req, file, cb) => {
    const isPdf = file.mimetype === 'application/pdf';
    cb(null, isPdf ? 'uploads/brochures' : 'uploads/images');
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ fileFilter, storage });

module.exports = upload;
=======
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
>>>>>>> b71b593c19b495cbe0177161de4938a098073f89
