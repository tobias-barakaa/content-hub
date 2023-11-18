import multer from 'multer';
import DataParser from 'datauri/parser.js';
import path from 'path';

const storage = multer.memoryStorage();

const upload = multer({ storage });

const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//   cb(null, 'public/upload')
//     },
//     filename: (req, file, cb) => {
//       const filename = file.originalname
//       cb(null, filename)
//     }
//     })

//     const upload = multer({storage});

//     export default upload;

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/upload/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, 'logo512.png'); // You might want to generate a unique filename here
//   },
// });

// const upload = multer({ storage: storage });
// export default upload;
