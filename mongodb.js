const  mongoose = require('mongoose');

mongoose.Promise = global.Promise;

connect =() =>{
    return mongoose.connect('mongodb://localhost:27017')
}

const sfCharacter = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age:Number,
    country: String,
    martialArts:{ 
        type:String,
        required: true,
    },
    specialMoves:[{type:String}]
    
})