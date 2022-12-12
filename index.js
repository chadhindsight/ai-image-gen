const express = require('express');
// Sets up env access
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5050;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => {
    console.log(`Server started on PORT ${port}`)
})