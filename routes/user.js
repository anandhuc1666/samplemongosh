const express = require('express')
const router = express.Router();
const User = require('../models/user')

//create a new users in post:

router.post('/', async (req, res) => {
    const { name, email, number } = req.body
    try {
        const user = new User({name, email, number })
        await user.save()
        res.status(200).json({ message: "user created successfully" })
    } catch (err) {
        res.status(404).json({ err: err.message });

    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
})



module.exports = router;