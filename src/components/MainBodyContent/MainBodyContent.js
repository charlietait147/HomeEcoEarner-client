import renewableHouse from "../../assets/images/renewable-house.png";
import cutCostIcon from "../../assets/icons/cut-cost-icon.png";
import electricityBillIcon from "../../assets/icons/electricity-bill-icon.png";
import upgradeIcon from "../../assets/icons/upgrade-icon.png";
import "./MainBodyContent.scss";
import WaitingListForm from "../WaitingListForm/WaitingListForm";
import { useState } from "react";


function MainBodyContent() {
    //STATE TO HANDLE MODAL
    const [isModalClicked, setIsModalClicked] = useState(false);

    //FUNCTION TO HANDLE OPENING THE MODAL, ADD SCROLLING ON MODAL
    const showModal = () => {
        setIsModalClicked(true);
        document.body.classList.add("disable-scroll");
    }
    
    //FUNCTION TO HANDLE CLOSING THE MODAL, REMOVE SCROLLING ON MODAL
    const hideModal = () => {
        setIsModalClicked(false)
        document.body.classList.remove("disable-scroll");
    }

  return (
    <section className="main-body">
      <div className="main-body__wrapper">
        <header className="header">
          <div className="header__heading-container">
            <h1 className="header__heading">
              Convert Your Electricity Costs Into Earnings
            </h1>
            <p className="header__tag-line">
              To make money from renewable energy, join the Home EcoEarner
              System, your gate-way to cost-free, income-generating renewable
              energy.
            </p>
            <button onClick = {showModal} className="header__waiting-list-button">
              JOIN WAITING LIST
            </button> 
            {/* When isModalClicked is true, return the WaitingListForm component*/}
            {isModalClicked && <WaitingListForm onClose = {hideModal} />}
          </div>
          <div className="header__image-container">
            <img
              src={renewableHouse}
              alt="house with renewable energy"
              className="header__image"
            />
          </div>
        </header>
        <section className="benefits">
          <h2 className="benefits__header">Whats In It For you?</h2>
          <div className="benefits__card-container">
            <article className="benefits__card">
              <img
                src={cutCostIcon}
                alt="cutting the cost icon"
                className="benefits__card-icon"
              />
              <h3 className="benefits__card-title">No Upfront Cost</h3>
              <p className="benefits__card-description">
                You get to own a home electricity generation system without
                paying a penny upfront.
              </p>
            </article>
            <article className="benefits__card">
              <img
                src={electricityBillIcon}
                alt="electricity bill icon"
                className="benefits__card-icon"
              />
              <h3 className="benefits__card-title">
                No More Electricity Bills
              </h3>
              <p className="benefits__card-description">
                With no up-front cost and free installation, you get your
                electricity cost-free, no more electricity bills to pay.
                {/* ICON REFERENCE */}
                {/* <a href="https://www.freepik.com/icon/invoice_1956804#fromView=search&term=cross+out+electricity+bills&page=1&position=9">Icon by Icongeek26</a> */}
              </p>
            </article>
            <article className="benefits__card">
              <img
                src={upgradeIcon}
                alt="upgrade icon"
                className="benefits__card-icon benefits__card-icon--modified"
              />
              <h3 className="benefits__card-title">
                Upgrade for Additional Earnings
              </h3>
              <p className="benefits__card-description">
                You can opt for a cost-free upgrade after 2 years to transform
                your home electricity system into an income stream with our Home
                EcoEarner Power Booster.
              </p>
              {/* ICON REFERENCE */}
              {/* <a href="https://www.freepik.com/icon/top_8020016#fromView=search&term=upgrade+&page=1&position=0">Icon by Pavani TLN</a> */}
            </article>
            <article className="benefits__card">
              <img src={""} alt="icon" className="benefits__card-icon" />
              <h3 className="benefits__card-title"> Generate Income </h3>
              <p className="benefits__card-description">
                With our Power Booster upgrade, you could earn an average of
                £9,403 per year by selling renewable energy. 
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MainBodyContent;
