const mongoose = require('mongoose'); 


const streetFighterTitle = new mongoose.Schema({
    title: String,
})

module.exports =   mongoose.model('title',streetFighterTitle);