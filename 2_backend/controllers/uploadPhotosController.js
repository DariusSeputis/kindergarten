import multer from 'multer';

// multer
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './photos');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});
const maxSize = 1048567;
export const upload = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return console.log('Wrong file type');
    }
  },
  limits: { fileSize: maxSize },
}).array('images', 100);

export const uploadPhotos = (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log('Photo upload multer error:', err);
    } else if (err) {
      console.log('Photo upload random error:', err);
    }
  });
  res.send('Multiple files uploaded successfully');
};
