// 1. เรียกใช้งาน Express ซึ่งเป็นเครื่องมือสร้าง Web Server
const express = require("express");
const app = express();

// 2. สร้าง Route หรือเส้นทาง เมื่อมีคนพิมพ์ URL เข้ามาที่หน้าแรก (/)
app.get("/", (request, response) => {
  // สิ่งที่ Server จะตอบกลับไป (Response)
  response.send(`
    <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
      <h1>ยินดีต้อนรับสู่ Server ของผม/หนู</h1>
      <p>นี่คือ Web Server เครื่องแรกที่สร้างขึ้นเองครับ/ค่ะ</p>
      <hr>
      <h2>ข้อมูลนักศึกษา</h2>
      <p><strong>รหัสนักศึกษา:</strong> 69319010399</p>
      <p><strong>ชื่อ-นามสกุล:</strong> นางสาวศิริลักษณ์ อบนวล</p>
    </div>
  `);
});

// 3. สั่งให้ Server เริ่มทำงานและรอรับข้อมูลที่ Port ที่ Render กำหนด (หรือ 3000 ถ้ารันในเครื่อง)
const PORT = process.env.PORT || 3000;
const listener = app.listen(PORT, () => {
  console.log("Server กำลังทำงานที่ Port " + listener.address().port);
});
