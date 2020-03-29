import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
           <p> Made with <FontAwesomeIcon icon={faHeart} /> by Kathleen Domingo</p>
        </div>
    )
}

export default Footer
