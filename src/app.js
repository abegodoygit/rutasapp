import express from 'express'
//import userRoutes from './routes/users.routes.js'
import allRoutes from './routes/all.routes.js'

const app=express()


app.use(express.json());

//app.use(express.json());//para enviar datos Json en el body de una peticion


app.use(express.urlencoded({extended:false}));

//app.use(userRoutes);
app.use(allRoutes);

export default app;