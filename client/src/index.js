const express = require ('express')
const bodyParser = require ('body-parser')

const routes = require('./routes')

const app = express ()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("api"/routes) 

/*Because you put ^api in front of routes. Now when you go to your
postman, you have to put /api in front of localhost8000
Like THIS: http://localhost8000/api
/*

/*  Put your routes and other code here! */

app.listen(8000, () => {
    console.log("Server Listening on port 8000")
})