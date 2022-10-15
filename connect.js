const mongoose = require('mongoose');
const  {

    addCharacter,
    getAddCharacters,
    addSFTitle,
    removeChar

} = require('./SF6Characters/SF6Queries')



const connect = () => {
    return mongoose.connect('mongodb://localhost:27017', {
        useNewUrlParser: true
      })
}


connect()
  .then(async ()=>{

    const title = await addSFTitle('Street Fighter 6');

    const newCharacter1 = await addCharacter('Mimi', 30 ,'France', 'MMA', ['tackle','choke hold'], title._id );
    console.log(newCharacter1);

    // const allCharacter = await getAddCharacters()
    // console.log(allCharacter);

    // const delectedChar = await removeChar('634ab156b337fb5cee082def')

    // console.log(delectedChar);

  })
  .catch(e =>{
    console.error(`Error: ${e}`);
  })

module.exports = connect