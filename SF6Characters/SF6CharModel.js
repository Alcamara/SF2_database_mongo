const mongoose = require('mongoose'); 

const sf6Character = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:Number,
    country: String,
    martialArts:{ 
        type:String,
        required: true,
    },
    specialMoves:[{type:String}]
    
})

module.exports = mongoose.model('SF6Characters',sf6Character)

