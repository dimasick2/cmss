const express = require("express");

const atcategoryContoller=require('../controles/atcategory')

const urlencodedParser = express.urlencoded({extended: false});
// const app = express();


 
// определяем Router
const atcategoryRouter = express.Router();
 
// определяем маршруты и их обработчики внутри роутера
atcategoryRouter.get("/", atcategoryContoller.Getatcategory)
// categoryRouter.post("/", categoryContoller.Setcategory)
// categoryRouter.delete("/", categoryContoller.DeliteCategory)
module.exports=atcategoryRouter
