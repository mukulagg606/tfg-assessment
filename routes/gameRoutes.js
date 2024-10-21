import express from "express";
import { createGame, getGameByUserId, updateGame, deleteGame } from '../controllers/gameControllers.js';
const router = express.Router();

router.post('/game', createGame);
router.get('/game/:userId', getGameByUserId);
router.put('/game/:id', updateGame);
router.delete('/game/:id', deleteGame);

export { router as gameRouter };
export default {
  gameRouter : router,
};
