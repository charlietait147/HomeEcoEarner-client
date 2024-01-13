import { useState } from "react";
import "./ContactForm.scss";
import { CForm, CFormInput, CFormTextarea, CFormLabel } from "@coreui/react";
import MapContainer from "../MapContainer/MapContainer";
// import axios from "axios";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }


  const isButtonDisabled = name.trim() === "" || email.trim() === "" || description.trim() === "";

  // const submitHandler = (event) => {
  //   event.preventDefault();

  //   const formData = {
  //     name: name,
  //     email: email,
  //     description: description
  //   }

  //   axios.post(`${API_URL}/contact`, formData)
  //     .then(response => {
  //       console.log(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  return (
    <section className="contact-form">
      {/* <div className="contact-form__banner">
        <span className="contact-form__header">CONTACT US</span>
      </div> */}
      <div className="contact-form__wrapper">
        <div className="contact-form__section-container">
          <div className="contact-form__title-container">
            <p className="contact-form__title">
              Need to get in touch with us? Fill out the form with your
              enquiry.
            </p>

          </div>
          <div className="contact-form__form-container">
            <CForm action="https://formsubmit.co/info@homeecoearner.com" method="POST" className="contact-form__form" >
              {/* <CForm onSubmit={submitHandler} className="contact-form__form" > */}
              <CFormLabel className="contact-form__form-label" htmlFor="name">
                First name*
              </CFormLabel>
              <CFormInput
                type="text"
                size="lg"
                className="contact-form__form-input"
                id="name"
                name="name"
                required
                onChange={handleChangeName}
                value={name}
              />
              <CFormLabel className="contact-form__form-label" htmlFor="email">
                Email*
              </CFormLabel>
              <CFormInput
                type="text"
                size="lg"
                className="contact-form__form-input"
                id="email"
                name="email"
                required
                onChange={handleChangeEmail}
                value={email}

              />
              <CFormLabel
                className="contact-form__form-label"
                htmlFor="description"
              >
                What can we help you with?
              </CFormLabel>
              <CFormTextarea
                type="text"
                size="lg"
                className="contact-form__form-description"
                id="description"
                name="description"
                required
                onChange={handleChangeDescription}
                value={description}
              />
              <div className="contact-form__submit-button-container">
                <button
                  type="submit"
                  className={isButtonDisabled ? "contact-form__submit-button contact-form__submit-button--disabled" : "contact-form__submit-button"}
                  onClick={() => setIsLoading(true)}
                  disabled={isButtonDisabled}
                > {isLoading ? "Loading..." : "Submit"}</button>
              </div>
            </CForm>
          </div>
        </div>
        <div className="contact-form__section-container">
          <div className="contact-form__contact-info-container">
            <p className="contact-form__title contact-form__title--contact ">Or get in touch with us:</p>
            <div className="contact-form__info-container">
              <p className="contact-form__info">Phone: <b>020 3286 5350</b></p>
              <p className="contact-form__info">Email: <b>info@homeecoearner.com</b></p>
              <p className="contact-form__info">Address:<b> 2 Brunel Place, Slough, SL1 1FQ, UK</b></p>
            </div>
          </div>
          <MapContainer />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
