
//rout
const express = require("express");

const authContoller=require('../controles/auth')


// const app = express();


 
// определяем Router
const authRouter = express.Router();
 
// определяем маршруты и их обработчики внутри роутера
authRouter.post("/login", authContoller.login)
authRouter.post("/registry", authContoller.registry)

module.exports=authRouter