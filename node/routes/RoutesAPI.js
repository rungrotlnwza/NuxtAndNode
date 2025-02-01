const express = require('express');
const router = express.Router();
const path = require('path');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json()); // สำหรับการอ่านข้อมูล JSON จาก request body
mongoose.connect('mongodb://localhost:27017/myapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// สร้าง Schema สำหรับผู้ใช้
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);


// Route for /api
router.get('/', require('../API/example'));
router.get('/register', require('../API/register'));

module.exports = router;