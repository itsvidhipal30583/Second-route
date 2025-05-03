const path = require("path");
const express = require('express');
const app = express();


// console.log(__dirname);

// console.log(path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');
//built in middleware
app.use(express.static(staticPath));

app.get('/', (req, res) => { //(route,callback)
    res.send("Welcome to my home page");
});
app.get('/about', (req, res) => { //(route,callback)
    res.send("Welcome to my about page");
});
app.listen(8000, () => {
    console.log("listening on port at 8000")
})