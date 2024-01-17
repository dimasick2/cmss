const express = require("express");

const historyContoller=require('../controles/history')
// const urlencodedParser = express.urlencoded({extended: false});



 
// определяем Router
const historyRouter = express.Router();
historyRouter.get("/", historyContoller.Gethistory)
// historyRouter.post("/",historyContoller.Sethistory)
module.exports=historyRouter
