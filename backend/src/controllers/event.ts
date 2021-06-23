import * as express from "express";
import { Error } from "sequelize/types";
import { Json } from "sequelize/types/lib/utils";
import { db } from "../config/db";

require('dotenv/config');

export const eventController = express.Router();

var initModels   = require('../models/index');
var models       = initModels(db.sequelize);
var limitPerPage = 10

eventController.get('/event/:page', (req, res) => {
    models.events.findAndCountAll({
        order : [
            ['timestamp', 'DESC']
        ],
        limit: limitPerPage,
        offset: parseInt(req.params.page) * limitPerPage
    })
    .then((data : Json) => res.status(200).json(data))
    .catch((error : Error) => {
        if(process.env.NODE_ENV === 'development'){
            res.status(400).json(error)
        }else{
            res.status(400).json({message : error.message, name: error.name})
        }
    })
})

.get('/event/:recipient/:page', (req, res) => {
    models.events.findAndCountAll({
        where : {
            'care_recipient_id' : req.params.recipient
        },
        order : [
            ['timestamp', 'DESC']
        ],
        limit: limitPerPage,
        offset: parseInt(req.params.page) * limitPerPage
    })
    .then((data : Json) => res.status(200).json(data))
    .catch((error : Error) => {
        if(process.env.NODE_ENV === 'development'){
            res.status(400).json(error)
        }else{
            res.status(400).json({message : error.message, name: error.name})
        }
    })
});