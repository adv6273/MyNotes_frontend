import "../App.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-icons">
    //     <a href="https://github.com/adityavs18" target="_blank" rel="noopener noreferrer">
    //       <FontAwesomeIcon icon={faGithub} className="icon" />
    //     </a>
    //     <a href="https://www.linkedin.com/in/aditya-verma-6a0a49141" target="_blank" rel="noopener noreferrer">
    //       <FontAwesomeIcon icon={faLinkedin} className="icon" />
    //     </a>
    //   </div>
    //   <p className="footer-text">
    //     Made with love by Aditya Verma <FontAwesomeIcon icon={faHeart} className="heart-icon" />
    //   </p>
    // </footer>
    <footer className="footer bg-dark text-center footer-light mx-0">
    <div className="container mx-0"  id="footerid"  >
      <p className="mb-0 text-white">Made with ❤ by Aditya Verma</p>
      <p className="mb-0 text-white">@2023</p>
    </div>
  </footer>
  )
}

export default Footer
