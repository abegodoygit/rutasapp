import sql from 'mssql'
import config from '../config.js'


const dbSettings={
/*user:'AbeGoodVar_SQLLogin_1',
password:'8imv6anfof',
server:'rutasDB.mssql.somee.com',
database:'rutasDB',*/
user:config.dbUser,
password:config.dbPassword,
server:config.dbServer,
database:config.dbDatabase,
options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

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
export async function getConnection(){
  try{
   const pool=await sql.connect(dbSettings)
     return pool 
     //const result=await pool.request().query('SELECT 1')
    // console.log(result)
  }catch(error){
      console.error(error);
  }
    
  }

export {sql};//exportamos sql al controller

//getConnection()