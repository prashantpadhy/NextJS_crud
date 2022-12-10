import mongoose, { connection } from 'mongoose'

const connect= {}

async function dbConnect(){
   const db =  await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology: true
   })
}

module.exports = dbConnect;