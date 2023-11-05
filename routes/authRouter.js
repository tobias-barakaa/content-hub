import Router from 'express';
const router = Router();
import { login, logout, register } from '../controllers/authController.js';
import { validateLoginInput, validateRegisterInput } from '../middleware/validationmiddleware.js';


router.post('/register', validateRegisterInput, register)
router.post('/login',validateLoginInput, login)
router.get('/logout', logout)



export default router;
