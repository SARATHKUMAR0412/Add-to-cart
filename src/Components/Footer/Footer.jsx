import React from "react";
import './Footer.css';
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";


const Footer = () => {
    return (
      <div className="footer">
        <div className="footer_logo">
          <img src={footer_logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="footer_links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer_social_icon">
            <div className="footer_icons_container">
                 <img src={instagram_icon} alt="instagram_icon" />
            </div>
            <div className="footer_icons_container">
                 <img src={pintester_icon} alt="pintester_icon" />
            </div>
            <div className="footer_icons_container">
                 <img src={whatsapp_icon} alt="whatsapp_icon" />
            </div>
        </div>
        <div className="footer_copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
      </div>
    );
}

export default Footer;