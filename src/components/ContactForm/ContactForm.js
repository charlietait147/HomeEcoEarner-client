import { useState } from "react";
import "./ContactForm.scss";
import { CForm, CFormInput, CFormTextarea, CFormLabel } from "@coreui/react";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <section className="contact-form">
      <div className="contact-form__banner">
        <span className="contact-form__header">CONTACT US</span>
      </div>
      <div className="contact-form__wrapper">
        <div className="contact-form__title-container">
          <p className="contact-form__title">
            Need to get in touch with us? Fill out the form with your
            enquiry.
          </p>
        </div>
        <div className="contact-form__form-container">
          <CForm action="https://formsubmit.co/charlietait1@gmail.com" method="POST" className="contact-form__form" >
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
            />
            <div className="contact-form__submit-button-container">
              <button
                type="submit"
                className="contact-form__submit-button"
                onClick={() => setIsLoading(true)}
              > {isLoading ? "Loading..." : "Submit"}</button>
            </div>
          </CForm>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
