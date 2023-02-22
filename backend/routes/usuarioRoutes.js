import express from 'express';
const router = express.Router();
import {
    registrar,
    autentificar,
    confirmar,
    olvidePassword,
    comprobarToken
} from '../controllers/usuarioController.js';

// Autentificación, Registro y Confirmación de Usuarios
router.post('/', registrar);
router.post('/login', autentificar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);


export default router;