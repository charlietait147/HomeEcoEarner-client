import {
    CProgress,
    CProgressBar,
    CForm,
    CFormInput,
    CFormLabel,
    CCloseButton
} from "@coreui/react/";
import peopleTick from "../../assets/images/people-tick.png";
import "./WaitingListForm.scss";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import SuccessResponse from "../SuccessResponse/SuccessResponse";


function WaitingListForm({ onClose }) {
    //SET VALIDATION STATES
    const [name, setName] = useState("")
    const [postcode, setPostcode] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [postcodeError, setPostcodeError] = useState("");
    // const [navigateToSuccessPage, setNavigateToSuccessPage] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    
    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangePostcode = (event) => {
        setPostcode(event.target.value);
        setPostcodeError("");
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        setEmailError("");
    };

    // if (navigateToSuccessPage) {
    //     return <Navigate to = "/success" />
    // }


    const handleSubmit = (event) => {
        event.preventDefault();

        //SET FORM VALIDATION CONDITIONAL STATEMENTS

        if (!email.includes('@')) {
            setEmailError('Please enter a valid email.');
            return;
        }

        if (postcode.length !== 8 || !postcode.includes(' ')) {
            setPostcodeError('Please enter a valid UK postcode.');
            return;
        }



        //AXIOS REQUEST

        axios
            .post(`${process.env.REACT_APP_API_URL}/users/add-user`, {
                first_name: name,
                email: email,
                postcode: postcode
            })
            .then(() => {
                // setNavigateToSuccessPage(true);
                setIsFormSubmitted(true);
            })
            .catch((error) => {
                console.log("Unable to add user" + error)
            });



    };

    return (
        <aside className="waiting-list">
            <div className="waiting-list__wrapper">
                <div className="waiting-list__banner">
                    <CCloseButton onClick={onClose} className="waiting-list__close" />
                    <h3 className="waiting-list__title">
                        Join The Queue Today
                    </h3>
                    <CProgress
                        className="waiting-list__progress-bar"
                        color="info"
                        variant="striped"
                        value={50}
                        height={25}
                    >
                        <CProgressBar className="waiting-list__progress-bar-value">
                            50%
                        </CProgressBar>
                    </CProgress>
                </div>
                <div className="waiting-list__main-form-container">
                    <div className="waiting-list__image-container">
                        <img
                            src={peopleTick}
                            alt="3 people with tick sign"
                            className="waiting-list__image"
                        />
                    </div>
                    <div className="waiting-list__form-container">
                        <CForm className="waiting-list__form" onSubmit={handleSubmit}>
                            <CFormLabel className="waiting-list__form-label" htmlFor="name">Your first name</CFormLabel>
                            <CFormInput
                                type="text"
                                size="lg"
                                className="waiting-list__form-input border-highlighted"
                                id="name"
                                placeholder="First name"
                                required
                                onChange={handleChangeName}
                                value={name}
                            />
                            <CFormLabel className="waiting-list__form-label" htmlFor="email">Your email</CFormLabel>
                            <CFormInput
                                type="text"
                                size="lg"
                                className="waiting-list__form-input border-highlighted"
                                id="email"
                                placeholder="Email"
                                required
                                onChange={handleChangeEmail}
                                value={email}
                            />
                            {emailError && <p className="waiting-list__error-message">{emailError}</p>}
                            <CFormLabel className="waiting-list__form-label" htmlFor="postcode">Your postcode</CFormLabel>
                            <CFormInput
                                type="text"
                                size="lg"
                                className="waiting-list__form-input border-highlighted"
                                id="postcode"
                                placeholder="Postcode"
                                required
                                onChange={handleChangePostcode}
                                value={postcode}
                            />
                            {postcodeError && <p className="waiting-list__error-message">{postcodeError}</p>}
                            <button type="submit" className="waiting-list__join">
                                JOIN WAITING LIST
                            </button>
                        </CForm>
                        <small className="waiting-list__policy">
                            Private Policy: We promise to keep your email address safe
                        </small>
                    </div>
                </div>
            </div>
            {isFormSubmitted && <SuccessResponse onClose = {onClose} />}
        </aside>
    );
}

export default WaitingListForm;
