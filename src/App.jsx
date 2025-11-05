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
      image: "โดนัท.jpg",
      name: "โดนัท",
      description: "โดนัทนุ่มฟู ราดด้วยช็อกโกแลตและโรยหน้าด้วยเกล็ดน้ำตาลสีสันสดใส",
      price: "$4.50"
    },
    {
      image: "โกโก้.jpg",
      name: "โกโก้เย็น",
      description: "โกโก้เย็น รสชาติเข้มข้น หวานมัน ดื่มคลายร้อน",
      price: "$3.00"
    },
    {
      image: "ขนมปัง.jpg",
      name: "ขนมปังปิ่้ง",
      description: "ขนมปังปิ้งกรอบนอกนุ่มใน เสิร์ฟพร้อมเนยและแยมหลากหลายรสชาติ",
      price: "$4.50"
    },
    {
      image: "americano-foam.jpg",
      name: "เอสเพรสโซ่",
      description: "Espresso รสชาติเข้มข้น กลมกล่อม ดื่มง่าย",
      price: "$3.00"
    },
    {
      image: "โอริโอ้.jpg",
      name: "โอริโอ้",
      description: "โอริโอ้ปั่น รสชาติหวานมัน ดื่มเพลิน",
      price: "$3.00"
    },
    {
      image: "plan-americano.jpg",
      name: "Classic Americano",
      description: "อเมริกาโน่รสชาติเข้มข้น กลมกล่อม ดื่มง่าย",
      price: "$3.00"
    },
    {
      image: "ชาไทย.jpg",
      name: "ชาไทย",
      description: "ชาไทยรสชาติเข้มข้น หอมกลิ่นเครื่องเทศไทยแท้ๆ",
      price: "$4.00"
    },
    {
      image: "ชาเขียว.jpg",
      name: "ชาเขียว",
      description: "ชาเขียวมัทฉะรสเข้มข้น หอมกลิ่นชาเขียวญี่ปุ่นแท้ๆ",
      price: "$4.00"
    },
    {
      image: "2.jpg",
      name: "โดนัท",
      description: "โดนัทนุ่มฟู ราดด้วยช็อกโกแลตและโรยหน้าด้วยเกล็ดน้ำตาลสีสันสดใส",
      price: "$4.50"
    },
    {
      image: "1.jpg",
      name: "โดนัท",
      description: "โดนัทนุ่มฟู ราดด้วยช็อกโกแลตและโรยหน้าด้วยเกล็ดน้ำตาลสีสันสดใส",
      price: "$4.50"
    },
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