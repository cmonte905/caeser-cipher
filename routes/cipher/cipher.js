const express = require('express')
const router = express.Router()
const caeser = require('../../cryption.js')


router.post('/enc', (req, res) => { 
    res.json(caeser.encrypt(req.body.text, req.body.offset, true))  // <==== req.body will be a parsed JSON object
});

router.post('/dec', (req, res) => {
    res.send(caeser.encrypt(req.body.text, req.body.offset, false))
});

module.exports = router;
