 const mongoose = require('mongoose')
const URL = process.env.MONGODB_URI
  mongoose.connect(URL)
   .then(()=>{
    console.log(`connection to Database connnected sucessfully`)
   }).catch((error)=>{
    console.log(`connection to Database failed`, error.message);
   })
   