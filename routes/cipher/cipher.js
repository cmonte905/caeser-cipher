const express = require('express')
const router = express.Router()
const caeser = require('../../cryption.js')


router.post('/enc', (req, res) => {
    encrpyt_text = caeser.encrypt(req.body.text, req.body.offset)
    console.log(req.body.text)
    console.log(req.body.offset)
    console.log(encrpyt_text)
    caeser.encrypt("This is a test", 5)
    res.json(encrpyt_text)  // <==== req.body will be a parsed JSON object
    // res.json(req.body)
});

router.post('/dec', (req, res) => {
    decrpyt_text = caeser.decrypt(encrpyt_text, 5)
    let text = { "Encrypted text": encrpyt_text, "Decrypted text": decrpyt_text };
    console.log('resposne: ' + text)
    res.send(text)
});

module.exports = router;
