const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes'); // ไฟล์ router ที่จะสร้าง

const app = express();
app.use(cors());              // ให้ Frontend ที่อยู่คนละ Origin เรียกได้
app.use(express.json());      // ให้ Express parse JSON ได้

// เชื่อมต่อ MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ใช้ userRoutes สำหรับ path /api/users
app.use('/api/users', userRoutes);

// ตัวอย่างเช็คว่าทำงานหรือไม่
app.get('/', (req, res) => {
  res.send('Hello from server.js');
});

// เริ่มต้นเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
