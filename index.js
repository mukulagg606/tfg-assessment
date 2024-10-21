import express from 'express';
import bodyParser from 'body-parser';
import sqldb from "./config/mySql.js";
import mongodb from "./config/mongodb.js";
import { consumeMessage } from './services/subscriber.js';
import {userRouter} from "./routes/userRoutes.js";
import {gameRouter} from "./routes/gameRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/api', gameRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    consumeMessage('user_registration');
});