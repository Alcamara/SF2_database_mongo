const sf6Character = require('./SF6CharModel');


const  addCharacter =  (name, age, country, martialArts, specialMoves ) =>{
        return  sf6Character.create({
            name: name,
            age: age,
            country: country,
            martialArts: martialArts,
            specialMoves: specialMoves
        }, {new: true})
}

const getAddCharacters =  ()=>{
    return  sf6Character.find({});
}


module.exports = {
    addCharacter,
    getAddCharacters
}