import "./ProductsContent.scss";
import windTurbine from "../../assets/images/wind-turbine-farm.jpg";
import battery from "../../assets/images/energy-storage.jpg";
import inverter from "../../assets/images/inverter.jpg";
import solarPanels from "../../assets/images/solar-panels.jpg";

function ProductsContent() {
    return (
        <main className="products">
            <div className="products__banner">
                <span className="products__header">PRODUCTS</span>
            </div>
            <div className="products__wrapper">
                <h2 className="products__section-heading">
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
                </ul>
            </div>
            <div className="products__image-container">
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
            </div>
        </main>


    );
}

export default ProductsContent;