import "./AdminLoginForm.scss";
function AdminLoginForm() {
    return ( 
        <form className="admin-login">
            <div className="admin-login__wrapper">
                <img src="" alt="" className="admin-login__logo" />
                <h3 className="admin-login__title">Log In</h3>
                <input type="text" className="admin-login__input" placeholder = "Username" />
                <input type="text" className="admin-login__input" placeholder= "Password" />
                <button className="admin-login__log-in">Log In</button>
            </div>
        </form>
     );
}

export default AdminLoginForm;