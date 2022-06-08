<<<<<<< HEAD
import React from 'react'
import './floating.css'

const FloatingDiv = ({image, txt1, txt2}) => {
  return (
    <div className='floatingdiv'>
        <img src={image} alt="" />
            <span>
                {txt1}
                <br/>
                {txt2}
            </span>
    </div>
  )
}

export default FloatingDiv
=======
import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
>>>>>>> ae03c44c43a760df503c32aea68d3b32b761d6d6
