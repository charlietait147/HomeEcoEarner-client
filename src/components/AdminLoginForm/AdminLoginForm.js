import "./AdminLoginForm.scss";
import logo from "../../assets/images/homeecoearner-logo.png";
import { useState } from "react";
function AdminLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword= (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!username) {
            setUsernameError(true)
            setTimeout(() =>  {setUsernameError(false)}, 2000)
            
        }

        if (!password) {
            setPasswordError(true)
            setTimeout(() => {setPasswordError(false)}, 2000)
            
        }

        
    }


    return ( 
            <section className = "admin-login">
            <div className="admin-login__wrapper">
                <div className="admin-login__logo-container">
                    <img src={logo} alt="home eco earner logo" className="admin-login__logo" />
                </div>
                <h3 className="admin-login__title">Sign In</h3>
                <form onSubmit = {submitHandler} className="admin-login__form">
                <div className="admin-login__input-container">
                    <input type="text" className={`admin-login__input ${usernameError ? "admin-login__input--error" : null}`} placeholder = "Username" onChange = {handleChangeUsername} value = {username} />
                    <input type="password" className={`admin-login__input ${passwordError ? "admin-login__input--error" : null}`} placeholder= "Password" onChange={handleChangePassword}  value = {password}/>
                </div>
                <button className="admin-login__log-in">Log in</button>
                </form>
            </div>
         </section>
     );
}

export default AdminLoginForm;