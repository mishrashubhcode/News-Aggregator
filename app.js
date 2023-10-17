const express = require('express')
const app=express()
const port = process.env.PORT||3000;
//const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;

// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false }));

app.use('/',require('./routes/news'))

app.use('/',require('./routes/recipes'))

app.set('views','./views')

app.listen(port,()=> console.log("Server has been started"))