"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
//import { getConnection } from "./database/conection.js"

//getConnection()

_app["default"].listen(3000);
console.log('Servidor iniciado!!');