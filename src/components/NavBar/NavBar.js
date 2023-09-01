import "./NavBar.scss";
import logo from "../../assets/images/homeecoearner-logo.png";
import { Link } from "react-router-dom";
function Header() {
    return ( 
        <nav className="nav-bar">
            <div className="nav-bar__wrapper">
                <div className="nav-bar__logo-tagline-container">
                    <Link to = "/"><img src={logo} alt="Home Eco Earner logo" className="nav-bar__logo" /></Link>
                    <p className = "nav-bar__tagline" >Trusted Provider <span className = "nav-bar__tagline--green">of Green Energy</span></p>
                </div>
                <ul className="nav-bar__list">
                    <li className="nav-bar__item"><Link to = "news" className = "nav-bar__link">News</Link></li>
                    <li className="nav-bar__item"><Link to = "contact-us" className = "nav-bar__link">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
     );
}

export default Header;