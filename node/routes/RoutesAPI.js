const express = require("express");
const router = express.Router();

// Example route
router.get("/", require("../API/example"));
// router.get('/2', (req, res) => {
//     res.send('API is working');
// });

// Ensure the required module exports a function
const registerRoute = require("../API/register");
router.post("/register", registerRoute);
router.get("/register", require("../API/register"));

module.exports = router;
