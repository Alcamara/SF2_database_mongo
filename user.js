const sfCharacter = new mongoose.Schema({
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

module.exports = mongoose.model('sfCharacter', sfCharacter)