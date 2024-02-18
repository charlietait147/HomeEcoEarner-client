import renewableHouse from "../../assets/images/home-ecoearner-snippet.jpg";
// import windTurbine from "../../assets/images/wind-turbine-farm.jpg";
// import battery from "../../assets/images/energy-storage.jpg";
// import inverter from "../../assets/images/inverter.jpg";
// import solarPanels from "../../assets/images/solar-panels.jpg";
import slideShowImage1 from "../../assets/images/slideShowImage1.png";
import slideShowImage2 from "../../assets/images/slideShowImage2.png";
import slideShowImage3 from "../../assets/images/slideShowImage3.jpg";
import slideShowImage4 from "../../assets/images/slideShowImage4.jpg";
import energyStorage from "../../assets/images/energystorage.png"
import "./MainBodyContent.scss";
import WaitingListForm from "../WaitingListForm/WaitingListForm";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function MainBodyContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideShowImages = [
    slideShowImage1, slideShowImage2, slideShowImage3, slideShowImage4, renewableHouse
  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideShowImages.length);
    }, 5000);

    return () => clearInterval(timer);

  }, [currentIndex, slideShowImages.length])

  return (
    <main className="main-body">
      {/* <div className="main-body__wrapper"> */}
      <header className="slideshow">
        <div className="slideshow__container">
          {/* {slideShowImages.map((slideShowImage, index) => {
            return (
            <img key = {index}
            src= {slideShowImage}
            alt = "slideshow"
            className={index === currentIndex ? "slideshow__image" : "slideshow__image slideshow__image--hidden"}
            />
            )
          })} */}
          <img key={currentIndex} src={slideShowImages[currentIndex]} alt="" className="slideshow__image" />
        </div>
      </header>
      <header className="header-section">
        <div className="main-body__section-wrapper">
          <div className="header-section__container">
            <div className="header-section__heading-container">
              <h1 className="header-section__heading">
                Ready to get your electricity costs under control and give your self the chance to transform your costs into income? Join us today!
              </h1>
              {/* <div className="header-section__arrow">&darr;</div> */}
              {/* <p className="header-section__tag-line">
                To make money from renewable energy, join the Home EcoEarner
                System, your gate-way to cost-free, income-generating renewable
                energy.
              </p> */}
              {/* <button
              onClick={showModal}
              className="header-section__waiting-list-button"
            >
              JOIN WAITING LIST
            </button> */}
              {/* When isModalClicked is true, return the WaitingListForm component*/}
              {/* {isModalClicked && <WaitingListForm onClose={hideModal} />} */}
            </div>
            {/* <div className="header-section__image-container">
              <img
                src={renewableHouse}
                alt="Happy family on green grass "
                className="header-section__image"
              />
            </div> */}
          </div>
        </div>
      </header>
      <section className="sign-up">
        <div className="sign-up__wrapper">
          <div className="sign-up__image-container">
            <img src={energyStorage} alt="energy storage unit" className="sign-up__image" />
          </div>
          <div className="sign-up__text-container">
            <h3 className="sign-up__title">Sign up for our Home EcoEarner Power System today and experience the future of renewable energy:</h3>
            <ul className="sign-up__list">
              <li className="sign-up__item">Step 1 – get your electricity costs under control:</li>
                <ul className="sign-up__list">
                  <li className="sign-up__item">No up-front cost</li>
                  <li className="sign-up__item">No more electricity bills</li>
                  <li className="sign-up__item">No more electricity price hikes</li>
                </ul>
                <br />
              <li className="sign-up__item">Step 2 – line yourself up for cost-free access to our new technologies as they come to market:</li>
                <ul className="sign-up__list">
                  <li className="sign-up__item">We promise to install our Home EcoEarner Power Booster upon release.</li>
                </ul>
                <br />
              <li className="sign-up__item">You pay nothing upfront.</li>
              <li className="sign-up__item">We buy excess electricity from you, putting money back into your pocket.</li>
              <li className="sign-up__item">Say goodbye to out-of-pocket expenses.</li>
              <li className="sign-up__item">And when possible, we pay you instead of the other way around.</li>
            </ul>
            <span>Join our priority list today!</span>
            <span>Join us in this exciting journey towards sustainable and income-generating energy solutions.</span>
            <small className="sign-up__disclaimer">*Disclaimer: Not all installations may qualify for payments</small>
          </div>
        </div>
      </section>
      {/* <section className="problem-statement">
        <div className="main-body__section-wrapper">
          <h3 className="problem-statement__banner-text">Want to reduce high electricity bills?</h3>
          <h3 className="problem-statement__banner-text">Want to profit from renewable energy like the big companies?
          </h3 >
        </div>
      </section> */}
      {/* <section className="benefits">
        <div className="main-body__section-wrapper">
          <h2 className="benefits__header">What if you could</h2>
          <div className="join-waiting-list-claimer-container">
            <h3 className="join-waiting-list__claimer">
              Turn your home into a powerful source of renewable energy
            </h3>
            <h3 className="join-waiting-list__claimer">
              <span className="join-waiting-list__claimer--bold">AND</span> create cost-free electricity
            </h3>
            <h3 className="join-waiting-list__claimer">
              With the possibility to earn significant income
            </h3>
            <h3 className="join-waiting-list__claimer join-waiting-list__claimer--modified">
              <span className="join-waiting-list__claimer--bold">ALL</span>,
              without any upfront costs?
            </h3>
          </div>
          <button
            onClick={showModal}
            className="join-waiting-list__waiting-list-button"
          >
            JOIN WAITING LIST
          </button>
        </div>
      </section> */}
      {/* <section className="solution">
        <div className="main-body__section-wrapper">
          <h2 className="solution__header">The solution</h2>
          <div className="solution__card-container">
            <article className="solution__card">
              <h3 className="solution__card-title">Home EcoEarner Power System</h3>
              <p className="solution__card-description">Your gateway to your own cost-free electricity.</p>
              <div className="solution__button-container">
                <Link to= "/services#power-system"className="solution__button">
                  Find out more &rarr;
                </Link>
              </div>
            </article>

            <article className="solution__card solution__card--edited">
              <h3 className="solution__card-title">Home EcoEarner Power Booster</h3>
              <p className="solution__card-description">Your gateway to potential conversion of your electricity
                costs into earnings.</p>
              <div className="solution__button-container">
                <Link to="/services#power-booster" className="solution__button">
                  Find out more &rarr;
                </Link>
              </div>
            </article>

          </div>
        </div>
      </section> */}
      <WaitingListForm />
      {/* <section className="benefits">
        <div className="main-body__section-wrapper">
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
        </div>
      </section> */}
      {/* <section className="join-waiting-list">
        <div className="main-body__section-wrapper">
          <div className="join-waiting-list-claimer-container">
            <h3 className="join-waiting-list__claimer">
              By joining our waiting list, you'll be first to hear about our
              launch.
            </h3>
            <h3 className="join-waiting-list__claimer">
              Benefit from early access as installations will be limited at
              launch.
            </h3>
            <h3 className="join-waiting-list__claimer join-waiting-list__claimer--modified">
              <span className="join-waiting-list__claimer--bold">PLUS</span>,
              you will get priority ranking for the cost-free upgrade as soon as
              its available.
            </h3>
          </div>
          <button
            onClick={showModal}
            className="join-waiting-list__waiting-list-button"
          >
            JOIN WAITING LIST
          </button>
        </div>
      </section>
      <section className="trusted-provider">
        <div className="main-body__section-wrapper">
          <div className="trusted-provider__container">
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
          </div>
        </div>
      </section>
      {/* </div> */}
      <aside className="email-us">

        <div className="main-body__section-wrapper main-body__section-wrapper--flex" >
          <h2>Email us at: </h2>
          <div className="email-us__link-container">
            <h3><Link to="mailto:info@homeecoearner.com" className="email-us__link">info@homeecoearner.com</Link></h3>
            <div className="email-us__button-container">
              <a href="mailto:info@homeecoearner.com" className="email-us__button">Email us</a>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default MainBodyContent;
