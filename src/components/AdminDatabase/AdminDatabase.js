import logo from "../../assets/images/homeecoearner-logo.png";
import searchIcon from "../../assets/icons/search-24px.svg";
import "./AdminDatabase.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminDatabase() {
    const [userList, setUserList] = useState([]);

    const getUsersAll = async () => {
        try {
            const response = await axios(`${process.env.REACT_APP_API_URL}/users`);
            const fetchUsers = response.data
            console.log(fetchUsers);
            setUserList(fetchUsers);
        } catch (error) {
            console.log("Unable to retrieve users" + error);
        }
    }

    useEffect(() => {
        getUsersAll();
    }, [])


    return (

        <section className="admin-database">
                    <div className="admin-database__logo-container">
                        <img src={logo} alt="home eco earner logo" className="admin-login__logo" />
                    </div>
                    <div className="admin-database__users-container">
                        <div className="admin-database__title-container">
                            <h2 className="admin-database__title">
                                Users
                            </h2>
                            <div className="admin-database__search-container">
                                <input type="text" className="admin-database__search" placeholder="Search..." />
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

                    </div>
        </section>
    )
}

export default AdminDatabase;