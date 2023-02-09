import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

const app = express();
dotenv.config();

conectarDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Conectado en el puerto ${PORT}`)
});

