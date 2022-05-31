import React from 'react'
import './services.css'
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className='services'>


        <div className='awesome'>
            <span>My Awesome</span>
            <span>services</span>
               <spane>
                    Lorem ispum chuchu is dummy text of print of loren
                    <br />
                    ispum an tube kuhaa
               </spane>
                    <button className='button s-button'>Download CV</button>
                        <div className='blur s-blur1' style={{
                            background: "#ABF1FF94"
                        }} >
                            
                        </div>
        </div>
                {/* //right side // */}
            <div>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>
    </div>
  )
}

export default Services