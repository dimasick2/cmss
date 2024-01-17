const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({
    orderName:{
    type: Array,
    require:true
   },
   quantity:{
    type: Array,
    require:true
   },
   price:{
    type:String,
    require:true
   },
   orderDate:{
    type:String,
    require:true
   },
});
module.exports = mongoose.model("orders", userScheme);