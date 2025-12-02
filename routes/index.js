// load the express framework
const express = require('express')

// create the router object to handle routes
const router = express.Router()

// load the function that returns a random wyr question
const randomwyrquestion = require('../model/wyr_questions')

// route for the home page (temporary placeholder message)
router.get('/', function (req, res, next) {
    res.send('placeholder for home page')
})

// route that returns a random "would you rather" question as json
router.get('/wyr', function (req, res, next) {

    // call the function to get a random wyr question
    const wyr = randomwyrquestion()

    // send the random question back as a json response
    res.json(wyr)
})

// export the router so it can be used in server.js
module.exports = router
