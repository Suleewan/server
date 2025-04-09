const prisma = require('../config/prisma');  // นำเข้า Prisma Client
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());


exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required!!!" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password is required!!!" });
    }

    // ตรวจสอบว่าอีเมลมีในระบบหรือไม่
    const user = await prisma.user.findFirst({  // ใช้ `user` แทน `User` หากโมเดลใน Prisma เป็นตัวพิมพ์เล็ก
      where: {
        email: email
      }
    });

    // ถ้าเจออีเมลที่ซ้ำในระบบ
    if (user) {
      return res.status(400).json({ message: "Email already exists!!!" });
    }

    // แฮชรหัสผ่านก่อนที่จะบันทึก
    const hashPassword = await bcrypt.hash(password, 10);

    // สร้างผู้ใช้งานใหม่
    await prisma.user.create({
      data: {
        email: email,
        password: hashPassword
      }
    });

    res.send('Register Success');
  } catch (err) {
    console.log(err);  // แสดงข้อผิดพลาดที่เกิดขึ้น
    res.status(500).json({ message: "Server Error" });
  }
};

exports.logout = async (req, res) => {
  try {
    // ไม่จำเป็นต้องทำอะไรในฝั่งเซิร์ฟเวอร์ ถ้าเป็นการออกจากระบบฝั่งผู้ใช้ที่ต้องลบโทเค็นจากฝั่งผู้ใช้
    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // ตรวจสอบรหัสผ่าน (สมมติว่าใช้ bcrypt สำหรับการตรวจสอบรหัสผ่านที่ถูกเข้ารหัส)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Password Invalid' });
    }

    // สร้าง JWT token และตอบกลับ
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1d' });
    res.status(200).json({ message: 'Login successful', token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// exports.login = async (req,res)=>{
//     //code
//     try{
//         const{email,password} =req.body
//         const user = await prisma.user.findFirst({
//             where:{
//                 email: email
//             }
//         })
//         if(!user){
//             return res.status(400).json({message:"Not found"})
//         }

//         const isMatch = await bcrypt.compare(password, user.password)
//         if(!isMatch){
//             return res.status(400).json({message:"Password Invalid!!"})
//         }

//         const token = jwt.sign({ userId: user.id }, 'isueskey', { expiresIn: '1d' });

//         // ส่งคำตอบกลับพร้อม JWT Token
//         res.status(200).json({
//           message: "Login successful",
//           token: token  // ส่ง JWT Token ให้ผู้ใช้
//         });


//     }catch(err){
//         //err
//         console.log(err)
//         res.status(500).json({ message: "Server Error" })

//     }


// }
exports.getReportIssues = async (req, res) => {
  try {

    const report_id = parseInt(req.params.report_id);

    // ตรวจสอบว่า report_id เป็นตัวเลขหรือไม่
    if (isNaN(report_id)) {
      return res.status(400).json({ message: 'Invalid report_id' });
    }

    // ดึงข้อมูลจากทุกตารางที่เกี่ยวข้องกับ report_id
    const reporterWithIssues = await prisma.reporters.findUnique({
      where: {
        id: report_id,  // ค้นหาผู้รายงานตาม report_id
      },
      include: {
        roade_issues: true,         // ดึงข้อมูลจากตาราง Roade_issues
        drainag_issues: true,       // ดึงข้อมูลจากตาราง Drainag_issues
        electricity_issues: true,   // ดึงข้อมูลจากตาราง Electricity_issues
        water_issues: true,         // ดึงข้อมูลจากตาราง Water_issues
        health_issues: true         // ดึงข้อมูลจากตาราง Health_issues
      }
    });

    // ตรวจสอบว่าไม่พบผู้รายงาน
    if (!reporterWithIssues) {
      return res.status(404).json({ message: `No reporter found with report_id: ${report_id}` });
    }

    // ส่งผลลัพธ์ทั้งหมดกลับไปยังผู้ใช้
    res.json(reporterWithIssues);

  } catch (err) {
    console.error('Error occurred:', err);  // พิมพ์ข้อผิดพลาดใน log
    res.status(500).json({ message: 'Server Error', error: err.message });  // ส่งข้อความข้อผิดพลาดกลับ
  }
};
 
exports.ListL = async (req, res) => {
  try {
    const village = 'บ้านไผ่ล้อม'; // หมู่บ้านที่ต้องการตรวจสอบ

    // ดึงข้อมูลจาก Roade_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const roadIssues = await prisma.roade_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Drainag_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const drainageIssues = await prisma.drainag_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Electricity_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const electricityIssues = await prisma.electricity_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Water_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const waterIssues = await prisma.water_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Health_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const healthIssues = await prisma.health_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // คำนวณจำนวนปัญหาทั้งหมดในแต่ละประเภท
    const roadIssuesCount = roadIssues.length;
    const drainageIssuesCount = drainageIssues.length;
    const electricityIssuesCount = electricityIssues.length;
    const waterIssuesCount = waterIssues.length;
    const healthIssuesCount = healthIssues.length;

    // ส่งผลลัพธ์การนับข้อมูลในรูปแบบ JSON
    const result = {
      roadIssues: { count: roadIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      drainageIssues: { count: drainageIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      electricityIssues: { count: electricityIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      waterIssues: { count: waterIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      healthIssues: { count: healthIssuesCount, status: "ยังไม่ได้รับการแก้ไข" }
    };

    // เรียงลำดับจากมากไปน้อยตามจำนวนปัญหาที่ต้องการ
    const sortedResults = Object.entries(result).sort((a, b) => b[1].count - a[1].count);

    // ส่งผลลัพธ์เรียงลำดับให้ผู้ใช้
    res.status(200).json(Object.fromEntries(sortedResults));  // ส่งผลลัพธ์กลับไปยังผู้ใช้

  } catch (err) {
    console.error(err);  // แสดงข้อผิดพลาดใน console
    res.status(500).json({ message: "Server Error" });  // ส่งข้อความข้อผิดพลาด
  }
};
exports.Listng = async (req, res) => {
  try {
    const village = 'บ้านไผ่เงิน'; // หมู่บ้านที่ต้องการตรวจสอบ

    // ดึงข้อมูลจาก Roade_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const roadIssues = await prisma.roade_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Drainag_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const drainageIssues = await prisma.drainag_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Electricity_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const electricityIssues = await prisma.electricity_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Water_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const waterIssues = await prisma.water_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Health_issues ที่มีสถานะ "ยังไม่ได้รับการแก้ไข" และมาจากหมู่บ้าน "บ้านไผ่ล้อม"
    const healthIssues = await prisma.health_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: village
        }
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // คำนวณจำนวนปัญหาทั้งหมดในแต่ละประเภท
    const roadIssuesCount = roadIssues.length;
    const drainageIssuesCount = drainageIssues.length;
    const electricityIssuesCount = electricityIssues.length;
    const waterIssuesCount = waterIssues.length;
    const healthIssuesCount = healthIssues.length;

    // ส่งผลลัพธ์การนับข้อมูลในรูปแบบ JSON
    const result = {
      roadIssues: { count: roadIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      drainageIssues: { count: drainageIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      electricityIssues: { count: electricityIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      waterIssues: { count: waterIssuesCount, status: "ยังไม่ได้รับการแก้ไข" },
      healthIssues: { count: healthIssuesCount, status: "ยังไม่ได้รับการแก้ไข" }
    };

    // เรียงลำดับจากมากไปน้อยตามจำนวนปัญหาที่ต้องการ
    const sortedResults = Object.entries(result).sort((a, b) => b[1].count - a[1].count);

    // ส่งผลลัพธ์เรียงลำดับให้ผู้ใช้
    res.status(200).json(Object.fromEntries(sortedResults));  // ส่งผลลัพธ์กลับไปยังผู้ใช้

  } catch (err) {
    console.error(err);  // แสดงข้อผิดพลาดใน console
    res.status(500).json({ message: "Server Error" });  // ส่งข้อความข้อผิดพลาด
  }
};
//กำลังดำเนินการ ทั้งหมด
exports.AllProgress = async (req, res) => {
  try {
    // ดึงข้อมูลจาก Roade_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว" โดยไม่กำหนดหมู่บ้าน
    const roadIssuesResolved = await prisma.roade_issues.findMany({
      where: {
        status: 'กำลังดำเนินการ',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Drainag_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const drainageIssuesResolved = await prisma.drainag_issues.findMany({
      where: {
        status: 'กำลังดำเนินการ',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Electricity_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const electricityIssuesResolved = await prisma.electricity_issues.findMany({
      where: {
        status: 'กำลังดำเนินการ',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Water_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const waterIssuesResolved = await prisma.water_issues.findMany({
      where: {
        status: 'กำลังดำเนินการ',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Health_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const healthIssuesResolved = await prisma.health_issues.findMany({
      where: {
        status: 'กำลังดำเนินการ',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // คำนวณจำนวนปัญหาทั้งหมดในแต่ละประเภท
    const roadIssuesResolvedCount = roadIssuesResolved.length;
    const drainageIssuesResolvedCount = drainageIssuesResolved.length;
    const electricityIssuesResolvedCount = electricityIssuesResolved.length;
    const waterIssuesResolvedCount = waterIssuesResolved.length;
    const healthIssuesResolvedCount = healthIssuesResolved.length;

    // ส่งผลลัพธ์การนับข้อมูลในรูปแบบ JSON
    const result = {
      roadIssuesResolved: { count: roadIssuesResolvedCount, status: "กำลังดำเนินการ" },
      drainageIssuesResolved: { count: drainageIssuesResolvedCount, status: "กำลังดำเนินการ" },
      electricityIssuesResolved: { count: electricityIssuesResolvedCount, status: "กำลังดำเนินการ" },
      waterIssuesResolved: { count: waterIssuesResolvedCount, status: "กำลังดำเนินการ" },
      healthIssuesResolved: { count: healthIssuesResolvedCount, status: "กำลังดำเนินการ" }
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

//บันทึก

exports.submitReport = async (req, res) => {
  console.log("Received Body:", JSON.stringify(req.body, null, 2));
  try {
    const { village, fullname, phone, province, district, subdistrict, problemCategory, ...problemData } = req.body;

    if (!problemCategory || !Array.isArray(problemCategory)){
      return res.status(400).json({ message: "Problem category is required!"});
    }

    // 1. ตรวจสอบและบันทึกข้อมูลผู้รายงาน
    const reporter = await prisma.reporters.create({
      data: {
        fullname: fullname,
        phone: phone,
        village: village,
        province: province,       // บันทึกจังหวัด
        district: district,       // บันทึกอำเภอ
        subdistrict: subdistrict, // บันทึกตำบล
      },
    });



    // 3. เลือกแทรกข้อมูลในตารางที่เกี่ยวข้องตามประเภทที่ได้รับจากผู้รายงาน
    for (const category of problemCategory) {
      let categoryData = {};

          // ตรวจสอบว่ามีข้อมูลในแต่ละประเภทหรือไม่ก่อน     
      if (category === 'roade' && problemData.roade?.sub_issue && problemData.roade?.severity && problemData.roade?.status  
        && problemData.roade?.urgency && problemData.roade?.economic_impact) {
        categoryData = {
          report_id: reporter.id,
          sub_issue: problemData.roade.sub_issue, // ระบุประเภทปัญหาถนน
          severity: problemData.roade.severity,   // ระดับความรุนแรง
          description: problemData.roade.description, // คำอธิบายปัญหา
          status: problemData.roade.status || "ยังไม่ได้รับการแก้ไข", // สถานะ
          image_url: problemData.roade.image_url|| null, // รูปภาพ (ถ้ามี)
          urgency: problemData.roade.urgency || 0, // ความเร่งด่วน (ถ้ามี)
          economic_impact: problemData.roade.economic_impact || 0, // ผลกระทบทางเศรษฐกิจ
          affected_people: 1,
          total_score: 
            (parseInt(problemData.roade.severity)*0.4)+
            (parseInt(problemData.roade.urgency)*0.3)+
            (parseInt(problemData.roade.economic_impact)*0.1)
          
        };
        await prisma.roade_issues.create({ data: categoryData });
      }
      else if (category === 'drainag' && problemData.drainag?.sub_issue && problemData.drainag?.severity 
        && problemData.drainag?.status  && problemData.drainag?.urgency && problemData.drainag?.economic_impact) {
        categoryData = {
          report_id: reporter.id,
          sub_issue: problemData.drainag.sub_issue, // ระบุประเภทปัญหาระบบระบายน้ำ
          severity: problemData.drainag.severity,
          description: problemData.drainag.description,
          status: problemData.drainag.status || "ยังไม่ได้รับการแก้ไข",
          image_url: problemData.drainag.image_url || null,
          urgency: problemData.drainag.urgency || 0,
          economic_impact: problemData.drainag.economic_impact || 0,
          affected_people: 1,
          total_score:  
            (parseInt(problemData.drainag.severity)*0.4)+
            (parseInt(problemData.drainag.urgency)*0.3)+
            (parseInt(problemData.drainag.economic_impact)*0.1)
    
        };
        await prisma.drainag_issues.create({ data: categoryData });
      }
      else if (category === 'electricity' && problemData.electricity?.sub_issue && problemData.electricity?.severity
        && problemData.electricity?.status  && problemData.electricity?.urgency && problemData.electricity?.economic_impact
      ) {
        categoryData = {
          report_id: reporter.id,
          sub_issue: problemData.electricity.sub_issue,
          severity: problemData.electricity.severity,
          description: problemData.electricity.description,
          status: problemData.electricity.status || "ยังไม่ได้รับการแก้ไข",
          image_url: problemData.electricity.image_url || null,
          urgency: problemData.electricity.urgency || 0,
          economic_impact: problemData.electricity.economic_impact || 0,
          affected_people: 1,
          total_score: 
          (parseInt(problemData.electricity.severity)*0.4)+
          (parseInt(problemData.electricity.urgency)*0.3)+
          (parseInt(problemData.electricity.economic_impact)*0.1)
        };
        await prisma.electricity_issues.create({ data: categoryData });
      }
      else if (category === 'water' && problemData.water?.sub_issue && problemData.water.severity 
        && problemData.water?.status  && problemData.water?.urgency && problemData.water?.economic_impact
      ) {
        categoryData = {
          report_id: reporter.id,
          sub_issue: problemData.water.sub_issue,
          severity: problemData.water.severity,
          description: problemData.water.description,
          status: problemData.water.status || "ยังไม่ได้รับการแก้ไข",
          image_url: problemData.water.image_url || null,
          urgency: problemData.water.urgency || 0,
          economic_impact: problemData.water.economic_impact || 0,
          affected_people: 1,
          total_score: 
          (parseInt(problemData.water.severity)*0.4)+
          (parseInt(problemData.water.urgency)*0.3)+
          (parseInt(problemData.water.economic_impact)*0.1)

        };
        await prisma.water_issues.create({ data: categoryData });
      }
      else if (category === 'health' && problemData.health?.sub_issue && problemData.health.severity
        && problemData.health?.status  && problemData.health?.urgency && problemData.health?.economic_impact
      ) {
        categoryData = {
          report_id: reporter.id,
          sub_issue: problemData.health.sub_issue,
          severity: problemData.health.severity,
          description: problemData.health.description,
          status: problemData.health.status || "ยังไม่ได้รับการแก้ไข",
          image_url: problemData.health.image_url || null,
          urgency: problemData.health.urgency || 0,
          economic_impact: problemData.health.economic_impact || 0,
          affected_people: 1,
          total_score: 
          (parseInt(problemData.health.severity)*0.4)+
          (parseInt(problemData.health.urgency)*0.3)+
          (parseInt(problemData.health.economic_impact)*0.1)
        };
        await prisma.health_issues.create({ data: categoryData });
      }
      else {
        console.log(`⚠️ No valid data for ${category}, skipping.`);
      }
    }

    // ส่งผลลัพธ์การบันทึกข้อมูลสำเร็จ
    res.status(200).json({ message: "✅ Report submitted successfully!" });
    
  } catch (err) {
    console.error(err);  // แสดงข้อผิดพลาดใน console
    res.status(500).json({ message: "Server Error" });  // ส่งข้อความข้อผิดพลาด
  }
};
//แก้ไขสำเร็จ
exports.AllSucceed = async (req, res) => {
  try {
    // ดึงข้อมูลจาก Roade_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว" โดยไม่กำหนดหมู่บ้าน
    const roadIssuesResolved = await prisma.roade_issues.findMany({
      where: {
        status: 'แก้ไขสำเร็จแล้ว',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Drainag_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const drainageIssuesResolved = await prisma.drainag_issues.findMany({
      where: {
        status: 'แก้ไขสำเร็จแล้ว',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Electricity_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const electricityIssuesResolved = await prisma.electricity_issues.findMany({
      where: {
        status: 'แก้ไขสำเร็จแล้ว',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Water_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const waterIssuesResolved = await prisma.water_issues.findMany({
      where: {
        status: 'แก้ไขสำเร็จแล้ว',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // ดึงข้อมูลจาก Health_issues ที่มีสถานะ "แก้ไขสำเร็จแล้ว"
    const healthIssuesResolved = await prisma.health_issues.findMany({
      where: {
        status: 'แก้ไขสำเร็จแล้ว',
      },
      orderBy: {
        update_at: 'desc' // เรียงลำดับจากล่าสุด
      }
    });

    // คำนวณจำนวนปัญหาทั้งหมดในแต่ละประเภท
    const roadIssuesResolvedCount = roadIssuesResolved.length;
    const drainageIssuesResolvedCount = drainageIssuesResolved.length;
    const electricityIssuesResolvedCount = electricityIssuesResolved.length;
    const waterIssuesResolvedCount = waterIssuesResolved.length;
    const healthIssuesResolvedCount = healthIssuesResolved.length;

    // ส่งผลลัพธ์การนับข้อมูลในรูปแบบ JSON
    const result = {
      roadIssuesResolved: { count: roadIssuesResolvedCount, status: "แก้ไขสำเร็จแล้ว" },
      drainageIssuesResolved: { count: drainageIssuesResolvedCount, status: "แก้ไขสำเร็จแล้ว" },
      electricityIssuesResolved: { count: electricityIssuesResolvedCount, status: "แก้ไขสำเร็จแล้ว" },
      waterIssuesResolved: { count: waterIssuesResolvedCount, status: "แก้ไขสำเร็จแล้ว" },
      healthIssuesResolved: { count: healthIssuesResolvedCount, status: "แก้ไขสำเร็จแล้ว" }
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.Updateda = async (req, res) => {
  try {
    const { village, name, phone, province, district, subdistrict, problemCategory, ...problemData } = req.body;

    // 1. ตรวจสอบและบันทึกข้อมูลผู้รายงาน
    const reporter = await prisma.reporters.create({
      data: {
        fullname: name,
        phone: phone,
        village: village,
        province: province,
        district: district,
        subdistrict: subdistrict,
      },
    });

    // 2. ตรวจสอบว่า problemCategory มีข้อมูลหรือไม่
    if (!problemCategory || !Array.isArray(problemCategory)) {
      return res.status(400).json({ message: "Problem category is required!" });
    }

    // 3. อัปเดตข้อมูลในตารางที่เกี่ยวข้องตามประเภทที่ได้รับจากผู้รายงาน
    for (const category of problemCategory) {
      let categoryData = {};

      if (category === 'roade' && problemData.roade_sub_issue) {
        categoryData = {
          resolution_detail: problemData.roade_description, // คำอธิบายการแก้ไข
          status: problemData.roade_status || "ยังไม่ได้รับการแก้ไข", // สถานะ
          severity: problemData.roade_severity || "ไม่ระบุ", // ความรุนแรง
          affected_people: problemData.roade_affected_people || 0, // จำนวนคนที่ได้รับผลกระทบ
          urgency: problemData.roade_urgency || 0, // ความเร่งด่วน
          economic_impact: problemData.roade_economic_impact || 0, // ผลกระทบทางเศรษฐกิจ
        };

        // อัปเดตข้อมูลในตาราง roade_issues
        await prisma.roade_issues.updateMany({
          where: {
            report_id: reporter.id,
            sub_issue: problemData.roade_sub_issue, // ค้นหาตาม sub_issue
          },
          data: categoryData
        });
      }
      else if (category === 'drainage' && problemData.drainage_sub_issue) {
        categoryData = {
          resolution_detail: problemData.drainage_description,
          status: problemData.drainage_status || "ยังไม่ได้รับการแก้ไข",
          severity: problemData.drainage_severity || "ไม่ระบุ",
          affected_people: problemData.drainage_affected_people || 0,
          urgency: problemData.drainage_urgency || 0,
          economic_impact: problemData.drainage_economic_impact || 0,
        };

        // อัปเดตข้อมูลในตาราง drainag_issues
        await prisma.drainag_issues.updateMany({
          where: {
            report_id: reporter.id,
            sub_issue: problemData.drainage_sub_issue,
          },
          data: categoryData
        });
      }
      else if (category === 'electricity' && problemData.electricity_sub_issue) {
        categoryData = {
          resolution_detail: problemData.electricity_description,
          status: problemData.electricity_status || "ยังไม่ได้รับการแก้ไข",
          severity: problemData.electricity_severity || "ไม่ระบุ",
          affected_people: problemData.electricity_affected_people || 0,
          urgency: problemData.electricity_urgency || 0,
          economic_impact: problemData.electricity_economic_impact || 0,
        };

        // อัปเดตข้อมูลในตาราง electricity_issues
        await prisma.electricity_issues.updateMany({
          where: {
            report_id: reporter.id,
            sub_issue: problemData.electricity_sub_issue,
          },
          data: categoryData
        });
      }
      else if (category === 'water' && problemData.water_sub_issue) {
        categoryData = {
          resolution_detail: problemData.water_description,
          status: problemData.water_status || "ยังไม่ได้รับการแก้ไข",
          severity: problemData.water_severity || "ไม่ระบุ",
          affected_people: problemData.water_affected_people || 0,
          urgency: problemData.water_urgency || 0,
          economic_impact: problemData.water_economic_impact || 0,
        };

        // อัปเดตข้อมูลในตาราง water_issues
        await prisma.water_issues.updateMany({
          where: {
            report_id: reporter.id,
            sub_issue: problemData.water_sub_issue,
          },
          data: categoryData
        });
      }
      else if (category === 'health' && problemData.health_sub_issue) {
        categoryData = {
          resolution_detail: problemData.health_description,
          status: problemData.health_status || "ยังไม่ได้รับการแก้ไข",
          severity: problemData.health_severity || "ไม่ระบุ",
          affected_people: problemData.health_affected_people || 0,
          urgency: problemData.health_urgency || 0,
          economic_impact: problemData.health_economic_impact || 0,
        };

        // อัปเดตข้อมูลในตาราง health_issues
        await prisma.health_issues.updateMany({
          where: {
            report_id: reporter.id,
            sub_issue: problemData.health_sub_issue,
          },
          data: categoryData
        });
      }
      else {
        console.log(`⚠️ No valid data for ${category}, skipping.`);
      }
    }

    // ส่งผลลัพธ์การอัปเดตข้อมูลสำเร็จ
    res.status(200).json({ message: "✅ Report updated successfully!" });
    
  } catch (err) {
    console.error(err);  // แสดงข้อผิดพลาดใน console
    res.status(500).json({ message: "Server Error" });  // ส่งข้อความข้อผิดพลาด
  }
};


// //api google from 
// exports.submitData = async (req, res) => {
//   const data = req.body.data; // ข้อมูลที่ส่งมาจาก Google Apps Script

//   try {
//     for (const row of data) {
//       // เพิ่มข้อมูลผู้รายงาน
//       const reporter = await prisma.reporters.create({
//         data: {
//           fullname: row.fullname,
//           phone: row.phone,
//           province: row.province,
//           district: row.district,
//           subdistrict: row.subdistrict,
//           village: row.village,
          
//           // ตรวจสอบประเภทปัญหาถนน (ถ้ามีข้อมูลให้สร้างข้อมูลใน Roade_issues)
//           roade_issues: row.roadeIssue ? {
//             create: {
//               sub_issue: row.roadeIssue,
//               severity: parseInt(row.roadeSeverity),
//               urgency: parseInt(row.roadeUrgency),
//               economic_impact: parseInt(row.roadeSocial),
//               status: row.roadeStatus,
//               description: row.roadeDescription,
//               image_url: row.roadeImage
//             }
//           } : undefined,

//           // ตรวจสอบประเภทปัญหาระบบระบายน้ำ (ถ้ามีข้อมูลให้สร้างข้อมูลใน Drainag_issues)
//           drainag_issues: row.drainageIssue ? {
//             create: {
//               sub_issue: row.drainageIssue,
//               severity: parseInt(row.drainageSeverity),
//               urgency: parseInt(row.drainageUrgency),
//               economic_impact: parseInt(row.drainageSocial),
//               status: row.drainageStatus,
//               description: row.drainageDescription,
//               image_url: row.drainageImage
//             }
//           } : undefined,

//           // ตรวจสอบประเภทปัญหาด้านไฟฟ้า (ถ้ามีข้อมูลให้สร้างข้อมูลใน Electricity_issues)
//           electricity_issues: row.electricityIssue ? {
//             create: {
//               sub_issue: row.electricityIssue,
//               severity: parseInt(row.electricitySeverity),
//               urgency: parseInt(row.electricityUrgency),
//               economic_impact: parseInt(row.electricitySocial),
//               status: row.electricityStatus,
//               description: row.electricityDescription,
//               image_url: row.electricityImage
//             }
//           } : undefined,

//           // ตรวจสอบประเภทปัญหาน้ำประปา (ถ้ามีข้อมูลให้สร้างข้อมูลใน Water_issues)
//           water_issues: row.waterIssue ? {
//             create: {
//               sub_issue: row.waterIssue,
//               severity: parseInt(row.waterSeverity),
//               urgency: parseInt(row.waterUrgency),
//               economic_impact: parseInt(row.waterSocial),
//               status: row.waterStatus,
//               description: row.waterDescription,
//               image_url: row.waterImage
//             }
//           } : undefined,

//           // ตรวจสอบประเภทปัญหาด้านสุขภาพ (ถ้ามีข้อมูลให้สร้างข้อมูลใน Health_issues)
//           health_issues: row.healthIssue ? {
//             create: {
//               sub_issue: row.healthIssue,
//               severity: parseInt(row.healthSeverity),
//               urgency: parseInt(row.healthUrgency),
//               economic_impact: parseInt(row.healthSocial),
//               status: row.healthStatus,
//               description: row.healthDescription,
//               image_url: row.healthImage
//             }
//           } : undefined,
//         }
//       });
//     }

//     res.status(200).send('Data inserted successfully.');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error inserting data.');
//   }
// }




exports.submitData = async (req, res) => {
  const data = req.body.data; // ข้อมูลที่ส่งมาจาก Google Apps Script

  console.log(data);  // ตรวจสอบข้อมูลที่รับมาจาก client

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ message: 'Invalid data format or empty data!' });
  }

  try {
    // ลูปผ่านข้อมูลผู้รายงานที่ได้รับมา
    for (const row of data) {
      // ตรวจสอบว่าข้อมูลที่จำเป็นมีอยู่หรือไม่
      if (!row.fullname || !row.phone || !row.province || !row.district || !row.subdistrict || !row.village) {
        return res.status(400).json({ message: 'Missing required fields!' });
      }

      // เพิ่มข้อมูลผู้รายงาน
      const reporter = await prisma.reporters.create({
        data: {
          fullname: row.fullname,
          phone: row.phone,
          province: row.province,
          district: row.district,
          subdistrict: row.subdistrict,
          village: row.village,
          
          // ตรวจสอบประเภทปัญหาถนน (ถ้ามีข้อมูลให้สร้างข้อมูลใน Roade_issues)
          roade_issues: row.roadeIssue ? {
            create: {
              sub_issue: row.roadeIssue,
              severity: row.roadeSeverity ? parseInt(row.roadeSeverity) : null,
              urgency: row.roadeUrgency ? parseInt(row.roadeUrgency) : null,
              economic_impact: row.roadeSocial ? parseInt(row.roadeSocial) : null,
              status: row.roadeStatus,
              description: row.roadeDescription ,
              image_url: row.roadeImage || null
            }
          } : undefined,

          // ตรวจสอบประเภทปัญหาระบบระบายน้ำ (ถ้ามีข้อมูลให้สร้างข้อมูลใน Drainag_issues)
          drainag_issues: row.drainageIssue ? {
            create: {
              sub_issue: row.drainageIssue,
              severity: row.drainageSeverity ? parseInt(row.drainageSeverity) : null,
              urgency: row.drainageUrgency ? parseInt(row.drainageUrgency) : null,
              economic_impact: row.drainageSocial ? parseInt(row.drainageSocial) : null,
              status: row.drainageStatus,
              description: row.drainageDescription,
              image_url: row.drainageImage || null
            }
          } : undefined,

          // ตรวจสอบประเภทปัญหาด้านไฟฟ้า (ถ้ามีข้อมูลให้สร้างข้อมูลใน Electricity_issues)
          electricity_issues: row.electricityIssue ? {
            create: {
              sub_issue: row.electricityIssue,
              severity: row.electricitySeverity ? parseInt(row.electricitySeverity) : null,
              urgency: row.electricityUrgency ? parseInt(row.electricityUrgency) : null,
              economic_impact: row.electricitySocial ? parseInt(row.electricitySocial) : null,
              status: row.electricityStatus,
              description: row.electricityDescription,
              image_url: row.electricityImage || null
            }
          } : undefined,

          // ตรวจสอบประเภทปัญหาน้ำประปา (ถ้ามีข้อมูลให้สร้างข้อมูลใน Water_issues)
          water_issues: row.waterIssue ? {
            create: {
              sub_issue: row.waterIssue,
              severity: row.waterSeverity ? parseInt(row.waterSeverity) : null,
              urgency: row.waterUrgency ? parseInt(row.waterUrgency) : null,
              economic_impact: row.waterSocial ? parseInt(row.waterSocial) : null,
              status: row.waterStatus,
              description: row.waterDescription,
              image_url: row.waterImage || null
            }
          } : undefined,

          // ตรวจสอบประเภทปัญหาด้านสุขภาพ (ถ้ามีข้อมูลให้สร้างข้อมูลใน Health_issues)
          health_issues: row.healthIssue ? {
            create: {
              sub_issue: row.healthIssue,
              severity: row.healthSeverity ? parseInt(row.healthSeverity) : null,
              urgency: row.healthUrgency ? parseInt(row.healthUrgency) : null,
              economic_impact: row.healthSocial ? parseInt(row.healthSocial) : null,
              status: row.healthStatus,
              description: row.healthDescription,
              image_url: row.healthImage || null
            }
          } : undefined,
        }
      });
    }

    res.status(200).send('Data inserted successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error inserting data.');
  }
};

