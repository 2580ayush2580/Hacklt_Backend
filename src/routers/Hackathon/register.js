const express = require('express')
const ParticipantList = require('../../models/Hackathon/register');
const router = new express.Router()

router.post('/hackathon/register', async (req, res) => {
    const participantList = new ParticipantList({
        ...req.body
    }) 

    try {
        await participantList.save()
        res.status(201).send(participantList)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/hackathon/register', async (req, res) => {
    try {
        const participantList = await ParticipantList.find({})
        res.send(participantList)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router