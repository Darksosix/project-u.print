const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

// -----------------------------
// 1) REGISTER
// -----------------------------
router.post('/register', async (req, res) => {
  try {
    const {
      firstName, lastName, phoneNumber, email,
      address, subDistrict, district, province, zipCode,
      password, passwordConfirm,
    } = req.body;

    // 1. ตรวจสอบว่ารหัสผ่านตรงกันหรือไม่
    if (password !== passwordConfirm) {
      return res.status(400).json({ message: 'รหัสผ่านยืนยันไม่ตรงกัน' });
    }

    // 2. ตรวจสอบว่ามี email นี้แล้วหรือยัง
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(400).json({ message: 'Email นี้มีในระบบอยู่แล้ว' });
    }

    // 3. Hash รหัสผ่านด้วย bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. สร้าง user ใหม่
    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      subDistrict,
      district,
      province,
      zipCode,
      password: hashedPassword, // เก็บเป็น hashed password
    });

    // 5. บันทึกลง MongoDB
    await newUser.save();

    res.status(201).json({ message: 'สมัครสมาชิกเรียบร้อย', userId: newUser._id });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
  }
});

// -----------------------------
// 2) LOGIN
// -----------------------------
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. ค้นหา user ในฐานข้อมูล
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }

    // 2. เทียบรหัสผ่าน (password) กับ hashed password ใน DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }

    // ถ้าถูกต้อง ก็สามารถส่งข้อมูล User กลับไปได้ตามต้องการ
    // (อาจจะใช้ JWT ก็ได้ แต่ในตัวอย่างนี้ส่งชื่อไปเฉย ๆ)
    res.json({
      message: 'เข้าสู่ระบบสำเร็จ',
      user: {
        id: user._id,
        email: user.email,
        fullName: `${user.firstName} ${user.lastName}`,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' });
  }
});

module.exports = router;
