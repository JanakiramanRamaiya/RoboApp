import React from "react";
import "./card.style.css";

const Card = ({ name, email }) => {
  return (
    <div className='card'>
      <img src={`https://robohash.org/${name}`} alt='robo' />
      <h2>{name}</h2>
      <h4>{email}</h4>
    </div>
  );
};
export default Card;
