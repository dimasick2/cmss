const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({
    category: {
        type: String,
        require:true
        
    },
   
});
module.exports = mongoose.model("categories", userScheme);