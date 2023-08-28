import "./AdminLoginForm.scss";
import logo from "../../assets/images/homeecoearner-logo.png";
function AdminLoginForm() {
    return ( 
            <section className = "admin-login">
            <div className="admin-login__wrapper">
                <div className="admin-login__logo-container">
                    <img src={logo} alt="home eco earner logo" className="admin-login__logo" />
                </div>
                <h3 className="admin-login__title">Sign In</h3>
                <form className="admin-login__form">
                <div className="admin-login__input-container">
                    <input type="text" className="admin-login__input" placeholder = "Username" />
                    <input type="password" className="admin-login__input" placeholder= "Password" />
                </div>
                <button className="admin-login__log-in">Log In</button>
                </form>
            </div>
         </section>
     );
}

export default AdminLoginForm;