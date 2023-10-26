import renewableHouse from "../../assets/images/renewable-house.png";
import familyPhoto from "../../assets/images/green-family-photo.png";
import cutCostIcon from "../../assets/icons/cut-cost-icon.png";
import electricityBillIcon from "../../assets/icons/electricity-bill-icon.png";
import upgradeIcon from "../../assets/icons/upgrade-icon.svg";
import saveMoneyIcon from "../../assets/icons/save-money.png";
import "./MainBodyContent.scss";
import WaitingListForm from "../WaitingListForm/WaitingListForm";
import { useState } from "react";

function MainBodyContent() {
  const [isModalClicked, setIsModalClicked] = useState(false);

  const showModal = () => {
    setIsModalClicked(true);
    document.body.classList.add("disable-scroll");
  };

  const hideModal = () => {
    setIsModalClicked(false);
    document.body.classList.remove("disable-scroll");
  };

  return (
    <section className="main-body">
      <div className="main-body__wrapper">
        <header className="header-section">
          <div className="header-section__heading-container">
            <h1 className="header-section__heading">
              Convert Your Renewable Energy Costs Into Income
            </h1>
            <p className="header-section__tag-line">
              To make money from renewable energy, join the Home EcoEarner
              System, your gate-way to cost-free, income-generating renewable
              energy.
            </p>
            {/* <button
              onClick={showModal}
              className="header-section__waiting-list-button"
            >
              JOIN WAITING LIST
            </button> */}
            {/* When isModalClicked is true, return the WaitingListForm component*/}
            {isModalClicked && <WaitingListForm onClose={hideModal} />}
          </div>
          <div className="header-section__image-container">
            <img
              src={renewableHouse}
              alt="Happy family on green grass "
              className="header-section__image"
            />
          </div>
        </header>
        <section className="benefits">
          <h2 className="benefits__header">What's in it for you?</h2>
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
                electricity cost-free - no more electricity bills to pay.
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
            </article>
            <article className="benefits__card">
              <img
                src={saveMoneyIcon}
                alt="save money icon"
                className="benefits__card-icon"
              />
              <h3 className="benefits__card-title"> Generate Income </h3>
              <p className="benefits__card-description">
                With our Power Booster upgrade, you could earn an average of
                £9,403 per year by selling renewable energy.
              </p>
            </article>
          </div>
          <p className="benefits__icon-attribution">
            Icons designed by{" "}
            <a
              href="https://www.freepik.com"
              className="benefits__freepik-link"
            >
              {" "}
              Freepik
            </a>
          </p>
        </section>
        <section className="join-waiting-list">
          <div className="join-waiting-list-claimer-container">
            <h3 className="join-waiting-list__claimer">
              By joining our waiting list, you'll be first to hear about our
              launch.
            </h3>
            <h3 className="join-waiting-list__claimer">
              Benefit from early access as installations will be limited at
              launch.
            </h3>
            <h3 className="join-waiting-list__claimer">
              <span className="join-waiting-list__claimer--bold">PLUS</span>,
              you will get priority ranking for the cost-free upgrade as soon as
              its available.
            </h3>
          </div>
          {/* <button
            onClick={showModal}
            className="join-waiting-list__waiting-list-button"
          >
            JOIN WAITING LIST
          </button> */}
        </section>
        <section className="trusted-provider">
          <div className="trusted-provider__home-image-container">
            <img
              src={familyPhoto}
              alt="house with renewable energy"
              className="trusted-provider__home-image"
            />
          </div>
          <div className="trusted-provider__text-container">
            <h4 className="trusted-provider__headline">
              We are your{" "}
              <span className="trusted-provider__headline--highlighted">
                Trusted Provider
              </span>{" "}
              of Green Energy Innovation
            </h4>
            <p className="trusted-provider__details">
              We understand the complete spectrum of clean green renewable
              energy technologies from solar through to nuclear fusion.{" "}
              <span className="trusted-provider__details--underlined">
                {" "}
                Our comprehensive expertise{" "}
              </span>{" "}
              allows us to provide you with the most effective and efficient
              energy solutions tailored to your needs.
            </p>
            <p className="trusted-provider__details">
              We are not only committed to advancing clean technology and
              renewable energy, but also to empowering you to become a part of
              the sustainable energy revolution.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MainBodyContent;
