import { CProgress, CProgressBar, CForm, CFormInput } from '@coreui/react/';
import peopleTick from "../../assets/images/people-tick.png";



function WaitingListForm() {
    return (
        <aside className="waiting-list">
            <div className="waiting-list__wrapper">
                <h3 className="waiting-list__title">Let's get you on the Waiting List Today</h3>
                <CProgress color="info" variant="striped" value={50} height={15}>
                    <CProgressBar>50%</CProgressBar>
                </CProgress>
                <div className="waiting-list__image-container">
                    <img src={peopleTick} alt="3 people with tick sign" className="waiting-list__image" />
                </div>
                <div className="waiting-list__form-container">
                    <CForm>
                        <CFormInput
                            type="text"
                            size="lg"
                            className="waiting-list__form-name-input"
                            placeholder='First name'

                        />
                        <CFormInput
                            type="email"
                            size="lg"
                            className="waiting-list__form-email-input"
                            placeholder='Email'

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