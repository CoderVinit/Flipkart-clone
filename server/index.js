import express from 'express'
import dotenv from 'dotenv'
import Connection from './database/db.js';
import defaultdata from './default.js';
import Router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';


const app = express();
dotenv.config();



app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", Router);





const Port = process.env.PORT;
Connection().then(() => app.listen(Port, () => {
    console.log(`Your server is connected to mongodb with port ${Port}`);
})).then(() => defaultdata())





