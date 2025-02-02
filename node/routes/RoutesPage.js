const express = require('express');
const express = require('express');
const router = express.Router();
const path = require('path');

// Route สำหรับ /api
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../AP/example'));
});

module.exports = router;
const path = require('path');