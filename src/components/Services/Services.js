import React from 'react'
import './services.css'
import Card from '../Card/Card'
import heartemoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from '../martysresume.pdf'

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
               <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                    </a>
                        <div className='blur s-blur1' style={{
                            background: "#ABF1FF94"
                        }} >
                            
                        </div>
        </div>

                {/* //right side // */}
            <div className='cards'>
              <div style={{left: '14rem'}}>
                <Card 
                  emoji = {heartemoji}
                  heading = {'Design'}
                  detail = {"Figma, Sketch, Photoshop, Adobe, "}
                  />
              </div>
                        {/* // 2nd card  */}
                <div style={{ top: "12rem", left: "-4rem"}}>
                  <Card 
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"MySQL, Express, ReactJs, NodeJs, Material UI"}
                    />
                </div>
                                   {/* // 3rd card  */}
                        <div style={{ top: "19rem", left: "12rem"}}>
                          <Card 
                            emoji = {Humble}
                            heading = {'UI/UX'}
                            detail = {"Loren ispum dummy text"}
                            />
                        </div>
                      <div className='blur s-blur2' style={{ background: "var(--purple)"}}></div>
            </div>
    </div>
  )
}

export default Services