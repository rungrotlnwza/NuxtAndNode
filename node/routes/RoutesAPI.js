const express = require('express');
const router = express.Router();


// Route for /api
router.get('/', require('../API/example'));
router.get('/register', require('../API/register'));

module.exports = router;