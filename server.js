const express = require('express');
const app = express();
const carApi = require("./carapi.json");
const PORT = process.env.PORT || 4000;


app.get('/cars', (req, res) => {
    return res.send(carApi)
})


app.listen(PORT, () => {
    console.log(`server is listen on ${PORT}`);
})

