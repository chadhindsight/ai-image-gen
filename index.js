const path = require('path')
const express = require('express');
// Sets up env access
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5050;

const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
})