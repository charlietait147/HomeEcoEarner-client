import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <footer className = "footer-section">
            <div className="footer-section__wrapper">
                <ul className="footer-section__list">
                    <li className="footer-section__item">
                    <Link to = "contact-us" className = "footer-section__link">Contact Us
                    </Link></li>
                    <li className="footer-section__item">
                    <Link to = "news" className = "footer-section__link">News
                    </Link></li>
                </ul>
                <div className="footer-section__copyright-container">
                    <small className="footer-section__copyright">© 2023 Home EcoEarner Limited, All Rights Reserved</small>
                </div>
            </div>
        </footer>
     );
}

export default Footer;