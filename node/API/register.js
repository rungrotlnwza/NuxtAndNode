const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User'); // สร้างโมเดล User

const register = async(req, res) => {
    const { username, email, password } = req.body;

    try {
        // สร้างผู้ใช้ใหม่
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

module.exports = { register };