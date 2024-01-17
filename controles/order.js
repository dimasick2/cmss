const mongoose = require("mongoose");
const Position=require('../modul/pos')
const Order=require('../modul/orders')

module.exports.Getorder=async function(req,res){
    // res.json({'order':'Getorder'})
    const orderAll = await Position.find()
    res.render('order.hbs',{
        position:orderAll,
        orderName:orderAll.order,
        quantity:orderAll.order,
        price:orderAll.order
    })
}
module.exports.Setorder=async function(req,res){
    console.log(req.body)
    const formattedDate = new Date();
    const year = formattedDate.getUTCFullYear();
    const month = (formattedDate.getUTCMonth() + 1).toString().padStart(2, '0'); // +1, так как месяцы в JavaScript начинаются с 0
    const day = formattedDate.getUTCDate().toString().padStart(2, '0');

    const curentDate= `${year}-${month}-${day}`;
    console.log(curentDate)

    const order = new Order({
        orderName:req.body.orderName,
        quantity:req.body.quantity,
        price:req.body.price,        
        orderDate: curentDate,
    })
    if(order){
        order.save().then(()=>{
                    // res.json({"message":"true"})
                    console.log('Товар добавлен')
                    res.json({"message":"true"})
        
                })
        }
    }


