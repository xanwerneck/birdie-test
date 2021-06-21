import { Sequelize } from "sequelize/types";

var DataTypes = require("sequelize").DataTypes;
var _events = require("./events");

function initModels(sequelize : Sequelize) {
  var events = _events(sequelize, DataTypes);

  return {
    events,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
