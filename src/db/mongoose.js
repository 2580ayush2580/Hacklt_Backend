const mongoose = require('mongoose');
const HackathonList = require('../models/Hackathon/create');
const url = 'mongodb://127.0.0.1:27017/Hacklt';

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

// const User = mongoose.model('user',{
//     name:{
//         type:String
//     }
// })

// const me = new User({
//     name:'Ayush'
// })

// me.save().then(()=>{
//     console.log('Success')
// })
// .catch((err)=>{
//     console.log("Error"+err)
// })

// const list = new HackathonList({
//     nameOfHackathon:'XYZ',
//     aboutTheHackathon:"abcd0",
//     problemStatement:"abcd0",
//     prizes:"abcd0",
//     startDate:"12",
//     maxTeamSize:5,
//     endDate:'14',
// })

// list.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })