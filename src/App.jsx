import React from 'react'
import Tesa from './TesaCard.jsx'
import './tesa-card.css'

const App = () => {
  const beverages = [
    {
      image: "americano-foam.jpg",
      name: "Americano with Foam",
      description: "Espresso diluted with hot water, topped with a creamy foam.",
      price: "$3.50"
    },
    {
      image: "dark-rich-cocoa.jpg",
      name: "Dark and Rich Cocoa",
      description: "Deep and decadent chocolatey drink, perfect for chocolatelovers.",
      price: "$4.00"
    },
    {
      image: "fruit-smoothie.jpg",
      name: "Fruit Smoothie",
      description: "Refreshing blend of seasonal fruits, perfect for a healthyboost.",
      price: "$4.50"
    },
    {
      image: "hot-cocoa.jpg",
      name: "Classic Hot Cocoa",
      description: "Warm and comforting hot chocolate, made with real Belgianchocolate.",
      price: "$3.00"
    },
    {
      image: "orange-coconut.jpg",
      name: "Orange Coconut Delight",
      description: "Tropical blend of orange and coconut milk, perfect for a summerday.",
      price: "$4.50"
    },
    {
      image: "orange-juice.jpg",
      name: "Freshly Squeezed Orange Juice",
      description: "100% pure orange juice, a healthy and refreshing start to yourday.",
      price: "$3.00"
    },
    {
      image: "pink-lemonade.jpg",
      name: "Pink Lemonade",
      description: "Tangy and sweet pink lemonade, a perfect thirst quencher.",
      price: "$3.00"
    },
    {
      image: "plan-americano.jpg",
      name: "Classic Americano",
      description: "Espresso diluted with hot water, a strong and flavorful coffee.",
      price: "$3.00"
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