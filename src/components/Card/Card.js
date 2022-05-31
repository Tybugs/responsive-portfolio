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