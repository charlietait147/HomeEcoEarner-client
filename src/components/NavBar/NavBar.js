import "./NavBar.scss";
import logo from "../../assets/images/homeecoearner-logo.png";
function Header() {
    return ( 
        <nav className="nav">
            <div className="nav__wrapper">
                <img src={logo} alt="Home Eco Earner logo" className="nav__logo" />
                <ul className="nav__list">
                    <li className="nav__link">NEWS</li>
                    <li className="nav__link">CONTACT US</li>
                </ul>
            </div>
        </nav>
     );
}

export default Header;