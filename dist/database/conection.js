"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = _interopRequireDefault(require("mssql"));
var _config = _interopRequireDefault(require("../config.js"));
var dbSettings = {
  user: 'AbeGoodVar_SQLLogin_1',
  password: '8imv6anfof',
  server: 'rutasDB.mssql.somee.com',
  database: 'rutasDB',
  /*user:config.dbUser,
  password:config.dbPassword,
  server:config.dbServer,
  database:config.dbDatabase,*/
  options: {
    encrypt: true,
    // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

//export async function getConnection(){
/*export const getConnection=async ()=>{
try{
 const pool=await sql.connect(dbSettings)
   
   //const result=await pool.request().query('SELECT GETDATE()')
   //console.log(result)
  return pool 

}catch(error){
    console.error(error);
}
  
}*/
function getConnection() {
  return _getConnection.apply(this, arguments);
}
function _getConnection() {
  _getConnection = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mssql["default"].connect(dbSettings);
        case 3:
          pool = _context.sent;
          return _context.abrupt("return", pool);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getConnection.apply(this, arguments);
} //exportamos sql al controller
//getConnection()