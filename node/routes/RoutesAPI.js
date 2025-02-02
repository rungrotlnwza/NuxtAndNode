const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('API is working');
});

// Ensure the required module exports a function
const registerRoute = require('../API/register');
router.post('/register', registerRoute);

module.exports = router;