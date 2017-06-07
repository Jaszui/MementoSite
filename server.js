/**
 * Created by Dell on 2017-06-07.
 */
const express = require('express')
const app = express()


app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/index.html") ;
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})