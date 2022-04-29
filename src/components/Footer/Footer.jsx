import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div>
        <h2>Контакты</h2>
        <a href="https://vk.com/karlkust">
          <img className="vk" src="/img/VK_Full_Logo.jpg" alt="VK" />
        </a>
        <h3>+7 (000) 000 00 00</h3>
      </div>
    </footer>
  );
};

export default Footer;
