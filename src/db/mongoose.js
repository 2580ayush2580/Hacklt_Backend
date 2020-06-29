const mongoose = require('mongoose');

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

