const mongoose = require("mongoose");
const Order=require('../modul/orders')


module.exports.Gethistory=async function(req,res){
 
    // try {
        // Получаем заказы из базы данных (в данном случае просто массив чисел)

        const orderCount = await Order.countDocuments();
        const orderD = await Order.find();

        console.log(orderCount)
        const orders = Array.from({ length: orderCount }, (_, index) => index + 1);
        // Отображаем количество заказов в Handlebars-шаблоне
      
        res.render('history', {
          orderCount:orders,
           orderDate:orderD,
           price:orderD
          });

      // } catch (error) {
      //   console.error(error);
      //   res.status(500).send('Внутренняя ошибка сервера');
      // }
}