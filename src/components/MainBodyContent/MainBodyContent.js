import renewableHouse from "../../assets/images/home-ecoearner-snippet.jpg";
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
      <header className="slideshow">
        <div className="slideshow__container">
          <img key={currentIndex} src={slideShowImages[currentIndex]} alt="slide show of renewable products" className="slideshow__image" />
        </div>
      </header>
      <header className="header-section">
        <div className="main-body__section-wrapper">
          <div className="header-section__container">
            <div className="header-section__heading-container">
              <h1 className="header-section__heading">
                Ready to get your electricity costs under control and give your self the chance to transform your costs into income? Join us today!
              </h1>
            </div>
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
      <WaitingListForm />
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
