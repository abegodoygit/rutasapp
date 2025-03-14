import express from 'express'
import config from './config.js'
//import userRoutes from './routes/users.routes.js'
import allRoutes from './routes/all.routes.js'

const app=express()

//const cors = require('cors');
app.set('port', config.port)
app.use(express.json());

//app.use(express.json());//para enviar datos Json en el body de una peticion


app.use(express.urlencoded({extended:false}));

//app.use(cors())
//app.use(userRoutes);
app.use(allRoutes,allRoutes);


export default app;