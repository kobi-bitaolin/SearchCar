const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const carApi = require("./carapi.json");
// const path = require('path');
const db = 'mongodb+srv://kobi123:kobi123@cluster0.pwfuj.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection
    .once('open', () => console.log('mongodb Connected'))
    .on('error', (error) => {
        console.log('mongodb erorr', error);
    })

    app.get('/cars', (req, res) => {
        return res.send(carApi)
    });

    
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    
  

    app.listen(PORT, () => {
        console.log(`server is listen on ${PORT}`);
    });
    app.use('/users', require('./routes/userRouter'));
