import "./NavBar.scss";
import logo from "../../assets/images/homeecoearner-logo.png";
function Header() {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <img src={logo} alt="Home Eco Earner logo" className="header__logo" />
                <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__link">NEWS</li>
                    <li className="navigation__link">CONTACT US</li>
                </ul>
                </nav>
            </div>
        </header>
     );
}

export default Header;