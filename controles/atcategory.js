const mongoose = require("mongoose");
const Category=require('../modul/category')


module.exports.Getatcategory=async function(req,res){
    const categoryAll = await Category.find()
    res.render('atcategory.hbs',{
        category:categoryAll
    })

   
}