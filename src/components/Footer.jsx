import './Footer.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                <div>
                    <p>123 Acme st.</p>
                    <h4>Houston, TX</h4>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> 1-800-121-1234</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk /> trips@galaxy.com</h4>
            </div>
        </div>
        <div className='right'>
            <h4>About Our Space Adventures</h4>
            <p>Embark on a journey beyond the stars and explore the wonders of the cosmos with Our Space Adventures. We offer extraordinary space expeditions that will take you to the edge of the universe.</p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
