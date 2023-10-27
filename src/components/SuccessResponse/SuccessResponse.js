import "./SuccessResponse.scss";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useEffect } from "react";
// import { CCloseButton } from '@coreui/react';
function SuccessResponse({ onClose }) {

  useEffect(() => {
    document.body.classList.add('disable-scroll')

    return () => {
      document.body.classList.remove('disable-scroll')
    }
  })
  return (

    <aside className="success-response">
      <div className="success-response__banner">
        <p className="success-response__banner-text">Thank you</p>
        {/* <CCloseButton onClick={onClose} className="success-response__close background-color" /> */}
      </div>
      <div className="success-response__wrapper">
        <TaskAltIcon style={{ fontSize: "8rem" }} />
        <p className="success-response__info">Your application has been received.</p>
        <button className="success-response__button" onClick={onClose}>Return to Home</button>
      </div>
    </aside>

  );
}

export default SuccessResponse;