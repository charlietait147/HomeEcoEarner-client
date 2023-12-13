import "./ProductsContent.scss";
// import windTurbine from "../../assets/images/wind-turbine-farm.jpg";
// import battery from "../../assets/images/energy-storage.jpg";
import inverter from "../../assets/images/Inverter-1.png";
// import solarPanels from "../../assets/images/solar-panels.jpg";
import batteryEnergyStorage from "../../assets/images/slideShowImage1.png";

function ProductsContent() {
    return (
        <main className="products">
            <div className="products__wrapper">
                <h2 className="products__section-heading">Our Products</h2>
                <div className="products__container">
                    <article className="products__card">
                        <img src={batteryEnergyStorage} alt="battery energy storage system" className="products__image" />
                        <div className="products__text-container">
                            <h3 className="products__title">Battery Energy Storage System</h3>
                            {/* <p className="products__description"><b>Our Lithium Battery Energy Storage System (BESS)</b> is a comprehensive solution tailored for various
                                energy storage needs. This system is versatile, suitable for large-scale energy storage, distribution
                                network storage, microgrid storage, as well as industrial, commercial, and household applications. It
                                also extends to specialized scenarios like data center power storage and emergency backup,
                                providing customers with targeted, all-encompassing system solutions.</p> */}
                            <div className="products__link-container">
                                <p className="products__link">Find out more &rarr;</p>
                            </div>
                        </div>
                    </article>
                    <article className="products__card">
                        <img src={inverter} alt="HF-H Series Inverter" className="products__image" />
                        <div className="products__text-container">
                            <h3 className="products__title">HF-H Series Inverter: A Comprehensive Solar Energy Solution</h3>
                            {/* <p className="products__description"><b>Our HF-H series</b> represents a new era in solar energy management, combining the functionalities of
                                solar energy storage, municipal power charge storage, and AC sine wave output into one
                                sophisticated all-in-one machine. Designed with versatility in mind, it&#39;s the perfect fit for a range of
                                applications, from residential to industrial.</p> */}
                            <div className="products__link-container">
                                <p className="products__link">Find out more &rarr;</p>
                            </div>
                        </div>
                    </article>
                    {/* <article className="products__card">
                        <img src={solarPanels} alt="solar panels" className="products__image" />
                        <div className="products__text-container">
                            <h3 className="services__title">Solar Power</h3>
                            <p className="services__description"></p>
                        </div>
                    </article>
                    <article className="products__card">
                        <img src={battery} alt="battery storage" className="products__image" />
                        <div className="products__text-container">
                            <h3 className="services__title">Battery Storage</h3>
                            <p className="services__description"></p>
                        </div>
                    </article>
                    <article className="products__card">
                        <img src={windTurbine} alt="mini wind turbine" className="products__image" />
                        <div className="products__text-container">
                            <h3 className="services__title">Mini Wind Turbine</h3>
                            <p className="services__description"></p>
                        </div>
                    </article>
                    <article className="products__card">
                        <img src="" alt="" className="products__image" />
                        <div className="products__text-container">
                            <h3 className="services__title">Power Booster</h3>
                            <p className="services__description">Coming soon.</p>
                        </div>
                    </article> */}
                </div>
                {/* <h2 className="products__section-heading">
                    Home EcoEarner Power System
                </h2>
                <ul className="products__list">
                    <li className="products__item">Our Home EcoEarner solar, battery, inverter, controller, and wind turbine system for
                        your home</li>
                    <li className="products__item">Designed to provide the average UK daily household power consumption (10.3 kWh
                        / day of available power)</li>
                    <li className="products__item">Three sources of power - Solar power + wind power + grid back-up</li>
                    <li className="products__item">Subject to site attributes, in general, a combination of solar and wind power sources
                        will for many homeowners mean that they may never need to use the grid again as a
                        source of electricity.</li>
                    <li className="products__item">But they still have the comfort of knowing they can tap into the grid if needed.</li>
                    <li className="products__item">If the grid is down or experiencing blackouts or brownouts, they should be largely
                        unaffected as they will have access to both solar and wind power sources.</li>
                </ul> */}
            </div>
            {/* <div className="products__image-container">
                <img src={solarPanels} alt="solar panels" className="products__image " />
                <img src={windTurbine} alt="wind turbine" className="products__image" />
                <img src={battery} alt="battery" className="products__image" />
                <img src={inverter} alt="inverter" className="products__image" />
            </div>
            <div className="products__wrapper">
                <h2 className="products__section-heading">
                    Home EcoEarner Power Booster
                </h2>
                <ul className="products__list">
                    <li className="products__item">Product currently in Research and Development and product development</li>
                    <li className="products__item">Multiple new green technologies</li>
                    <li className="products__item">A solar, battery, inverter, controller, and wind turbine system for your home + our
                        Power Booster</li>
                    <li className="products__item">Designed to provide the average UK daily household power consumption (10.3 kWh
                        / day of available power) + generate sufficient excess power as to provide the
                        homeowner with a regular income stream and cover the cost of the equipment and
                        funding costs and provide a return on investment</li>
                    <li className="products__item">UK government grant application filed</li>
                    <li className="products__item">We are a client of <b>UKInnovate EDGE</b>, the UK government’s funding body for
                        supporting new technologies in the UK</li>
                    <li className="products__item">Target availability – Q1 2026.</li>
                </ul>
            </div> */}
        </main>


    );
}

export default ProductsContent;