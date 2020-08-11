const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;




app.get('/cars', (req, res) => {
    let carArray = [
        {
            id: 1,
            name: 'cadilac',
            year: '2020',
            color: 'black',
            made_in: 'Usa',
            image: 'images/black_cadilac.jpg'
        },
        {
            id: 2,
            name: 'cadilac',
            year: '2020',
            color: 'brown',
            made_in: 'Usa',
            image: 'images/brown_cadilac.jpg'
        },
        {
            id: 3,
            name: 'cadilac',
            year: '2015',
            color: 'red',
            made_in: 'Usa',
            image: 'images/red_cadilac.jpg'
        },
        {
            id: 4,
            name: 'cadilac',
            year: '2015',
            color: 'white',
            made_in: 'Usa',
            image: 'images/white_cadilac.jpg'
        },
        {
            id: 5,
            name: 'honda',
            year: '2020',
            color: 'white',
            made_in: 'Japan',
            image: 'images/whit_honda.jpg'
        },
        {
            id: 6,
            name: 'honda',
            year: '2020',
            color: 'blue',
            made_in: 'Japan',
            image: 'images/blue_honda.jpg'
        },
        {
            id: 7,
            name: 'honda',
            year: '2016',
            color: 'red',
            made_in: 'Japan',
            image: 'images/red_honda.jpg'
        },
        {
            id: 8,
            name: 'honda',
            year: '2016',
            color: 'orange',
            made_in: 'Japan',
            image: 'images/orange_honda.jpg'
        },
        {
            id: 9,
            name: 'mazda',
            year: '2014',
            color: 'black',
            made_in: 'Japan',
            image: 'images/black_mazda.jpg'
        },
        {
            id: 10,
            name: 'mazda',
            year: '2014',
            color: 'red',
            made_in: 'Japan',
            image: 'images/red_mazda.jpg'
        },
        {
            id: 11,
            name: 'mazda',
            year: '2012',
            color: 'white',
            made_in: 'Japan',
            image: 'images/whit_mazda.jpg'
        },
        {
            id: 12,
            name: 'mazda',
            year: '2012',
            color: 'blue',
            made_in: 'Japan',
            image: 'images/blue_mazda.jpg'
        },
        {
            id: 13,
            name: 'kia',
            year: '2012',
            color: 'blue',
            made_in: 'South Korea',
            image: 'images/blue_kia.jpg'
        },
        {
            id: 14,
            name: 'kia',
            year: '2012',
            color: 'red',
            made_in: 'South Korea',
            image: 'images/red_kia.jpg'
        },
        {
            id: 15,
            name: 'kia',
            year: '2010',
            color: 'white',
            made_in: 'South Korea',
            image: 'images/whit_kia.jpg'
        },
        {
            id: 16,
            name: 'kia',
            year: '2010',
            color: 'black',
            made_in: 'Germany',
            image: 'images/black_kia.jpg'
        },
        {
            id: 17,
            name: 'audi',
            year: '2012',
            color: 'blue',
            made_in: 'Germany',
            image: 'images/blue_audi.jpg'
        },
        {
            id: 18,
            name: 'audi',
            year: '2012',
            color: 'red',
            made_in: 'Germany',
            image: 'images/red_audi.jpg'
        },
        {
            id: 19,
            name: 'audi',
            year: '2010',
            color: 'white',
            made_in: 'Germany',
            image: 'images/whit_audi.jpg'
        },
        {
            id: 20,
            name: 'audi',
            year: '2010',
            color: 'black',
            made_in: 'South Korea',
            image: 'images/black_audi.jpg'
        },
        {
            id: 21,
            name: 'mercedes',
            year: '2012',
            color: 'red',
            made_in: 'Germany',
            image: 'images/red_mercedes.jpg'
        },
        {
            id: 22,
            name: 'mercedes',
            year: '2010',
            color: 'white',
            made_in: 'Germany',
            image: 'images/whit_mercedes.jpg'
        },
        {
            id: 23,
            name: 'mercedes',
            year: '2010',
            color: 'black',
            made_in: 'South Korea',
            image: 'images/black_mercedes.jpg'
        },
        {
            id: 24,
            name: 'mercedes',
            year: '2010',
            color: 'blue',
            made_in: 'Germany',
            image: 'images/blue_mercedes.jpg'
        },
    ]
    return res.send(carArray)
})


app.listen(PORT, () => {
    console.log(`server is listen on ${PORT}`);
})

