// ไฟล์นี้จะส่ง response กลับด้วย status code 200 เสมอ
const example = (req, res) => {
    res.json({ message: 'This is a response from example.js' });
};

module.exports = example;