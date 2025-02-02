const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User'); // นำเข้าโมเดล User

// ฟังก์ชัน register
const register = async(req, res) => {
    // ดึงข้อมูลจาก request body
    const { username, email, password } = req.body;

    try {
        // ตรวจสอบว่าข้อมูลจำเป็นถูกส่งมาหรือไม่
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // ตรวจสอบว่ามีผู้ใช้ที่มี email หรือ username ซ้ำกันหรือไม่
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'ชื่อมันซ้ำ' });
        }

        // สร้างผู้ใช้ใหม่
        const newUser = new User({ username, email, password });

        // บันทึกผู้ใช้ใหม่ลงในฐานข้อมูล
        await newUser.save();

        // ส่ง response กลับไปยัง client
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        // จัดการข้อผิดพลาด
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

// ส่งออกฟังก์ชัน register
module.exports = register; // ส่งออกฟังก์ชัน register โดยตรง