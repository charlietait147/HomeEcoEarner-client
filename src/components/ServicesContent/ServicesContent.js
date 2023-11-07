import "./ServicesContent.scss";
import design from "../../assets/images/design.jpg";
import supply from "../../assets/images/supply.jpg";
import install from "../../assets/images/install-power.jpg";
import monitor from "../../assets/images/monitor-system.jpg";
import maintain from "../../assets/images/maintain.jpg";
import manage from "../../assets/images/manage-power.jpg";
import incomeGenerator from "../../assets/images/income-generator.jpg";
import { useState } from "react";
function ServicesContent() {


    const [slides] = useState([
        {
            url: design,
            title: "Design",
            item: "We work with experienced designers to design our Home EcoEarner Power System to suit your home’s characteristics.",
        },
        {
            url: supply,
            title: "Supply",
            item: "We then supply our Home EcoEarner Power System at no upfront cost to you.",
        },
        {
            url: install,
            title: "Install",
            item: "We then send our team of experienced installers to install our Home EcoEarner Power System in your home at no cost to you.",
        },
        {
            url: monitor,
            title: "Monitor",
            item: "We then provide the monitoring system to manage and optimize the power from your Home EcoEarner Power System at no cost to you.",
        },
        {
            url: maintain,
            title: "Maintain",
            item: "We send out our experienced maintenance teams each year to maintain your Home EcoEarner Power System at no cost to you.",
        },
        {
            url: manage,
            title: "Manage",
            item: "We provide and manage the power generation and usage in your Home EcoEarner Power System at no cost to you.",
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const currentSlide = slides[currentIndex];

    const [slideData] = useState([
        {
            url: incomeGenerator,
            title: "Income Generator",
            item: "Our Home EcoEarner Power Booster is designed to generate enough electricity as to provide cost-free electricity for your own use for the average UK household and generate excess electricity at no cost to you. We will then buy excess electricity from you so you have no more monthly electricity bills for you and nothing more to pay. Instead of you paying us, we will be paying you. You will have converted your home electricity from a cost into an income.",
        },
        {
            url: design,
            title: "Design",
            item: "When our Home EcoEarner Power Booster is launched, our designers will design the installation of our Home EcoEarner Power Booster to suit your home’s characteristics at no cost to you.",
        },
        {
            url: supply,
            title: "Supply",
            item: "We then supply our Home EcoEarner Power Booster at no cost to you.",
        },
        {
            url: install,
            title: "Install",
            item: "We then send our team of experienced installers to install our Home EcoEarner Power Booster in your home at no cost to you.",
        },
        {
            url: monitor,
            title: "Monitor",
            item: "We then provide the monitoring system to manage and optimize the power from your Home EcoEarner Power Booster at no cost to you.",
        },
        {
            url: maintain,
            title: "Maintain",
            item: "We send out our experienced maintenance teams each year to maintain your Home EcoEarner Power Booster at no cost to you.",
        },
        {
            url: manage,
            title: "Manage",
            item: "We provide and manage the power generation and usage in your Home EcoEarner Power System at no cost to you.",
        },
    ]);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const handlePrevSlideData = () => {
        setCurrentSlideIndex(
            (prevSlideIndex) => (prevSlideIndex - 1 + slideData.length) % slideData.length
        );
    };

    const handleNextSlideData = () => {
        setCurrentSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % slideData.length);
    };

    const currentSlideData = slideData[currentSlideIndex];


    return (
        <main className="services">
            <div className="services__banner">
                <span className="services__header">SERVICES</span>
            </div>
            <div className="services__wrapper">
                <h2 className="services__section-heading">What Are Our Services?</h2>
                <h3 className="services__section-subheading" >
                    Home EcoEarner Power System
                </h3>

                <div id ="power-system" className="services__slider">
                    <div className="services__slider-content">
                        <h3 className="services__slider-title">{currentSlide.title}</h3>
                        <div className="services__image-container">
                            <img src={currentSlide.url} alt="" className="services__image" />
                        </div>
                        <p className="services__text">{currentSlide.item}</p>
                    </div>
                    <div className="services__arrow-container">
                        <button
                            onClick={handlePrevSlide}
                            disabled={currentIndex === 0}
                            className={
                                currentIndex === 0
                                    ? "services__arrow services__arrow--disabled"
                                    : "services__arrow"
                            }
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNextSlide}
                            disabled={currentIndex === slides.length - 1}
                            className={
                                currentIndex === slides.length - 1
                                    ? "services__arrow services__arrow--disabled"
                                    : "services__arrow"
                            }
                        >
                            &gt;
                        </button>
                    </div>
                </div>
                <h3 id="power-booster" className="services__section-subheading services__section-subheading--bottom" >
                    Home EcoEarner Power Booster
                </h3>
                <div id="power-booster" className="services__slider">
                    <div className="services__slider-content">
                        <h3 className="services__slider-title">{currentSlideData.title}</h3>
                        <div className="services__image-container">
                            <img src={currentSlideData.url} alt="" className="services__image" />
                        </div>
                        <p className="services__text">{currentSlideData.item}</p>
                    </div>
                    <div className="services__arrow-container">
                        <button
                            onClick={handlePrevSlideData}
                            disabled={currentSlideIndex === 0}
                            className={
                                currentSlideIndex === 0
                                    ? "services__arrow services__arrow--disabled"
                                    : "services__arrow"
                            }
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNextSlideData}
                            disabled={currentSlideIndex === slideData.length - 1}
                            className={
                                currentSlideIndex === slideData.length - 1
                                    ? "services__arrow services__arrow--disabled"
                                    : "services__arrow"
                            }
                        >
                            &gt;
                        </button>
                    </div>
                </div>
                <h4 className="services__list-heading">You Will Then:</h4>
                <ul className="services__list">
                    <li className="services__item">Have cost-free electricity</li>
                    <li className="services__item">Have freedom from future electricity price increases</li>
                    <li className="services__item">Have nothing more to pay</li>
                    <li className="services__item">Be getting a regular monthly income</li>
                    <li className="services__item">Independent of your employment or other income</li>
                    <li className="services__item">Have successfully converted your home electricity costs into an income.</li>
                </ul>
                <h4 className="services__list-heading">Home EcoEarner Power Booster benefits are subject to</h4>
                <ul className="services__list">
                    <li className="services__item">The successful completion of the Research and Development and product development phases</li>
                    <li className="services__item">Power Booster being released (launched) onto the market</li>
                    <li className="services__item">Electricity prices at the time of installation into your home.</li>
                </ul>
            </div>
        </main>
    );
}

export default ServicesContent;
