const  mongoose = require('mongoose');

mongoose.Promise = global.Promise;

connect =() =>{
    return mongoose.connect('mongodb://localhost:27017')
}

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

const SfCharacter = mongoose.model('sfCharacter', sfCharacter)


connect()
 .then( async connect =>{

    // const newCharacter = await SfCharacter.create({
    //     name:'Balrog',
    //     age: 45,
    //     country:'USA',
    //     martialArts:'Boxing',
    //     specialMoves: ['Drive Punch','Giga Punch']
    // })

    // console.log(newCharacter);

    const allCharacter = await SfCharacter.find({});

    console.log(allCharacter);

    // const del = await SfCharacter.deleteOne({_id: "633d32a7bf9c2a13e672f488" });
    // console.log(del);

    // console.log(allCharacter);

 })
    .catch(err =>{
        console.error(`${err}`);
    })