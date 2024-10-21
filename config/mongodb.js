import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {});

const mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongodb.once('open', () => {
    console.log('MongoDB connected');
});

export default mongodb;