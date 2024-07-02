import React from 'react';

const CardDesign = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
};

export default CardDesign;
