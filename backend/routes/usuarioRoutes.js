import express from 'express';
const router = express.Router();
import {
    registrar,
    autentificar
} from '../controllers/usuarioController.js';

// Autentificación, Registro y Confirmación de Usuarios
router.post('/', registrar) // Crear Usuario
router.post('/login', autentificar); // Autentificar usuario




export default router;