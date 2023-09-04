import logo from "../../assets/images/homeecoearner-logo.png";
import searchIcon from "../../assets/icons/search-24px.svg";
import errorIcon from "../../assets/icons/error-24px.png";
import "./AdminDatabase.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDatabase() {
    const [userList, setUserList] = useState([]);
    const [defaultUserList, setDefaultUserList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const handleChange = (event) => {

        setInputValue(event.target.value);

        const filteredUsers = userList.filter((user) => {
            return user.first_name.includes(inputValue) || user.postcode.includes(inputValue) || user.email.includes(inputValue)
        })

        setUserList(filteredUsers);


        if (event.target.value === "") {
            setUserList(defaultUserList);

        }

    }

    const getUsersAll = async () => {
        try {
            const response = await axios(`${process.env.REACT_APP_API_URL}/users`, {
            });
            const fetchUsers = response.data
            setUserList(fetchUsers);
            setDefaultUserList(fetchUsers);
        } catch (error) {
            console.log("Unable to retrieve users" + error);
        }
    }


    useEffect(() => {
        getAuthorisation();
        getUsersAll();
    }, [])

    const handleLogout = ()  => {
        localStorage.removeItem('token');
        navigate("/admin/login");
        
    }
   
    const getAuthorisation = () => {

        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/admin/login");
        }

        axios.get(`${process.env.REACT_APP_API_URL}/admin`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response.data);
        })
            .catch((error) => {
                console.error(error);
            })

    }

    return (

        <section className="admin-database">
            <div className="admin-database__logo-container">
                <img src={logo} alt="home eco earner logo" className="admin-login__logo" />
                <button onClick = {handleLogout}>Log Out</button>
            </div>
            <div className="admin-database__users-container">
                <div className="admin-database__title-container">
                    <h2 className="admin-database__title">
                        Users
                    </h2>
                    <div className="admin-database__search-container">
                        <input type="text" className="admin-database__search" placeholder="Search..." onChange={handleChange} />
                        <img src={searchIcon} alt="search icon" className="admin-database__search-icon" />
                    </div>
                </div>

                {userList.map((user) => {
                    return (

                        <div className="admin-database__user-content-mobile-container" key={user.id}>
                            <div className="admin-database__user-content-container admin-database__user-content-container--left">
                                <div className="admin-database__item">
                                    <span className="admin-database__categories">
                                        FIRST NAME
                                    </span>
                                    <p className="admin-database__user-content">
                                        {user.first_name}</p>
                                </div>
                                <div className="admin-database__item--right">
                                    <span className="admin-database__categories">POSTCODE</span>
                                    <p className="admin-database__user-content">
                                        {user.postcode}
                                    </p>
                                </div>
                            </div>
                            <div className="admin-database__user-content-container">
                                <div className="admin-database__item">
                                    <span className="admin-database__categories">
                                        EMAIL
                                    </span>
                                    <p className="admin-database__user-content">
                                        {user.email}</p>
                                </div>
                            </div>
                        </div>

                    )


                }

                )}
                {/* {(inputValue && userList.length === 0) && <p className="admin-database__no-user-message">No users have been found in your search.</p>} */}

                {(inputValue && userList.length === 0) && <div className="admin-database__no-user-container">
                    <img src={errorIcon} alt="error icon" className="admin-database__no-user-error-icon"></img>
                    <p className="admin-database__no-user-message">No users have been found in your search.</p>
                </div>

                }

            </div>

        </section>
    )
}

export default AdminDatabase;