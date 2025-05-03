
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.write("<h1>welcome to my home apge</h1>");
    res.write("<h1>welcome to my home again apge</h1>");
    res.send();
});

app.get('/contact', (req, res) => {
    res.status(200).send("welcome to my contact apge")
})

// app.get('/temp', (req, res) => {

//     res.send([
//         {
//         id: 1,
//         name:'vidhi pal'
//         },
//         {
//             id: 1,
//             name: 'vidhi pal'
//         }
//     ])
// })



app.get('/temp', (req, res) => {

    res.json([
        {
            id: 1,
            name: 'vidhi pal'
        },
        {
            id: 1,
            name: 'vidhi pal'
        }
    ])
})

app.listen(8090, () => {
    console.log("listening on port 8090")
})