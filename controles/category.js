const mongoose = require("mongoose");
const Category=require('../modul/category')


module.exports.Getcategory=async function(req,res){
    const categoryAll = await Category.find()
    res.render('categories.hbs',{
        category:categoryAll
    })

   
}
module.exports.Setcategory= async function(req,res){
    // res.json({'category':'Postcategory'})
    // console.log(req.body)
    const category = new Category({
        category: req.body.category,
    })
    const currentUser=await Category.findOne({category:req.body.category});
    console.log(req.body);
    if(currentUser){
        console.log('Уже есть товар');
        res.json({"message":"false"})
    }else{
        category.save().then(()=>{
            // res.json({"message":"true"})


        })
    }
 
}
module.exports.DeliteCategory=async function(req,res){
    console.log(req.body)
    // const category = new Category({
    //     category: req.body.category,
    // })
    console.log(req.body.category)
    const deliteUser=await Category.deleteOne({_id:req.body.category});
    console.log(deliteUser);
    if(deliteUser){
        console.log('Товар удалён');
        res.json({"message":"true"})
    }
}

// module.exports.PutCategory=async function(req,res){
//     console.log(req.body)
//     const category = new Category({
//         category: req.body.category,
//     })
//     const putUser=await Category.updateOne({category:'Напитки'});
//     console.log(putUser);
//     if(deliteUser){
//         console.log('Товар удалён');
//         res.json({"message":"true"})
//     }
    
// }