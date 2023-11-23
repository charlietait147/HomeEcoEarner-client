import {
  // CProgress,
  // CProgressBar,
  CForm,
  CFormInput,
  CFormLabel,
  // CCloseButton,
} from "@coreui/react/";
import peopleTick from "../../assets/images/people-tick.png";
import "./WaitingListForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import SuccessResponse from "../SuccessResponse/SuccessResponse";


function WaitingListForm() {
  // const [isModalClicked, setIsModalClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // const showModal = () => {
  //   setIsModalClicked(true);
  //   document.body.classList.add("disable-scroll");
  // };

  // const hideModal = () => {
  //   setIsModalClicked(false);
  //   document.body.classList.remove("disable-scroll");
  // };



  const [name, setName] = useState("");
  // const [postcode, setPostcode] = useState("");
  const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  // const [postcodeError, setPostcodeError] = useState("");
  // const [numberError, setNumberError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("JOINING");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  // const handleChangePostcode = (event) => {
  //   setPostcode(event.target.value);
  //   setPostcodeError("");
  // };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  // const handleChangeNumber = (event) => {
  //   setNumber(event.target.value)
  //   setNumberError("");
  // }

  // const handleChangeAddress  = (event) => {
  //   setAddress(event.target.value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      setEmailError("Please enter a valid email.");
      setIsLoading(false);
      return;
    }

    // if (
    //   (postcode.length !== 6 &&
    //     postcode.length !== 7 &&
    //     postcode.length !== 8) ||
    //   !postcode.includes(" ") ||
    //   /[a-z]/.test(postcode)
    // ) {
    //   setPostcodeError("Please enter a valid UK postcode.");
    //   setIsLoading(false);
    //   return;
    // }

    // if (number.length === 11 || number.length === 12)  {
    //     setNumberError("")
    // } else {
    //   setNumberError("Please enter a valid number")
    //   setIsLoading(false)
    // }

    // axios
    //   .get(
    //     `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_API_KEY}&email=${email}`
    //   )
    //   .then((response) => {
    //     if (response.data.deliverability !== "DELIVERABLE") {
    //       setIsLoading(false);
    //       setEmailError("Invalid Email");
    //       return;
    //     }
    //     setLoadingText("JOINING");
    //     animateLoading();
    //     console.log(response.data);

    // axios
    //   .get(`https://api.postcodes.io/postcodes/${postcode}`)
    //   .then(() => {
        axios
          .post(`https://mysql-deploy-home-ecoearner-561d764b7523.herokuapp.com/users/add-user`, {
            first_name: name,
            email: email,
            // postcode: postcode,
            // number: number,
            // address: address
          })
          .then(() => {
            setIsFormSubmitted(true);
          })
          .catch((error) => {
            console.log("Unable to add user " + error);
          });

        // console.log("Postcode valid: " + postcode);
        setIsLoading(false);
      // })
      // .catch((error) => {
      //   console.log("Error validating postcode " + error);
      //   setPostcodeError("Please enter a valid postcode");
      // });

    setIsLoading(false);
    setShowModal(true);
    setName("");
    setEmail("");
    // setNumber("");
    // setPostcode("");
    // setAddress("");
    // })
    // .catch((error) => {
    //   console.log(error);
    //   setEmailError("Invalid Email");
    //   setIsLoading(false);
    // });
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
          {/* <CCloseButton onClick={onClose} className="waiting-list__close" /> */}
          <h3 className="waiting-list__title">Join The Queue Today</h3>
          {/* <CProgress
            className="waiting-list__progress-bar"
            color="info"
            variant="striped"
            value={50}
            height={25}
          >
            <CProgressBar className="waiting-list__progress-bar-value">
              50%
            </CProgressBar>
          </CProgress> */}
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
              {/* <CFormLabel
                className="waiting-list__form-label"
                htmlFor="number"
              >
                Your phone number
              </CFormLabel>
              <CFormInput
                type="number"
                size="lg"
                className="waiting-list__form-input border-highlighted"
                id="number"
                placeholder="Phone number"
                required
                onChange={handleChangeNumber}
                value={number}
              />
              {numberError && (
                <p className="waiting-list__error-message">{numberError}</p>
              )}
              <CFormLabel
                className="waiting-list__form-label"
                htmlFor="address"
                >
                  Your address
                </CFormLabel>
              <CFormInput
                type="text"
                size="lg"
                className="waiting-list__form-input border-highlighted"
                id="address"
                placeholder="Address"
                onChange={handleChangeAddress}
                value={address}
                required
              />
              <CFormLabel
                className="waiting-list__form-label"
                htmlFor="postcode"
              >
                Your postcode
              </CFormLabel>
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
              {postcodeError && (
                <p className="waiting-list__error-message">{postcodeError}</p>
              )} */}
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
