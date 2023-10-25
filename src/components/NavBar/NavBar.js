import "./NavBar.scss";
import logo from "../../assets/images/HomeEcoEarner-edited-logo.png"
import { Link, NavLink, useLocation } from "react-router-dom";
function NavBar() {
    const location = useLocation();
    return (
        <nav className="nav-bar">
            <div className="nav-bar__wrapper">
                    <div className="nav-bar__logo-tagline-container">
                        <Link to="/"><img src={logo} alt="Home Eco Earner logo" className="nav-bar__logo" /></Link>
                        <p className="nav-bar__tagline" >Trusted Provider <span className="nav-bar__tagline--green">of Green Energy</span></p>
                    </div>
                    <ul className="nav-bar__list">
                        <li className="nav-bar__item"><NavLink to="/news" className={location.pathname === "/news" ? "nav-bar__link-active" : "nav-bar__link"}>News</NavLink></li>
                        {/* <li className="nav-bar__item"><NavLink to = "/contact-us" className = {location.pathname === "/contact-us" ? "nav-bar__link-active" : "nav-bar__link"}>Contact Us</NavLink></li> */}
                        <a href="mailto:rory.tait@homeecoearner.com" className="nav-bar__email-link">rory.tait@homeecoearner.com</a>
                    </ul>
                
            </div>
        </nav>
    );
}

export default NavBar;