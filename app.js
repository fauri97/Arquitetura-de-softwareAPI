const express = require('express');
const app = express();
const morgan = require ('morgan')
const routePerson = require("./routes/personRoute");
const bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use("/", routePerson);

app.use((req,res,next)=>{
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
})

app.use((err, req,res,next)=>{
    res.status(err.status || 500);
    return res.send({error: {
        message: err.message
    }})
})

module.exports = app;
