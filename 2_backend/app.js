import express from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import { createUser, loginUser, TESTAS } from './controllers/userController.js';
import { authentificateToken } from './auth/auth.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// multer
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './photos');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '--' + file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

// DB connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/users/test', authentificateToken, TESTAS);

app.post('/single', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.send('Single file uploaded successfully');
});

app.post('/multiple', upload.array('images', 100), (req, res) => {
  console.log(req.files);
  res.send('Multiple files uploaded successfully');
});

app.post('/users/login', loginUser);

app.post('/users/signup', createUser);

// Starting server
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
