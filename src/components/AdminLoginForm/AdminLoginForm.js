import "./AdminLoginForm.scss";
import logo from "../../assets/images/homeecoearner-logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AdminLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [directToDatabase, setDirectToDatabase] = useState(false);
    const navigate = useNavigate();

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
        setErrorMessage(false)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        setErrorMessage(false);
    }

    if (directToDatabase) {
        navigate("/admin/dashboard");
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (!username) {
            setUsernameError(true)
            setTimeout(() => { setUsernameError(false) }, 2000)
            return;

        }

        if (!password) {
            setPasswordError(true)
            setTimeout(() => { setPasswordError(false) }, 2000)
            return;

        }


        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
                username: username,
                password: password
            })
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    setDirectToDatabase(true);
                })
        } catch (error) {
            setErrorMessage("Invalid username or password");
        }


    }


    return (
        <section className="admin-login">
            <div className="admin-login__wrapper">
                <div className="admin-login__logo-container">
                    <img src={logo} alt="home eco earner logo" className="admin-login__logo" />
                </div>
                <h3 className="admin-login__title">Sign In</h3>
                <form onSubmit={submitHandler} className="admin-login__form">
                    <div className="admin-login__input-container">
                        <input type="text" className={`admin-login__input ${usernameError ? "admin-login__input--error" : null}`} placeholder="Username" onChange={handleChangeUsername} value={username} />
                        <input type="password" className={`admin-login__input ${passwordError ? "admin-login__input--error" : null}`} placeholder="Password" onChange={handleChangePassword} value={password} />
                    </div>
                    <button className="admin-login__log-in">Log in</button>
                    {errorMessage && <p className="admin-login__error-message">{errorMessage}</p>}
                </form>
            </div>
        </section>
    );
}

export default AdminLoginForm;