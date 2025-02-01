const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// กำหนด Routing สำหรับ /api
app.use('/api', require('./routes/RoutesAPI'));

app.listen(port, () => {
    console.log(`server is runing in ${port}`)
});