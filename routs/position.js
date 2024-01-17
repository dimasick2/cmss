const express = require("express");

const positionContoller=require('../controles/position')

const urlencodedParser = express.urlencoded({extended: false});
// const app = express();


 
// определяем Router
const positionRouter = express.Router();
 
// определяем маршруты и их обработчики внутри роутера
positionRouter.get("/:id", positionContoller.Getposition)
positionRouter.post("/:id", positionContoller.Setposition)
positionRouter.delete("/:id", positionContoller.Deliteposition)
// categoryRouter.get("/:id",urlencodedParser, categoryContoller.DeliteCategory)

// categoryRouter.put("/", urlencodedParser, categoryContoller.PutCategory)


module.exports=positionRouter