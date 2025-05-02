//import
const express = require('express');
const bodyParser = require('body-parser');
//rest obj
const app = express();

//routes
app.get('/', (req, res) => {
    res.send("<h1>Welcome to tech knowledge</h1>")
})

app.get('/about', (req, res) => {
    res.send("Welcome to my about page")
})

//middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
//post method
app.post('/contact-form', (req, res) => {
    res.json({
        success: true,
        message: "welcome to my contact page"
    });
});


// create listener 
const port = 8070;
app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
})