const express = require('express')
const router = express.Router()

// Getting all conversations
router.get('/', (req, res) =>{
    res.send("Hello World")
})
// Getting one conversation
router.get('/:id', (req, res) =>{
    //accessing params
    //req.params.id
    res.send(req.params.id)
})
// Creating a conversation ( Contact seller ect.)
router.post('/',(req, res) =>{
    //accessing params
    //req.params.id
})  

// Update conversation (add messages)
router.patch('/', (req, res) => {
    
})

// Deleting conversation

module.exports=router