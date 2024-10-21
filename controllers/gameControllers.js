import Game from "../models/gameModel.js";

const createGame = (req, res) => {
    const { userId, score, level, result } = req.body;

    const newGame = new Game({ userId, score, level, result });
    newGame.save((err, game) => {
        if (err) return res.status(400).json({ message: 'Error saving game data' });
        return res.status(200).json(game);
    });
};

const getGameByUserId = (req, res) => {
    const userId = req.params.userId;

    Game.find({ userId }, (err, games) => {
        if (err) return res.status(400).json({ message: 'Error fetching game data' });
        return res.json(games);
    });
};

const updateGame = (req, res) => {
    const gameId = req.params.id;

    Game.findByIdAndUpdate(gameId, req.body, { new: true }, (err, game) => {
        if (err) return res.status(400).json({ message: 'Error updating game' });
        return res.json(game);
    });
};

const deleteGame = (req, res) => {
    const gameId = req.params.id;

    Game.findByIdAndDelete(gameId, (err) => {
        if (err) return res.status(400).json({ message: 'Error deleting game' });
        return res.json({ message: 'Game deleted successfully' });
    });
};

export { createGame };
export { getGameByUserId };
export { updateGame };
export { deleteGame };