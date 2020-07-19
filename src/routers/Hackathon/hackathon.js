const express = require('express')
const HackathonList = require('../../models/Hackathon/create');
const router = new express.Router()

router.post('/hackathonLists', async (req, res) => {
    const hackathonList = new HackathonList({
        ...req.body
    }) 

    try {
        await hackathonList.save()
        res.status(201).send(hackathonList)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/hackathonLists', async (req, res) => {
    try {
        const hackathonLists = await HackathonList.find({})
        res.send(hackathonLists)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/hackathonLists/:id', async (req, res) => {
    const owner = req.params.id

    try {
        const hackathonList = await HackathonList.find({owner:owner})

        if (!hackathonList) {
            return res.status(404).send()
        }

        res.send(hackathonList)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/hackathonLists/name/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const hackathonList = await HackathonList.findById(_id);

        if (!hackathonList) {
            return res.status(404).send()
        }

        res.send(hackathonList)
    } catch (e) {
        res.status(500).send()
    }
})

router.delete('/hackathonLists/:id', async (req, res) => {
    try {
        const hackathonList = await HackathonList.findByIdAndDelete(req.params.id)

        if (!hackathonList) {
            res.status(404).send()
        }

        res.send(hackathonList)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router