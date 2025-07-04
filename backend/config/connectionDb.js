const mongoose = require('mongoose');
const dotenv=require('dotenv').config()

const connectionDb=async ()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>{console.log('connected!')})
    .catch((e)=>{console.log(e)})
}

module.exports=connectionDb;