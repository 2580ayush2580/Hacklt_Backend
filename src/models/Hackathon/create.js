const mongoose = require('mongoose');

const createHackathonScheama = new mongoose.Schema({
    nameOfHackathon:{
        type:String,
        required:true,
        trim:true
    },
    aboutTheHackathon:{
        type:String,
        required:true
    },
    problemStatement:{
        type:String,
        required:true
    },
    maxTeamSize:{
        type: Number,
        required:true
    },
    links:{
        type:String,
        default:''
    },
    prizes:{
        type:String,
        default:''
    },
    Judges:{
        type:String,
        default:''
    },
    sponsors:{
        type:String,
        default:''
    },
    startDate:{
        type: String,
        required: true
    },
    endDate:{
        type: String,
        required: true
    },
    location:{
        type:String
    }
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     default:''
    // }
})

const HackathonList = mongoose.model('HackathonList',createHackathonScheama);

module.exports = HackathonList ;