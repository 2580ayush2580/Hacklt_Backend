const mongoose = require('mongoose');

const registerHackathonScheama = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type: String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true

    },
    degree:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    graduationYear:{
        type: String,
        required: true
    },
    skills:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    contactNumber:{
        type:String,
        required: true
    },
    alternateContactNumber:{
        type:String,
        required: true
    },
    hackathonId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    data:{
        type:Object
    }
})

const ParticipantList = mongoose.model('ParticipantList',registerHackathonScheama);

module.exports = ParticipantList ; 