import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
    return ( 
        <footer className = "footer-section">
            <div className="footer-section__wrapper">
                <ul className="footer-section__list">
                    <li className="footer-section__item">
                    <Link to = "/about" className = "footer-section__link">About
                    </Link></li>
                    <li className="footer-section__item">
                    <Link to = "/products" className = "footer-section__link">Products
                    </Link></li>
                    <li className="footer-section__item">
                    <Link to = "/services" className = "footer-section__link">Services
                    </Link></li>
                    {/* <li className="footer-section__item">
                    <Link to = "/" className = "footer-section__link">Partnerships
                    </Link></li> */}
                    <li className="footer-section__item">
                    <Link to = "/news" className = "footer-section__link">News
                    </Link></li>
                    <li className="footer-section__item">
                    <Link to = "/faq" className = "footer-section__link">FAQs
                    </Link></li>
                    <li className="footer-section__item">
                    <Link to = "mailto:info@homeecoearner.com" className = "footer-section__link footer-section__link--underlined" >info@homeecoearner.com</Link>
                    </li>
                </ul>
                <div className="footer-section__copyright-container">
                    <small className="footer-section__copyright">© 2023 Home EcoEarner Limited, All Rights Reserved</small>
                </div>
            </div>
        </footer>
     );
}

export default Footer;