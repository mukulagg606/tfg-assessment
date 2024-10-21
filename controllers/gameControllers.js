import Game from "../models/gameModel.js";

const createGame = async(req, res) => {
    try{
    const { userId, score, level, result } = req.body;
    const newGame = new Game({ userId, score, level, result });
    const game  = await newGame.save();
    return res.status(200).json({status:true, message:"Game created successfully",game_details:game});
    }catch(err){
        console.log(err);
        throw err;
    }
};

const getGameByUserId = async(req, res) => {
    try{
        const userId = req.params.userId;
        const game = await Game.find({userId});
        return res.json({status:true, message:"Game Fetched Successfully",game_details:game})
    }catch(err){
        console.log(err);
        throw err;
    }
};

const updateGame = async(req, res) => {
    try{
    const id = req.params.id;
    await Game.findByIdAndUpdate({_id:id},req.body);
    return res.json({status:true, message:"Game Updated Successfully"})
    }catch(err){
        console.log(err);
        throw err;
    }
};

const deleteGame = async(req, res) => {
    try{
        const id = req.params.id;
        await Game.findByIdAndDelete({_id:id});
        return res.json({status:true, message:"Game Deleted Successfully"})
    }catch(err){
        console.log(err);
        throw err;
    }
};

export { createGame };
export { getGameByUserId };
export { updateGame };
export { deleteGame };