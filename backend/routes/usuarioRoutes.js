import express from 'express';
const router = express.Router();
import {
    registrar,
    autentificar,
    confirmar
} from '../controllers/usuarioController.js';

// Autentificación, Registro y Confirmación de Usuarios
router.post('/', registrar) // Crear Usuario
router.post('/login', autentificar); // Autentificar usuario
router.get('/confirmar/:token', confirmar); // Confirmar Usuario



export default router;