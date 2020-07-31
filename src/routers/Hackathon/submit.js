const express = require('express')
const SubmissionList = require('../../models/Hackathon/submit');
const router = new express.Router()

router.post('/hackathon/submit', async (req, res) => {
    const submissionList = new SubmissionList({
        ...req.body
    }) 

    try {
        await submissionList.save()
        res.status(201).send(submissionList)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/hackathon/submit/:id', async (req, res) => {
    const hackathonId =req.params.id;
    try {
        const submissionList = await SubmissionList.find({hackathonId})
        res.send(submissionList)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
