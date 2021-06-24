import * as express from "express";
import { eventController } from "./controllers/event";
import { pingController } from "./controllers/ping";
import { BirdieResponse } from "./helpers/response";

var cors  = require('cors');
var corsOptions = {
    origin : '*'
}

const app = express();

app
.use(cors(corsOptions))
// Middleware to prevent some potential informations about errors in production
.use(BirdieResponse) 
.use(pingController)
.use(eventController)

export default app;
