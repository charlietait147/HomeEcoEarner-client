import "./NavBar.scss";
import logo from "../../assets/images/Home-EcoEarner-logo.png"
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
// import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
// import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
function NavBar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuClass, SetMenuClass] = useState("nav-bar__menu");


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        SetMenuClass(isMenuOpen ? "nav-bar__menu" : "nav-bar__toggle")
    }
    return (
        <nav className="nav-bar">
            <div className="nav-bar__wrapper">
                <div className="nav-bar__logo-tagline-container">
                    <Link to="/" className="nav-bar__logo-link"><img src={logo} alt="Home Eco Earner logo" className="nav-bar__logo" /></Link>
                    {/* <p className="nav-bar__tagline" >Trusted Provider <span className="nav-bar__tagline--green">of Green Energy</span></p> */}

                    <div className="nav-bar__menu-container">
                        <button onClick={toggleMenu} className={menuClass} >
                            <div></div>
                            <div></div>
                            <div></div>
                            {isMenuOpen && (<ul className="nav-bar__dropdown-list">
                                <a href="/" className={location.pathname === "/" ? "nav-bar__dropdown-link nav-bar__dropdown-link--active" : "nav-bar__dropdown-link"}>HOME</a>
                                <a href="/about" className={location.pathname === "/about" ? "nav-bar__dropdown-link nav-bar__dropdown-link--active" : "nav-bar__dropdown-link"}>ABOUT</a>
                                <a href="/products" className={location.pathname === "/products" ? "nav-bar__dropdown-link nav-bar__dropdown-link--active" : "nav-bar__dropdown-link"}>PRODUCTS</a>
                                <a href="/services" className={location.pathname === "/services" ? "nav-bar__dropdown-link nav-bar__dropdown-link--active" : "nav-bar__dropdown-link"}>SERVICES</a>
                                {/* <a href="/" className="nav-bar__dropdown-link">PARTNERSHIPS</a> */}
                                <a href="/news"  className={location.pathname === "/news" ? "nav-bar__dropdown-link nav-bar__dropdown-link--active" : "nav-bar__dropdown-link"}>NEWS</a>
                                <a href="/contact"  className={location.pathname === "/contact" ? "nav-bar__dropdown-link nav-bar__dropdown-link--active" : "nav-bar__dropdown-link"}>CONTACT</a>
                                <a href="/faq" className={location.pathname === "/faq" ? "nav-bar__dropdown-link nav-bar__dropdown-link--active" : "nav-bar__dropdown-link"}>FAQs</a>
                            </ul>)}
                        </button>
                    </div>
                    <ul className="nav-bar__list">
                        {/* <li className="nav-bar__item"><NavLink to = "/contact-us" className = {location.pathname === "/contact-us" ? "nav-bar__link-active" : "nav-bar__link"}>Contact Us</NavLink></li> */}
                        {/* <NavLink to="mailto:rory.tait@homeecoearner.com" className="nav-bar__email-link nav-bar__email-link--large-mobile">rory.tait@homeecoearner.com</NavLink> */}
                        <NavLink to="/about" className={location.pathname === "/about" ? "nav-bar__link-active" : "nav-bar__link"}>About</NavLink>
                        <NavLink to="/products" className={location.pathname === "/products" ? "nav-bar__link-active" : "nav-bar__link"}>Products</NavLink>
                        <NavLink to="/services" className={location.pathname === "/services" ? "nav-bar__link-active" : "nav-bar__link"}>Services</NavLink>
                        {/* <NavLink to="#" className="nav-bar__link">Partnerships</NavLink> */}
                        <NavLink to="/news" className={location.pathname === "/news" ? "nav-bar__link-active" : "nav-bar__link"}>News</NavLink>
                        <NavLink to="/contact" className={location.pathname === "/contact" ? "nav-bar__link-active" : "nav-bar__link"}>Contact</NavLink>
                        <NavLink to="/faq" className={location.pathname === "/faq" ? "nav-bar__link-active" : "nav-bar__link"}>FAQs</NavLink>
                    </ul>
                </div>
                {/* <ul className="nav-bar__list nav-bar__list--mobile">
                    <div className="nav-bar__item-container">
                        <FeedOutlinedIcon
                            style={{ fontSize: "2.5rem", alignSelf: "center" }} onClick={() => window.location.replace('/news')}
                        />
                        <NavLink to="/news" className={location.pathname === "/news" ? "nav-bar__link-active" : "nav-bar__link"}>News</NavLink>
                    </div>
                    <div className="nav-bar__item-container">
                        <MailOutlinedIcon
                            style={{ fontSize: "2.5rem", alignSelf: "center" }}
                        />
                        <li className="nav-bar__item"><NavLink to = "/contact-us" className = {location.pathname === "/contact-us" ? "nav-bar__link-active" : "nav-bar__link"}>Contact Us</NavLink></li>
                        <NavLink to="mailto:rory.tait@homeecoearner.com" className="nav-bar__email-link">Email</NavLink>
                    </div>
                </ul> */}
            </div>
        </nav>
    );
}

export default NavBar;