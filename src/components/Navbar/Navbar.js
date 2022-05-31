import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
          <div className="n-left">
            <div className="n-name">Marty</div>
                <span>toggle</span>
           </div>
            <div className="n-right">
                <div className="n-List">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact us
                </button>
            </div>
        </div>
    )
}

export default Navbar;