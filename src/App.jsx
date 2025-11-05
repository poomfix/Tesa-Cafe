import React from 'react'
import Tesa from './TesaCard.jsx'
import './tesa-card.css'

const App = () => {
  const beverages = [
    {
      image: "dark-rich-cocoa.jpg",
      name: "Dark and Rich Cocoa",
      description: "Deep and decadent chocolatey drink, perfect for chocolatelovers.",
      price: "$4.00"
    },
    {
      image: "https://i.pinimg.com/1200x/f0/2b/a9/f02ba97372e3793d9cd88d5865b3a21f.jpg",
      name: "โดนัท",
      description: "โดนัทนุ่มฟู ราดด้วยช็อกโกแลตและโรยหน้าด้วยเกล็ดน้ำตาลสีสันสดใส",
      price: "$4.50"
    },
    {
      image: "https://i.pinimg.com/736x/49/ca/fc/49cafc6d9558067bee2d00a0263beb5b.jpg",
      name: "โกโก้เย็น",
      description: "โกโก้เย็น รสชาติเข้มข้น หวานมัน ดื่มคลายร้อน",
      price: "$3.00"
    },
    {
      image: "https://i.pinimg.com/736x/8c/f2/05/8cf2056963309a098b0178976b5f10a1.jpg",
      name: "ขนมปังปิ่้ง",
      description: "ขนมปังปิ้งกรอบนอกนุ่มใน เสิร์ฟพร้อมเนยและแยมหลากหลายรสชาติ",
      price: "$4.50"
    },
    {
      image: "amricano-foam.jpg",
      name: "เอสเพรสโซ่",
      description: "Espresso รสชาติเข้มข้น กลมกล่อม ดื่มง่าย",
      price: "$3.00"
    },
    {
      image: "https://i.pinimg.com/736x/1f/c8/72/1fc872840630055919672fce03723af9.jpg",
      name: "โอริโอ้",
      description: "โอริโอ้ปั่น รสชาติหวานมัน ดื่มเพลิน",
      price: "$3.00"
    },
    {
      image: "plan-americano.jpg",
      name: "Classic Americano",
      description:  "อเมริกาโน่รสชาติเข้มข้น กลมกล่อม ดื่มง่าย",
      price: "$3.00"
    },
    {
      image: "https://i.pinimg.com/1200x/52/6b/a9/526ba9a4011242d294107a19a2c53c86.jpg",
      name: "ชาไทย",
      description: "ชาไทยรสชาติเข้มข้น หอมกลิ่นเครื่องเทศไทยแท้ๆ",
      price: "$4.00"
    },
    {
      image: "https://i.pinimg.com/736x/37/67/87/37678775654be0f6bfcc7c8d6676ab8b.jpg",
      name: "ชาเขียว",
      description: "ชาเขียวมัทฉะรสเข้มข้น หอมกลิ่นชาเขียวญี่ปุ่นแท้ๆ",
      price: "$4.00"
    }
  ];

  return (
    <>
      <h1 className='text-center'>Tesa Cafe</h1>
      <hr />
      <div className="tesa-grid">
        {beverages.map((b) => (
          <Tesa key={b.name} {...b} />
        ))}
      </div>
    </>
  )
}

export default App