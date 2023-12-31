import solarPanels from "../../assets/images/hee-solar-panels.jpg";
import "./SolarPanelsContent.scss";
function SolarPanelsContent() {
    return (
        <section className="solar-panels">
            <div className="solar-panels__wrapper">
                <h1 className="solar-panels__title">SR-182 Series Solar Panels</h1>
                <div className="solar-panels__image-container">
                    <img src={solarPanels} alt="SR-182 series solar panels" className="solar-panels__image" />
                </div>
                <p className="solar-panels__description"><b>Discover our newest SR-182 series solar panels</b>, now equipped with cutting-edge half-cut, multi-
                    busbar monocrystalline technology. These panels deliver remarkable power, reaching up to 460W
                    and boasting an efficiency rate of 21.35%.<br /><br /><b>Designed for exceptional reliability</b>, our solar panels feature enhanced resistance to potential
                    induced degradation (PID) thanks to advanced battery process optimisation and strict material
                    quality control.<br /><br /><b>Our solar modules are built to last</b>, withstanding harsh conditions like salt spray and ammonia gas.
                    They have successfully endured rigorous mechanical load tests, withstanding up to 5400Pa on the
                    front and 2400Pa on the back.<br /><br /><b>Boost your energy yield with our solar panels</b>, renowned for their superior Induced Attenuation
                    Modulation (IAM) and impressive performance in low-light conditions — all confirmed through
                    independent third-party testing.<br /><br /><b>Experience increased power output</b> with our high-efficiency monocrystalline modules. Their low
                    temperature coefficient and cooler operating temperature contribute to enhanced power
                    generation.<br /><br /><b>Our solar panels integrate advanced half-chip technology</b>, offering robust resistance to shading and
                    ensuring stable energy output, even in less-than-ideal conditions.<br /><br /><b>Choose our HomeEcoEarner (HEE) monocrystalline modules</b> for a smart investment. These modules
                    are guaranteed to maintain at least 84.8% of their power performance over 25 years, assuring you of
                    their long-term reliability and efficiency.</p>
                <h3 className="solar-panels__subtitle">Technical Specifications:</h3>
                <p className="solar-panels__description">Our solar panels feature an <b>IP65-rated terminal box</b>, a conductor cross-section of 4mm², and MC4
                    compatible connectors. The overall dimensions are 1910x1134x35mm.<br /><br />Built to endure, our modules can <b>resist hail of up to 25mm in diameter</b> and withstand wind pressure
                    loads of 2400Pa/244kg/m².<br /><br />Operating in a wide temperature range from -40 to +85°C, our solar panels are engineered to
                    <b> perform consistently under extreme temperature conditions</b>, ensuring reliable energy production in
                    any climate.</p>
            </div>
        </section>
    );
}

export default SolarPanelsContent;