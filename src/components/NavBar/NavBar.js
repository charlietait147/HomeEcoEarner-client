import "./NavBar.scss";
import logo from "../../assets/images/HomeEcoEarner-edited-logo.png"
import { Link, NavLink, useLocation } from "react-router-dom";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
function NavBar() {
    const location = useLocation();
    return (
        <nav className="nav-bar">
            <div className="nav-bar__wrapper">
                <div className="nav-bar__logo-tagline-container">
                    <Link to="/"><img src={logo} alt="Home Eco Earner logo" className="nav-bar__logo" /></Link>
                    <p className="nav-bar__tagline" >Trusted Provider <span className="nav-bar__tagline--green">of Green Energy</span></p>
                </div>
                <ul className="nav-bar__list nav-bar__list--mobile">
                    <div className="nav-bar__item-container">
                        <FeedOutlinedIcon
                            style={{ fontSize: "2.5rem", alignSelf: "center"}}
                        />
                        <li className="nav-bar__item"><NavLink to="/news" className={location.pathname === "/news" ? "nav-bar__link-active" : "nav-bar__link"}>News</NavLink></li>
                    </div>
                    <div className="nav-bar__item-container">
                        <MailOutlinedIcon
                            style={{ fontSize: "2.5rem", alignSelf: "center"}}
                        />
                        {/* <li className="nav-bar__item"><NavLink to = "/contact-us" className = {location.pathname === "/contact-us" ? "nav-bar__link-active" : "nav-bar__link"}>Contact Us</NavLink></li> */}
                        <a href="mailto:rory.tait@homeecoearner.com" className="nav-bar__email-link">Email</a>
                    </div>
                </ul>
                <ul className="nav-bar__list nav-bar__list--tablet">
                        <li className="nav-bar__item"><NavLink to="/news" className={location.pathname === "/news" ? "nav-bar__link-active" : "nav-bar__link"}>News</NavLink></li>
                        {/* <li className="nav-bar__item"><NavLink to = "/contact-us" className = {location.pathname === "/contact-us" ? "nav-bar__link-active" : "nav-bar__link"}>Contact Us</NavLink></li> */}
                        <a href="mailto:rory.tait@homeecoearner.com" className="nav-bar__email-link">rory.tait@homeecoearner.com</a>
                    </ul>

            </div>
        </nav>
    );
}

export default NavBar;