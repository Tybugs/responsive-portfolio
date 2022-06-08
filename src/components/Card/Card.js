<<<<<<< HEAD
import React from 'react'
import './card.css'

const Card = ({HeartEmoji, heading, detail}) => {
  return (
      <div className='card'>
          <img src={HeartEmoji} alt="" />
          <span>{heading}</span>
          <span>{detail}</span>
      </div>
  )
}

export default Card
=======
import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
>>>>>>> ae03c44c43a760df503c32aea68d3b32b761d6d6
