import express from 'express';
const router = express.Router();
import {
    registrar,
    autentificar,
    confirmar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
} from '../controllers/usuarioController.js';

// Autentificación, Registro y Confirmación de Usuarios
router.post('/', registrar);
router.post('/login', autentificar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);

router.route("/olvide-password/:token")
    .get(comprobarToken)
    .post(nuevoPassword);

export default router;