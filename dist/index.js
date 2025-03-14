"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
//import { getConnection } from "./database/conection.js"

//getConnection()

_app["default"].listen(_app["default"].get('port'));

//console.log('Servidor iniciado!!')