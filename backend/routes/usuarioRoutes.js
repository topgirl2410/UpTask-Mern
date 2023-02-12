import express from 'express';
const router = express.Router();
import { registrar } from '../controllers/usuarioController.js';

// Autentificación, Registro y Confirmación de Usuarios
router.post('/', registrar) // Crear Usuario





export default router;