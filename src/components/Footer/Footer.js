import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-section__wrapper">
                <div className="footer-section__container">
                    <ul className="footer-section__page-list">
                        <li className="footer-section__item">
                            <Link to="/about" className="footer-section__link">About
                            </Link></li>
                        <li className="footer-section__item">
                            <Link to="/products" className="footer-section__link">Products
                            </Link></li>
                        <li className="footer-section__item">
                            <Link to="/services" className="footer-section__link">Services
                            </Link></li>
                        <li className="footer-section__item">
                            <Link to="/news" className="footer-section__link">News
                            </Link></li>
                        <li className="footer-section__item">
                            <Link to="/contact" className="footer-section__link">Contact
                            </Link></li>
                        <li className="footer-section__item">
                            <Link to="/faq" className="footer-section__link">FAQs
                            </Link></li>
                    </ul>
                    <div className="footer-section__contact-container">
                        <ul className="footer-section__contact-list">
                            <li className="footer-section__item">2 Brunel Place, Slough, SL1 1FQ, UK</li>
                            <li className="footer-section__item">020 3286 5350</li>
                            <li className="footer-section__item">
                                <Link to="mailto:info@homeecoearner.com" className="footer-section__link footer-section__link--underlined" >info@homeecoearner.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section__copyright-container">
                    <small className="footer-section__copyright">© 2023 Home EcoEarner Limited, All Rights Reserved</small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;