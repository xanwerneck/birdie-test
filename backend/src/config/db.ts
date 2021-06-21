import { Sequelize } from "sequelize";

require('dotenv/config');

let DB_NAME = process.env.DB_NAME || 'birdie'
let DB_USER = process.env.DB_USER || 'root'

const sequelize = new Sequelize(DB_NAME, DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
})

export const db = {
    sequelize,
    Sequelize
}