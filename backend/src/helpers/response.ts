import { NextFunction, Request, Response } from "express";

export const BirdieResponse = (_req : Request, res : Response, next : NextFunction) => {
    // Prevent some confident output errors
    var _json = res.json.bind(res)
    res.json = (_data) => {
        return process.env.NODE_ENV === 'development' ? _json(_data) :
            (res.statusCode !== 200) ? _json({error: 'An error was occurred providing data information, a notification was sent to Birdie. Sorry about it! ;('}) : _json(_data)
        
    }
    next()
}
