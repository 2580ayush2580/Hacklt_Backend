const mongoose = require('mongoose');

const SubmitScheama = new mongoose.Schema({
    link:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    userEmail:{
        type: String,
        required:true,
    },
    hackathonId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
})

const SubmissionList = mongoose.model('SubmissionList',SubmitScheama);

module.exports = SubmissionList ; 