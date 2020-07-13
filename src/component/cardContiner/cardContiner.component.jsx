import React from "react";
import "./cardContainer.style.css";

import Card from "../card/card.component";
const cardContainer = ({ robots }) => {
  return (
    <div className='card-container'>
      {robots.map((robo) => (
        <Card key={robo.id} name={robo.name} email={robo.email} />
      ))}
    </div>
  );
};
export default cardContainer;
