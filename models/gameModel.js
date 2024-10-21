import mongoose from "mongoose";
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    userId: { type: Number, required: true },
    score: { type: Number, required: true },
    level: { type: String, required: true },
    result : { type: String }
},{
    timestamps:true,
});

const Game = mongoose.model('Game', gameSchema);
export default Game;