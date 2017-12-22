require('dotenv').config()

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , controller = require('./controller')

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/home', controller.homes);

massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    app.get('db').init.seedfile().then(response => {

    })
    app.listen(process.env.PORT, () => {
        console.log(`Im Here on Port: ${process.env.PORT}`)
    })
})