import React from 'react'
import './work.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';




const Work = () => {
  return (
    <div className='works'>
        <div className='awesome'>
         <span>Works for All these</span>
            <span>Brands & Clients</span>
               <spane>
                    Lorem ispum chuchu is dummy text of print of loren
                    <br />
                    ispum an tube kuhaa
                    <br />
                    Lorem ispum chuchu is dummy text of print of loren
                    <br />
                    Lorem ispum chuchu is dummy text of print of loren
                    <br />
               </spane>
               <button className='button i-button'>Hire me</button>
               <div className='blur s-blur2' style={{ background: "var(--purple)"}}></div>
            </div>  

            {/* // right side */}
            <div className='w-right'>
                <div className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={Upwork} alt="" />
                    </div>
                        <div className='w-secCircle'>
                            <img src={Fiverr} alt="" />
                        </div>
                            <div className='w-secCircle'>
                                <img src={Amazon} alt="" />
                            </div>
                                <div className='w-secCircle'>
                                    <img src={Shopify} alt="" />
                                </div>
                                    <div className='w-secCircle'>
                                        <img src={Facebook} alt="" />
                                    </div>
                                </div>
                                    {/* // background Circles */}
                                        <div className='w-backCircles blueCircle'></div>
                                        <div className='w-backCircles yellowCircle'></div>
                                       
            </div>
        </div>
  )
}

export default Work