const express = require("express");

const orderContoller=require('../controles/order')


// const app = express();


 
// определяем Router
const orderRouter = express.Router();
 
// определяем маршруты и их обработчики внутри роутера
orderRouter.get("/", orderContoller.Getorder)
orderRouter.post("/", orderContoller.Setorder)

module.exports=orderRouter