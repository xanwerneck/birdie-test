import * as express from "express";
import { eventController } from "./controllers/event";
import { pingController } from "./controllers/ping";

var cors  = require('cors');
var corsOptions = {
    origin : '*'
}

const app = express();

app
.use(cors(corsOptions))
.use(pingController)
.use(eventController);

export default app;
