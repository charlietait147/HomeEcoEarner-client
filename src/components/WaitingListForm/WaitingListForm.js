import {
  CForm,
  CFormInput,
  CFormLabel,
} from "@coreui/react/";
import peopleTick from "../../assets/images/people-tick.png";
import "./WaitingListForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import SuccessResponse from "../SuccessResponse/SuccessResponse";
import { API_URL } from "../../config/Config";


function WaitingListForm() {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("JOINING");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      setEmailError("Please enter a valid email.");
      setIsLoading(false);
      return;
    }
    axios
      .post(`${API_URL}/users/add-user`, {
        first_name: name,
        email: email,
      })
      .then(() => {
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log("Unable to add user " + error);
      });


    setIsLoading(false);


    setIsLoading(false);
    setShowModal(true);
    setName("");
    setEmail("");
  };

  const animateLoading = () => {
    setLoadingText((prevText) => {
      if (prevText === "JOINING...") {
        return "JOINING";
      }
      return prevText + ".";
    });
  };

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(animateLoading, 500);
    }
    setLoadingText("JOINING");

    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
  };

  const isButtonDisabled =
    name.trim() === "" || email.trim() === "";

  return (
    <aside className="waiting-list">
      <div className="waiting-list__wrapper">
        <div className="waiting-list__banner">
          <h3 className="waiting-list__title">Join The Queue Today</h3>
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
              <CFormLabel className="waiting-list__form-label" htmlFor="name">
                Your first name
              </CFormLabel>
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
              <CFormLabel className="waiting-list__form-label" htmlFor="email">
                Your email
              </CFormLabel>
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
              {emailError && (
                <p className="waiting-list__error-message">{emailError}</p>
              )}
              <button
                onClick={handleClick}
                disabled={isButtonDisabled}
                type="submit"
                className={
                  isButtonDisabled
                    ? "waiting-list__join waiting-list__join--disabled"
                    : "waiting-list__join"
                }
              >
                {isLoading ? loadingText : "JOIN WAITING LIST"}
              </button>
            </CForm>
            <small className="waiting-list__policy">
              Private Policy: We promise to keep your email address safe
            </small>
          </div>
        </div>
      </div>
      {isFormSubmitted && showModal && <SuccessResponse onClose={() => setShowModal(false)} />}
    </aside>
  );
}

export default WaitingListForm;
