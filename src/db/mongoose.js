const mongoose = require('mongoose');
const HackathonList = require('../models/Hackathon/create');
require('dotenv').config({
    path: './src/config/config.env'
  });
const url =process.env.MONGO_URI;

mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database  Connected!');
}).catch((error)=>{
    console.log('Database Not Connected!' + error);
});
