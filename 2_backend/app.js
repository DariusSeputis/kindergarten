import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import { createUser, loginUser, TESTAS } from './controllers/userController.js';
import { authentificateToken } from './auth/auth.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Models

// DB connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/users/test', authentificateToken, TESTAS);

app.post('/users/login', loginUser);

app.post('/users/signup', createUser);

// Starting server
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
