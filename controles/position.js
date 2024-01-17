const mongoose = require("mongoose");
const Position=require('../modul/pos')
const Category=require('../modul/category')

module.exports.Getposition=async function(req,res){
    // console.log(req.params.id)

    const Id = req.params.id
  
  
   
    console.log(Id)
    const categoryAll = await Category.findOne({_id:Id})
    const positionsAll = await Position.find({idCategory:Id})
    res.render('srm.hbs',{
        position:positionsAll,
        categoryName:categoryAll.category,
        categoryId:categoryAll._id
    })
    
    
   
}
module.exports.Setposition= async function(req,res){
       
    const position = new Position({
        position: req.body.position,
        idCategory: req.body.idCategory,
        price:req.body.price
    })
    const currentPos=await Position.findOne({position:req.body.position});
    // const currentCat=await Category.findOne({_id:req.body.category});

    // console.log(req.body);
    if(currentPos){
        console.log('Позиция уже есть');
        res.json({"message":"false"})
    }else{
        position.save().then(()=>{
            console.log('Позиция добавлена')
            res.json({"message":"true"})

        })
    }
 
}
module.exports.Deliteposition=async function(req,res){
    // console.log(req.body)
    // const category = new Category({
    //     category: req.body.category,
    // })
    console.log(req.body.position)
    const delitePos=await Position.deleteOne({_id:req.body.position});
    console.log(delitePos);
    if(delitePos){
        console.log('Товар удалён');
        res.json({"message":"true"})
    }
}