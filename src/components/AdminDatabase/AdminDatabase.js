import logo from "../../assets/images/homeecoearner-logo.png";
import searchIcon from "../../assets/icons/search-24px.svg";

function AdminDatabase() {
    return (
        <section className="admin-database">
            <div className="admin-database__wrapper">
                <div className="admin-database__logo-container">
                    <img src={logo} alt="home eco earner logo" className="admin-login__logo" />
                </div>
                <div className="admin-database__users-container">
                    <h2 className="admin-database__title">
                        Users
                    </h2>
                    <div className="admin-database__input-container">
                        <input type="text" className="admin-database__search" placeholder="Search..." />
                        <img src={searchIcon} alt="search icon" className="admin-database__search-icon" />
                    </div>
                    <nav className="admin-database__nav">
                        <ul className="admin-database__nav-list">
                            <li className="admin-database__nav-item">FIRST NAME</li>
                            <li className="admin-database__nav-item">EMAIL</li>
                            <li className="admin-database__nav-item">POSTCODE</li>
                        </ul>
                    </nav>
                    <div className="admin-database__user-content-container admin-database__user-content-container--left">
                        <div className="admin-database__item-left">
                            <span className="admin-database__categories">
                                FIRST NAME:
                            </span>
                            <p className="admin-database__content admin-database__content--item">
                                Charlie</p>
                        </div>
                        <div className="inventoryBody__item-left">
                            <span className="inventoryBody__categories">POSTCODE</span>
                            <p className="inventoryBody__content">
                                TW12 5D6
                            </p>
                        </div>
                    </div>
                    <div className="admin-database__user-content-container admin-database__user-content-container--right">
                        <div className="admin-database__item-right">
                            <span className="admin-database__categories">
                                EMAIL
                            </span>
                            <p className="admin-database__content admin-database__content--item">
                                charlietait147@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminDatabase;