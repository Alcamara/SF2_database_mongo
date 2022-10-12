const mongoose = require('mongoose');
const  {

    addCharacter,
    getAddCharacters

} = require('./SF6Characters/SF6Queries')



const connect = () => {
    return mongoose.connect('mongodb://localhost:27017', {
        useNewUrlParser: true
      })
}


connect()
  .then(async ()=>{

    // const newCharacter1 = await addCharacter('Kimberly', 20,'USA', 'Bushin-ryu Ninjutsu', ['Vagabond Edge','Bushin Senpukyaku']).exec();
    // console.log(newCharacter1);

    const allCharacter = await getAddCharacters()

    console.log(allCharacter);

  })
  .catch(e =>{
    console.error(`Error: ${e}`);
  })

module.exports = connect