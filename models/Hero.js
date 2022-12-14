const mongoose = require('mongoose')

const HeroSchema = new mongoose.Schema({
    superHero:{
        type: String,
        require: [true,'Please name the hero'],
        unique: true, 
        trim: true
    },
    realName:{
        type: String,
        required: true,
        maxLength:[200,'Please keep real name short']
    }
})

module.exports =mongoose.models.Hero || mongoose.model('Hero',HeroSchema)