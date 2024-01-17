const express = require("express");

const categoryContoller=require('../controles/category')

const urlencodedParser = express.urlencoded({extended: false});
// const app = express();


 
// определяем Router
const categoryRouter = express.Router();
 
// определяем маршруты и их обработчики внутри роутера
categoryRouter.get("/", categoryContoller.Getcategory)
categoryRouter.post("/", categoryContoller.Setcategory)
categoryRouter.delete("/", categoryContoller.DeliteCategory)
// categoryRouter.get("/:id",urlencodedParser, categoryContoller.DeliteCategory)

// categoryRouter.put("/", urlencodedParser, categoryContoller.PutCategory)


module.exports=categoryRouter