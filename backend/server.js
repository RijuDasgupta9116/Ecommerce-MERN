const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,

}))

app.use(bodyParser.json());
app.use(cookieParser())


require('dotenv').config();

app.use('/api',require('./routes/authRoutes'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})