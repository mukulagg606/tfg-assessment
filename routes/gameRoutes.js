import express from "express";
import { createGame, getGameByUserId, updateGame, deleteGame } from '../controllers/gameControllers.js';
import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/game', verifyToken, createGame);
router.get('/game/:userId', verifyToken, getGameByUserId);
router.put('/game/:id', verifyToken, updateGame);
router.delete('/game/:id', verifyToken, deleteGame);

export { router as gameRouter };
export default {
  gameRouter : router,
};
