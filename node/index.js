const express = require('express')
const app = express();
const port = 3000

// app.use(express.json());

// กำหนด Routing สำหรับ /api
app.use('/api', require('./routes/RoutesAPI'));

app.listen(port, () => {
    console.log(`server is runing in ${port}`)
})