// load the express framework
const express = require('express')

// load the router that handles the main routes
const indexrouter = require('./routes/index')

// create the express application
const app = express()

// use the router for all incoming requests
app.use('/', indexrouter)

// start the web server on port 4000 or the environment port
const server = app.listen(process.env.PORT || 4000, function () {
    console.log('server is running on port', server.address().port)
})
