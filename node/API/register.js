const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // สำหรับการอ่านข้อมูล JSON จาก request body

// เชื่อมต่อ MongoDB
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

// ฟังก์ชัน register
const register = async(req, res) => {
    const { username, password } = req.body;

    try {
        // ตรวจสอบว่ามี username นี้ในระบบแล้วหรือไม่
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // เข้ารหัสรหัสผ่าน
        const hashedPassword = await bcrypt.hash(password, 10);

        // สร้างผู้ใช้ใหม่
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        // ส่ง response กลับ
        res.status(201).json({ message: 'User registered successfully', user: { username: newUser.username } });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = register;