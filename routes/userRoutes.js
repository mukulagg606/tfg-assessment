import express from "express";
import { register, login } from "../controllers/userControllers.js";
import { handleValidationErrors, loginValidator, registerValidator } from "../validators/authValidator.js";
const router = express.Router();

router.post('/register', registerValidator, handleValidationErrors, register);
router.post('/login',  loginValidator, handleValidationErrors ,login);

export { router as userRouter };
export default {
  userRouter : router,
};