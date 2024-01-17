const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userScheme = new Schema({
    position: {
        type: String,
        require:true
        
    },
    idCategory:{
        type: String,
        require:true
        
    },
    price:{
        type: String,
        require:true
        
    }
});
module.exports = mongoose.model("positions", userScheme);