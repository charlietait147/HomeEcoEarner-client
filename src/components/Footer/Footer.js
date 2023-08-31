import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <footer className = "footer-section">
            <div className="footer-section__wrapper">
                <ul className="footer-section__list">
                    <Link to = "contact-us" className = "footer-section__link"><li className="footer-section__item">
                        Contact Us
                    </li></Link>
                    <Link to = "news" className = "footer-section__link"><li className="footer-section__item">
                        News
                    </li></Link>
                </ul>
                <div className="footer-section__copyright-container">
                    <small className="footer-section__copyright">© 2023 Home EcoEarner Limited, All Rights Reserved</small>
                </div>
            </div>
        </footer>
     );
}

export default Footer;