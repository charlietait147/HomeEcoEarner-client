import { CProgress, CProgressBar, CForm, CFormInput } from '@coreui/react/';
import peopleTick from "../../assets/images/people-tick.png";
import "./WaitingListForm.scss";


function WaitingListForm() {
    return (
        <aside className="waiting-list">
            <div className="waiting-list__wrapper">
                <div className="waiting-list__banner">
                    <h3 className="waiting-list__title">Let's get you on the Waiting List Today</h3>
                    <CProgress className="waiting-list__progress-bar" color="info" variant="striped" value={50} height={25}>
                        <CProgressBar className="waiting-list__progress-bar-value">50%</CProgressBar>
                    </CProgress>
                </div>
                <div className="waiting-list__image-container">
                    <img src={peopleTick} alt="3 people with tick sign" className="waiting-list__image" />
                </div>
                <div className="waiting-list__form-container">
                    <CForm className="waiting-list__form">
                        <CFormInput
                            type="text"
                            size="lg"
                            className="waiting-list__form-name-input"
                            placeholder='First name'
                            label="Your first name"

                        />
                        <CFormInput
                            type="email"
                            size="lg"
                            className="waiting-list__form-email-input"
                            placeholder='Email'
                            label="Your email"

                        />
                        <CFormInput
                            type="text"
                            size="lg"
                            className="waiting-list__form-postcode-input"
                            placeholder='Postcode'
                            label="Your postcode"

                        />
                        <button type="submit" className="waiting-list__join">JOIN WAITING LIST</button>
                    </CForm>
                    <small className="waiting-list__policy">Private Policy: We promise to keep your email address safe</small>
                </div>
            </div>
        </aside>
    );
}

export default WaitingListForm;