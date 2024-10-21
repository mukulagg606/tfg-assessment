import express from 'express';
import bodyParser from 'body-parser';
import { config } from "dotenv";
import sqldb from "./config/mySql.js";
import {userRouter} from "./routes/userRoutes.js";
config();

const app = express();
app.use(bodyParser.json());
app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});