 // นำเข้า Prisma Client
 const prisma = require('../config/prisma')


 // ฟังก์ชันดึงข้อมูลปัญหาจาก electricity_issues บ้านไผ่ล้อม ตาราง 1
 //     "sub_issue": "ถนนเป็นหลุมเป็นบ่อ",
         // "status": "ยังไม่ได้รับการแก้ไข",
         // "count": 6,
         // "total_score": 2.7
 exports.EListlf = async (req, res) => {
   try {
     const issues = await prisma.electricity_issues.groupBy({
       by: ['sub_issue', 'status'],
       where: {
         status: 'ยังไม่ได้รับการแก้ไข', // สถานะยังไม่ได้รับการแก้ไข
         report: {
           village: 'บ้านไผ่ล้อม' // หมู่บ้านที่ต้องการค้นหา
         }
       },
       _count: {
         sub_issue: true // นับจำนวนของแต่ละประเภทปัญหา
       },
       orderBy: {
         _count: {
           sub_issue: 'desc' // เรียงจากจำนวนมากไปน้อย
         }
       }
     });
 
     // คำนวณคะแนนรวม
     const result = issues.map(issue => {
       const count = issue._count.sub_issue;
 
       let B_value = 0;
       if (count >= 1 && count <= 20) {
         B_value = 1;
       } else if (count >= 21 && count <= 50) {
         B_value = 2;
       } else if (count >= 51 && count <= 100) {
         B_value = 3;
       } else if (count >= 101 && count <= 150) {
         B_value = 4;
       } else if (count >= 151) {
         B_value = 5;
       }
 
       const total_score = (B_value * 0.3) + (count * 0.4);
 
       return {
         sub_issue: issue.sub_issue,
         status: issue.status,
         count: count,
         total_score: total_score.toFixed(2)
       };
     });
 
     // ส่งผลลัพธ์กลับ
     res.json(result);
 
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Server Error' });
   }
 };
 //บ้านไผ่เงิน
 exports.EListNG = async (req, res) => {
   try {
     const issues = await prisma.electricity_issues.groupBy({
       by: ['sub_issue', 'status'],
       where: {
         status: 'ยังไม่ได้รับการแก้ไข', // สถานะยังไม่ได้รับการแก้ไข
         report: {
           village: 'บ้านไผ่เงิน' // หมู่บ้านที่ต้องการค้นหา
         }
       },
       _count: {
         sub_issue: true // นับจำนวนของแต่ละประเภทปัญหา
       },
       orderBy: {
         _count: {
           sub_issue: 'desc' // เรียงจากจำนวนมากไปน้อย
         }
       }
     });
 
     // คำนวณคะแนนรวม
     const result = issues.map(issue => {
       const count = issue._count.sub_issue;
 
       let B_value = 0;
       if (count >= 1 && count <= 20) {
         B_value = 1;
       } else if (count >= 21 && count <= 50) {
         B_value = 2;
       } else if (count >= 51 && count <= 100) {
         B_value = 3;
       } else if (count >= 101 && count <= 150) {
         B_value = 4;
       } else if (count >= 151) {
         B_value = 5;
       }
 
       const total_score = (B_value * 0.3) + (count * 0.4);
 
       return {
         sub_issue: issue.sub_issue,
         status: issue.status,
         count: count,
         total_score: total_score.toFixed(2)
       };
     });
 
     // ส่งผลลัพธ์กลับ
     res.json(result);
 
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Server Error' });
   }
 };
 // ฟังก์ชันดึงข้อมูลจาก electricity_issues และแยกตามประเภท ยังไม่ได้รับการแก้ไข" ตารางเชื่อมบ้านไผ่ล้อม
 exports.EListlsuesf = async (req, res) => {
   try {
     const issues = await prisma.electricity_issues.findMany({
       where: {
         status: "ยังไม่ได้รับการแก้ไข",
         report: {
           village: "บ้านไผ่ล้อม"
         }
       },
       select: {
         sub_issue: true,
         description: true,
         status: true,
         update_at: true  // เปลี่ยนจาก updated_at เป็น update_at
       },
       orderBy: {
         update_at: "desc",  // เปลี่ยนจาก updated_at เป็น update_at
       }
     });
 
     // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
     const groupedResults = {};
 
     issues.forEach(issue => {
       const subIssue = issue.sub_issue;
       if (!groupedResults[subIssue]) {
         groupedResults[subIssue] = [];
       }
       groupedResults[subIssue].push({
         sub_issue: issue.sub_issue,
         description: issue.description,
         status: issue.status,
         update_at: issue.update_at
       });
     });
 
     // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
     res.json(groupedResults);
 
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Server Error' });
   }
 };
 //บ้านไผ่เงิน 
 exports.EListlsuesfNG = async (req, res) => {
   try {
     const issues = await prisma.electricity_issues.findMany({
       where: {
         status: "ยังไม่ได้รับการแก้ไข",
         report: {
           village: "บ้านไผ่เงิน"
         }
       },
       select: {
         sub_issue: true,
         description: true,
         status: true,
         update_at: true  // เปลี่ยนจาก updated_at เป็น update_at
       },
       orderBy: {
         update_at: "desc",  // เปลี่ยนจาก updated_at เป็น update_at
       }
     });
 
     // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
     const groupedResults = {};
 
     issues.forEach(issue => {
       const subIssue = issue.sub_issue;
       if (!groupedResults[subIssue]) {
         groupedResults[subIssue] = [];
       }
       groupedResults[subIssue].push({
         sub_issue: issue.sub_issue,
         description: issue.description,
         status: issue.status,
         update_at: issue.update_at
       });
     });
 
     // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
     res.json(groupedResults);
 
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Server Error' });
   }
 };
 
 // ฟังก์ชันดึงข้อมูลปัญหาจาก electricity_issues บ้านไผ่ล้อม ตาราง 1
 //กำลังดำเนินการ
 exports.EProgressL = async (req, res) => {
   try {
     const issues = await prisma.electricity_issues.groupBy({
       by: ['sub_issue', 'status'],
       where: {
         status: 'กำลังดำเนินการ', // สถานะยังไม่ได้รับการแก้ไข
         report: {
           village: 'บ้านไผ่ล้อม' // หมู่บ้านที่ต้องการค้นหา
         }
       },
       _count: {
         sub_issue: true // นับจำนวนของแต่ละประเภทปัญหา
       },
       orderBy: {
         _count: {
           sub_issue: 'desc' // เรียงจากจำนวนมากไปน้อย
         }
       }
     });
 
     // คำนวณคะแนนรวม
     const result = issues.map(issue => {
       const count = issue._count.sub_issue;
 
       let B_value = 0;
       if (count >= 1 && count <= 20) {
         B_value = 1;
       } else if (count >= 21 && count <= 50) {
         B_value = 2;
       } else if (count >= 51 && count <= 100) {
         B_value = 3;
       } else if (count >= 101 && count <= 150) {
         B_value = 4;
       } else if (count >= 151) {
         B_value = 5;
       }
 
       const total_score = (B_value * 0.3) + (count * 0.4);
 
       return {
         sub_issue: issue.sub_issue,
         status: issue.status,
         count: count,
         total_score: total_score.toFixed(2)
       };
     });
 
     // ส่งผลลัพธ์กลับ
     res.json(result);
 
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Server Error' });
   }
 };
 //บ้านไผ่เงิน
 exports.EProgressAll = async (req, res) => {
  try {
    const issues = await prisma.electricity_issues.groupBy({
      by: ['sub_issue', 'status'],
      where: {
        status: 'กำลังดำเนินการ', // สถานะ "กำลังดำเนินการ"
      },
      _count: {
        sub_issue: true // นับจำนวนของแต่ละประเภทปัญหา
      },
      orderBy: {
        _count: {
          sub_issue: 'desc' // เรียงจากจำนวนมากไปน้อย
        }
      }
    });

    // คำนวณคะแนนรวม
    const result = issues.map(issue => {
      const count = issue._count.sub_issue;

      let B_value = 0;
      if (count >= 1 && count <= 20) {
        B_value = 1;
      } else if (count >= 21 && count <= 50) {
        B_value = 2;
      } else if (count >= 51 && count <= 100) {
        B_value = 3;
      } else if (count >= 101 && count <= 150) {
        B_value = 4;
      } else if (count >= 151) {
        B_value = 5;
      }

      const total_score = (B_value * 0.3) + (count * 0.4);

      return {
        sub_issue: issue.sub_issue,
        status: issue.status,
        count: count,
        total_score: total_score.toFixed(2)
      };
    });

    // ส่งผลลัพธ์กลับ
    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
 
 // ฟังก์ชันดึงข้อมูลจาก electricity_issues และแยกตามประเภท กำลังดำเนินการ" ตารางเชื่อมบ้านไผ่ล้อม
 exports.EProgressL2 = async (req, res) => {
  try {
    // ดึงข้อมูลจาก electricity_issues ที่เกี่ยวข้องกับหมู่บ้าน "บ้านไผ่เงิน" และสถานะ "กำลังดำเนินการ"
    const issues = await prisma.electricity_issues.findMany({
      where: {
        status: 'กำลังดำเนินการ',
        report: {
          village: 'บ้านไผ่ล้อม'
        }
      },
      select: {
        sub_issue: true,
        description: true,  // เพิ่มคำอธิบายปัญหา
        resolution_detail: true,  // เพิ่มข้อมูลการแก้ไข
        status: true,  // เพิ่มสถานะของปัญหา
        update_at: true,  // เวลาที่ข้อมูลถูกอัพเดท
        report: {
          select: {
            fullname: true  // ดึงชื่อผู้รายงานจากตาราง reporters
          }
        }
      },
      orderBy: {
        update_at: 'desc',  // เรียงตามเวลาที่อัพเดทล่าสุด
      }
    });

    // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
    const groupedResults = {};

    issues.forEach(issue => {
      const subIssue = issue.sub_issue;
      if (!groupedResults[subIssue]) {
        groupedResults[subIssue] = [];
      }
      // เก็บข้อมูลในรูปแบบที่ต้องการ
      groupedResults[subIssue].push({
        sub_issue: issue.sub_issue,
        description: issue.description,  // เพิ่มคำอธิบาย
        resolution_detail: issue.resolution_detail,  // เพิ่มรายละเอียดการแก้ไข
        status: issue.status,  // เพิ่มสถานะ
        updated_at: issue.update_at,  // เพิ่มเวลาอัพเดท
        reporter_fullname: issue.report.fullname  // เพิ่มชื่อผู้รายงาน
      });
    });

    // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
    res.json(groupedResults);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
 //บ้านไผ่เงิน 
 exports.EProgressNG2 = async (req, res) => {
  try {
    // ดึงข้อมูลจาก electricity_issues ที่เกี่ยวข้องกับหมู่บ้าน "บ้านไผ่เงิน" และสถานะ "กำลังดำเนินการ"
    const issues = await prisma.electricity_issues.findMany({
      where: {
        status: 'กำลังดำเนินการ',
        report: {
          village: 'บ้านไผ่เงิน'
        }
      },
      select: {
        sub_issue: true,
        description: true,  // เพิ่มคำอธิบายปัญหา
        resolution_detail: true,  // เพิ่มข้อมูลการแก้ไข
        status: true,  // เพิ่มสถานะของปัญหา
        update_at: true,  // เวลาที่ข้อมูลถูกอัพเดท
        report: {
          select: {
            fullname: true  // ดึงชื่อผู้รายงานจากตาราง reporters
          }
        }
      },
      orderBy: {
        update_at: 'desc',  // เรียงตามเวลาที่อัพเดทล่าสุด
      }
    });

    // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
    const groupedResults = {};

    issues.forEach(issue => {
      const subIssue = issue.sub_issue;
      if (!groupedResults[subIssue]) {
        groupedResults[subIssue] = [];
      }
      // เก็บข้อมูลในรูปแบบที่ต้องการ
      groupedResults[subIssue].push({
        sub_issue: issue.sub_issue,
        description: issue.description,  // เพิ่มคำอธิบาย
        resolution_detail: issue.resolution_detail,  // เพิ่มรายละเอียดการแก้ไข
        status: issue.status,  // เพิ่มสถานะ
        updated_at: issue.update_at,  // เพิ่มเวลาอัพเดท
        reporter_fullname: issue.report.fullname  // เพิ่มชื่อผู้รายงาน
      });
    });

    // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
    res.json(groupedResults);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
 
 // ฟังก์ชันดึงข้อมูลปัญหาจาก electricity_issues บ้านไผ่ล้อม  
 //แก้ไขสำเร็จ
 exports.ESucceedL = async (req, res) => {
   try {
     const issues = await prisma.electricity_issues.groupBy({
       by: ['sub_issue', 'status'],
       where: {
         status: 'แก้ไขสำเร็จแล้ว', // สถานะยังไม่ได้รับการแก้ไข
         report: {
           village: 'บ้านไผ่ล้อม' // หมู่บ้านที่ต้องการค้นหา
         }
       },
       _count: {
         sub_issue: true // นับจำนวนของแต่ละประเภทปัญหา
       },
       orderBy: {
         _count: {
           sub_issue: 'desc' // เรียงจากจำนวนมากไปน้อย
         }
       }
     });
 
     // คำนวณคะแนนรวม
     const result = issues.map(issue => {
       const count = issue._count.sub_issue;
 
       let B_value = 0;
       if (count >= 1 && count <= 20) {
         B_value = 1;
       } else if (count >= 21 && count <= 50) {
         B_value = 2;
       } else if (count >= 51 && count <= 100) {
         B_value = 3;
       } else if (count >= 101 && count <= 150) {
         B_value = 4;
       } else if (count >= 151) {
         B_value = 5;
       }
 
       const total_score = (B_value * 0.3) + (count * 0.4);
 
       return {
         sub_issue: issue.sub_issue,
         status: issue.status,
         count: count,
         total_score: total_score.toFixed(2)
       };
     });
 
     // ส่งผลลัพธ์กลับ
     res.json(result);
 
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Server Error' });
   }
 };
 //บ้านไผ่เงิน
 exports.ESucceedAll = async (req, res) => {
  try {
    const issues = await prisma.electricity_issues.groupBy({
      by: ['sub_issue', 'status'],
      where: {
        status: 'แก้ไขสำเร็จแล้ว', // สถานะ "แก้ไขสำเร็จแล้ว"
      },
      _count: {
        sub_issue: true // นับจำนวนของแต่ละประเภทปัญหา
      },
      orderBy: {
        _count: {
          sub_issue: 'desc' // เรียงจากจำนวนมากไปน้อย
        }
      }
    });

    // คำนวณคะแนนรวม
    const result = issues.map(issue => {
      const count = issue._count.sub_issue;

      let B_value = 0;
      if (count >= 1 && count <= 20) {
        B_value = 1;
      } else if (count >= 21 && count <= 50) {
        B_value = 2;
      } else if (count >= 51 && count <= 100) {
        B_value = 3;
      } else if (count >= 101 && count <= 150) {
        B_value = 4;
      } else if (count >= 151) {
        B_value = 5;
      }

      const total_score = (B_value * 0.3) + (count * 0.4);

      return {
        sub_issue: issue.sub_issue,
        status: issue.status,
        count: count,
        total_score: total_score.toFixed(2)
      };
    });

    // ส่งผลลัพธ์กลับ
    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
 // ฟังก์ชันดึงข้อมูลจาก electricity_issues และแยกตามประเภท แก้ไขสำเร็จแล้ว" ตารางเชื่อมบ้านไผ่ล้อม
 exports.ESucceedL2 = async (req, res) => {
  try {
    // ดึงข้อมูลจาก electricity_issues ที่เกี่ยวข้องกับหมู่บ้าน "บ้านไผ่เงิน" และสถานะ "แก้ไขสำเร็จ"
    const issues = await prisma.electricity_issues.findMany({
      where: {
        status: 'แก้ไขสำเร็จแล้ว',
        report: {
          village: 'บ้านไผ่ล้อม'
        }
      },
      select: {
        sub_issue: true,
        description: true,  // เพิ่มคำอธิบายปัญหา
        resolution_detail: true,  // เพิ่มข้อมูลการแก้ไข
        status: true,  // เพิ่มสถานะของปัญหา
        update_at: true,  // เวลาที่ข้อมูลถูกอัพเดท
        report: {
          select: {
            fullname: true  // ดึงชื่อผู้รายงานจากตาราง reporters
          }
        }
      },
      orderBy: {
        update_at: 'desc',  // เรียงตามเวลาที่อัพเดทล่าสุด
      }
    });

    // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
    const groupedResults = {};

    issues.forEach(issue => {
      const subIssue = issue.sub_issue;
      if (!groupedResults[subIssue]) {
        groupedResults[subIssue] = [];
      }
      // เก็บข้อมูลในรูปแบบที่ต้องการ
      groupedResults[subIssue].push({
        sub_issue: issue.sub_issue,
        description: issue.description,  // เพิ่มคำอธิบาย
        resolution_detail: issue.resolution_detail,  // เพิ่มรายละเอียดการแก้ไข
        status: issue.status,  // เพิ่มสถานะ
        updated_at: issue.update_at,  // เพิ่มเวลาอัพเดท
        reporter_fullname: issue.report.fullname  // เพิ่มชื่อผู้รายงาน
      });
    });

    // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
    res.json(groupedResults);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
 //บ้านไผ่เงิน 
 exports.ESucceedNG2 = async (req, res) => {
  try {
    // ดึงข้อมูลจาก water_issues ที่เกี่ยวข้องกับหมู่บ้าน "บ้านไผ่เงิน" และสถานะ "แก้ไขสำเร็จ"
    const issues = await prisma.electricity_issues.findMany({
      where: {
        status: 'แก้ไขสำเร็จแล้ว',
        report: {
          village: 'บ้านไผ่เงิน'
        }
      },
      select: {
        sub_issue: true,
        description: true,  // เพิ่มคำอธิบายปัญหา
        resolution_detail: true,  // เพิ่มข้อมูลการแก้ไข
        status: true,  // เพิ่มสถานะของปัญหา
        update_at: true,  // เวลาที่ข้อมูลถูกอัพเดท
        report: {
          select: {
            fullname: true  // ดึงชื่อผู้รายงานจากตาราง reporters
          }
        }
      },
      orderBy: {
        update_at: 'desc',  // เรียงตามเวลาที่อัพเดทล่าสุด
      }
    });

    // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
    const groupedResults = {};

    issues.forEach(issue => {
      const subIssue = issue.sub_issue;
      if (!groupedResults[subIssue]) {
        groupedResults[subIssue] = [];
      }
      // เก็บข้อมูลในรูปแบบที่ต้องการ
      groupedResults[subIssue].push({
        sub_issue: issue.sub_issue,
        description: issue.description,  // เพิ่มคำอธิบาย
        resolution_detail: issue.resolution_detail,  // เพิ่มรายละเอียดการแก้ไข
        status: issue.status,  // เพิ่มสถานะ
        updated_at: issue.update_at,  // เพิ่มเวลาอัพเดท
        reporter_fullname: issue.report.fullname  // เพิ่มชื่อผู้รายงาน
      });
    });

    // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
    res.json(groupedResults);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
 
 //ลบข้อมูล

 exports.Emovedata = async (req, res) => {
  try {
    const { id } = req.params; // รับ ID จาก URL parameter

    // ดึงข้อมูลจากตาราง `electricity_issues`
    const electricityIssue = await prisma.electricity_issues.findUnique({
      where: {
        id: parseInt(id) // ดึงข้อมูลตาม id ของปัญหาในตาราง electricity_issues
      }
    });

    // ตรวจสอบว่าเจอข้อมูลในตาราง `electricity_issues` หรือไม่
    if (!electricityIssue) {
      return res.status(404).json({ message: "Electricity issue not found." });
    }

    // ถ้ามีข้อมูล ให้ดึง `report_id` มาใช้ลบจากตารางอื่นๆ
    const reportId = electricityIssue.report_id;

    // เริ่มลบข้อมูลจากทุกตารางที่มี `report_id` ตรงกัน
    await prisma.electricity_issues.delete({
      where: {
        id: parseInt(id) // ลบข้อมูลจาก electricity_issues โดยใช้ id
      }
    });

    // ลบข้อมูลจากตารางอื่นๆ ที่มี `report_id` เดียวกัน
    await prisma.roade_issues.deleteMany({
      where: {
        report_id: reportId
      }
    });

    await prisma.drainag_issues.deleteMany({
      where: {
        report_id: reportId
      }
    });

    await prisma.water_issues.deleteMany({
      where: {
        report_id: reportId
      }
    });

    await prisma.health_issues.deleteMany({
      where: {
        report_id: reportId
      }
    });

    // ลบข้อมูลจากตาราง `reporters` (ข้อมูลผู้รายงาน)
    await prisma.reporters.delete({
      where: {
        id: reportId
      }
    });

    // ส่งผลลัพธ์การลบข้อมูลสำเร็จ
    res.status(200).json({ message: "✅ All related data deleted successfully!" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.Egetid  = async (req, res) => {
  try {

    const report_id = parseInt(req.params.report_id);

    // ตรวจสอบว่า report_id เป็นตัวเลขหรือไม่
    if (isNaN(report_id)) {
      return res.status(400).json({ message: 'Invalid report_id' });
    }

    // ดึงข้อมูลจากตารางผู้รายงานพร้อมข้อมูลจากตาราง drainag_issues
    const reporterWithIssues = await prisma.reporters.findUnique({
      where: {
        id: report_id,  // ค้นหาผู้รายงานตาม report_id
      },
      include: {
        electricity_issues: {
          select: {
            id: true,                // เลือกคอลัมน์ id
            sub_issue: true,          // เลือกคอลัมน์ sub_issue
            description: true,        // เลือกคอลัมน์ description
            image_url: true,          // เลือกคอลัมน์ image_url
            status: true,             // เลือกคอลัมน์ status
            resolution_detail: true,  // เลือกคอลัมน์ resolution_detail
            update_at: true           // เลือกคอลัมน์ update_at
          }
        }
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
exports.EUpdate= async (req, res) => {
  try {
    const electricity_issue_id = parseInt(req.params.electricity_issue_id);  

    // ตรวจสอบว่า water_issue_id เป็นตัวเลขหรือไม่
    if (isNaN(electricity_issue_id)) {
      return res.status(400).json({ message: 'Invalid electricity_issue_id' });
    }

    const { electricity_issue_resolution_detail, electricity_issue_status } = req.body;  // รับข้อมูลที่ต้องการอัปเดต

    if (!electricity_issue_id) {
      return res.status(400).json({ message: 'Missing electricity_issue_id' });
    }

    const updatedElectricityIssue = await prisma.electricity_issues.update({
      where: {
        id: electricity_issue_id,  
      },
      data: {
        description: electricity_issue_resolution_detail,  // อัปเดตคำอธิบายของปัญหาน้ำ
        status: electricity_issue_status,
          // อัปเดตสถานะของปัญหาน้ำ
      },
      include: {
        report: {  // รวมข้อมูลจากตาราง report (reporters)
          select: {
            id: true,  // หรือเลือกฟิลด์ที่ต้องการแสดงจาก table reporters
            fullname: true,
            phone: true,
            province: true,
            district: true,
            subdistrict: true,
            village: true,
          },
        },
      },
    });

    // ส่งผลลัพธ์ที่อัปเดตพร้อมข้อมูลผู้รายงานกลับไปยังผู้ใช้
    res.json(updatedElectricityIssue);

  } catch (err) {
    console.error('Error occurred:', err);  // พิมพ์ข้อผิดพลาดใน log
    res.status(500).json({ message: 'Server Error', error: err.message });  // ส่งข้อความข้อผิดพลาดกลับ
  }
};
exports.getAllElectricityIssues  = async (req, res) => {
  try {
    // ดึงข้อมูลจากตาราง electricity_issues พร้อมข้อมูลผู้รายงานที่เกี่ยวข้อง
    const issuesWithReporters = await prisma.electricity_issues.findMany({
      select: {
        id: true,                // เลือกคอลัมน์ id จาก electricity_issues
        sub_issue: true,          // เลือกคอลัมน์ sub_issue
        description: true,        // เลือกคอลัมน์ description
        status: true,             // เลือกคอลัมน์ status
        resolution_detail: true,  // เลือกคอลัมน์ resolution_detail
        update_at: true,          // เลือกคอลัมน์ update_at
        report: {                 // ดึงข้อมูลผู้รายงานที่เกี่ยวข้องจากตาราง reporters
          select: {
            id: true,            // เลือกคอลัมน์ id ของผู้รายงาน
            fullname: true,      // ชื่อเต็มของผู้รายงาน
            phone: true,         // เบอร์โทรของผู้รายงาน
            province: true,      // จังหวัดของผู้รายงาน
            district: true,      // อำเภอของผู้รายงาน
            subdistrict: true,   // ตำบลของผู้รายงาน
            village: true        // หมู่บ้านของผู้รายงาน
          }
        }
      }
    });

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!issuesWithReporters || issuesWithReporters.length === 0) {
      return res.status(404).json({ message: 'No drainage issues found' });
    }

    // ส่งผลลัพธ์ทั้งหมดกลับไปยังผู้ใช้
    res.json(issuesWithReporters);

  } catch (err) {
    console.error('Error occurred:', err);  // พิมพ์ข้อผิดพลาดใน log
    res.status(500).json({ message: 'Server Error', error: err.message });  // ส่งข้อความข้อผิดพลาดกลับ
  }
};

exports.EAllPailom = async (req, res) => {
  try {
    // ดึงข้อมูลจาก electricity_issues ที่เกี่ยวข้องกับหมู่บ้าน "บ้านไผ่เงิน" และสถานะ "กำลังดำเนินการ"
    const issues = await prisma.electricity_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: 'บ้านไผ่ล้อม'
        }
      },
      select: {
        sub_issue: true,
        description: true,  // เพิ่มคำอธิบายปัญหา
        status: true,  // เพิ่มสถานะของปัญหา
        update_at: true,  // เวลาที่ข้อมูลถูกอัพเดท
        report: {
          select: {
            fullname: true  // ดึงชื่อผู้รายงานจากตาราง reporters
          }
        }
      },
      orderBy: {
        update_at: 'desc',  // เรียงตามเวลาที่อัพเดทล่าสุด
      }
    });

    // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
    const groupedResults = {};

    issues.forEach(issue => {
      const subIssue = issue.sub_issue;
      if (!groupedResults[subIssue]) {
        groupedResults[subIssue] = [];
      }
      // เก็บข้อมูลในรูปแบบที่ต้องการ
      groupedResults[subIssue].push({
        sub_issue: issue.sub_issue,
        description: issue.description,  // เพิ่มคำอธิบาย
        status: issue.status,  // เพิ่มสถานะ
        updated_at: issue.update_at,  // เพิ่มเวลาอัพเดท
        reporter_fullname: issue.report.fullname  // เพิ่มชื่อผู้รายงาน
      });
    });

    // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
    res.json(groupedResults);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
 //บ้านไผ่เงิน 
 exports.EAllPaingen = async (req, res) => {
  try {
    // ดึงข้อมูลจาก electricity_issues ที่เกี่ยวข้องกับหมู่บ้าน "บ้านไผ่เงิน" และสถานะ "กำลังดำเนินการ"
    const issues = await prisma.electricity_issues.findMany({
      where: {
        status: 'ยังไม่ได้รับการแก้ไข',
        report: {
          village: 'บ้านไผ่เงิน'
        }
      },
      select: {
        sub_issue: true,
        description: true,  // เพิ่มคำอธิบายปัญหา
        status: true,  // เพิ่มสถานะของปัญหา
        update_at: true,  // เวลาที่ข้อมูลถูกอัพเดท
        report: {
          select: {
            fullname: true  // ดึงชื่อผู้รายงานจากตาราง reporters
          }
        }
      },
      orderBy: {
        update_at: 'desc',  // เรียงตามเวลาที่อัพเดทล่าสุด
      }
    });

    // จัดกลุ่มข้อมูลตามประเภทของปัญหา (sub_issue)
    const groupedResults = {};

    issues.forEach(issue => {
      const subIssue = issue.sub_issue;
      if (!groupedResults[subIssue]) {
        groupedResults[subIssue] = [];
      }
      // เก็บข้อมูลในรูปแบบที่ต้องการ
      groupedResults[subIssue].push({
        sub_issue: issue.sub_issue,
        description: issue.description,  // เพิ่มคำอธิบาย
        status: issue.status,  // เพิ่มสถานะ
        updated_at: issue.update_at,  // เพิ่มเวลาอัพเดท
        reporter_fullname: issue.report.fullname  // เพิ่มชื่อผู้รายงาน
      });
    });

    // ส่งผลลัพธ์กลับไปยังผู้ใช้ในรูปแบบ JSON
    res.json(groupedResults);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};