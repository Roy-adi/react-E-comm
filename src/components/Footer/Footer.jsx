import React from 'react'
import './Footer.css'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from '../../assets/payments.png'
const Footer = () => {
  return (
    <div>
     
    <div className="footer">
    <div className="footer-content">
        <div className="col">
            <div className="titles">About</div>
            <div className="texts">
            Welcome to RaySonicShop, where innovation meets style, and technology takes center stage. Our mission is simple: to bring you the latest and greatest in smartwatches, headphones, speakers, and earbuds, all curated to elevate your lifestyle..
            </div>
        </div>
        <div className="col">
            <div className="titles">Contact</div>
            <div className="c-item">
                <FaLocationArrow />
                <div className="texts">
                    LakeTown, 
                    Kolkata, 700008
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt />
                <div className="texts">Phone: 0471 272 0261</div>
            </div>
            <div className="c-item">
                <FaEnvelope />
                <div className="texts">Email: RaySonic@gmail.com</div>
            </div>
        </div>
        <div className="col categories">
            <div className="titles">Categories</div>
            <span className="texts">Headphones</span>
            <span className="texts">Smart Watches</span>
            <span className="texts">Bluetooth Speakers</span>
            <span className="texts">Wireless Earbuds</span>
            <span className="texts">Home Theatre</span>
            <span className="texts">Projectors</span>
        </div>
        <div className="col categories">
            <div className="titles">Pages</div>
            <span className="texts">Home</span>
            <span className="texts">About</span>
            <span className="texts">Privacy Policy</span>
            <span className="texts">Returns</span>
            <span className="texts">Terms & Conditions</span>
            <span className="texts">Contact Us</span>
        </div>
    </div>
    <div className="bottom-bar">
        <div className="bottom-bar-content">
            
            <img src={payment} />
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer