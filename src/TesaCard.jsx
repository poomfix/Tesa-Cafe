import React from "react";
const Tesa = ({ image, name, description, price }) => {
  return (
    <div className="tesa-card" role="article" aria-label={name}>
      <img src={`/images/${image}`} alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-price">{price}</div>
    </div>
  )
}

export default Tesa