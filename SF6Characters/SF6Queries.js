const sf6Character = require('./SF6CharModel');
const sfTitle = require('./sfTitleModel');


const  addCharacter =  (name, age, country, martialArts, specialMoves, title ) =>{
        return  sf6Character.create({
            name: name,
            age: age,
            country: country,
            martialArts: martialArts,
            specialMoves: specialMoves,
            gameFirstApprearedIn: title,
        }, {new: true})
}

const getAddCharacters =  ()=>{
    return  sf6Character.find({});
}

const addSFTitle = (title)=> {
    return sfTitle.create({
        title: title
    })
}

const removeChar = (objectID) => {
    return sf6Character.findByIdAndDelete(objectID, {new: true}).exec()
}


module.exports = {
    addCharacter,
    getAddCharacters,
    addSFTitle,
    removeChar
}