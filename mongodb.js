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
    //     name:'Ken Master',
    //     age: 52,
    //     country:'USA',
    //     martialArts:'Karate',
    //     specialMoves: ['Hadoken','Tasumaki Senpu-kyaju']
    // })

    // console.log(newCharacter);

    // const allCharacter = await SfCharacter.find({});

    // console.log('before' ,allCharacter);

    // const del = await SfCharacter.deleteOne({_id: "6344db5b65bcfd58c19e8fdd" });
    // console.log(del);

    // console.log(allCharacter);

    // const usCharacters = await await SfCharacter.find({country: 'USA'});

    // console.log('Characters from the US', usCharacters);

    // const charUpdate = await SfCharacter.findByIdAndUpdate("6344d1fe4c03d9e097f7cde5",{name: 'Ed'}, {new: true}).exec()

    // console.log(charUpdate);

    const upCharacter = await SfCharacter.find({});

    const sfCharList = []

    for (let char of upCharacter) {
        console.log('Next Character: ',char);

        sfCharList.push(char._id)
    }

    console.log(sfCharList);



    // const delChar = await SfCharacter.findByIdAndRemove('6344ee4a02b3887768ee28c7').exec()

    // console.log(delChar);

 })
    .catch(err =>{
        console.error(err);
    })