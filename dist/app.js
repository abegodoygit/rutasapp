"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config.js"));
var _allRoutes = _interopRequireDefault(require("./routes/all.routes.js"));
//import userRoutes from './routes/users.routes.js'

var app = (0, _express["default"])();
var cors = require('cors');
app.set('port', _config["default"].port);
app.use(_express["default"].json());

//app.use(express.json());//para enviar datos Json en el body de una peticion

app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(cors());
//app.use(userRoutes);
app.use(_allRoutes["default"], _allRoutes["default"]);
var _default = exports["default"] = app;