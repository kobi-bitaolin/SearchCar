const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const carApi = require("./carapi.json");
const path = require('path');
dotenv.config();
const db = 'mongodb+srv://' + process.env.MONGO_ATLAS + '@cluster0.pwfuj.mongodb.net/<dbname>?retryWrites=true&w=majority';

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

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.use('/users', require('./routes/userRouter'));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is listen on ${PORT}`);
});
