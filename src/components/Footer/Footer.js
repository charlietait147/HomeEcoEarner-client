import "./Footer.scss";
function Footer() {
    return ( 
        <footer className = "footer-section">
            <div className="footer-section__wrapper">
                <ul className="footer-section__list">
                    <li className="footer-section__link">
                        Contact Us
                    </li>
                    <li className="footer-section__link">
                        News
                    </li>
                </ul>
                <small className="footer-section__copyright">© 2023 Home EcoEarner Limited, All Rights Reserved</small>
            </div>
        </footer>
     );
}

export default Footer;