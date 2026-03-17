const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "List of users"})
})

router.get('/:id', (req, res) => {
    res.json({message: "Get single user"})
})

router.post('/', (req, res) => {
    res.json({message: "Create new user"})
})

router.put('/:id', (req, res) => {
    res.json({message: "Update user"})
})

router.delete('/:id', (req, res) => {
    res.json({message: "Delete user"})
})

module.exports = router