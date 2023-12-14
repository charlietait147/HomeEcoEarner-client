import batteryEnergyStorage from "../../assets/images/battery-storage-edited.png";
import "./BatteryStorageContent.scss";
function BatteryStorageContent() {
    return (
        <section className="battery-storage">
            <div className="battery-storage__wrapper">
                <h1 className="battery-storage__title">Battery Energy Storage System (BESS)</h1>
                <div className="battery-storage__container">
                    <div className="battery-storage__image-container">
                        <img src={batteryEnergyStorage} alt="battery storage" className="battery-storage__image" />
                    </div>
                    <p className="battery-storage__description">Our Lithium Battery Energy Storage System (BESS) is a comprehensive solution tailored for various
                        energy storage needs. <br /><br /> This system is versatile, suitable for large-scale energy storage, distribution
                        network storage, microgrid storage, as well as industrial, commercial, and household applications. <br /><br /> It
                        also extends to specialized scenarios like data center power storage and emergency backup,
                        providing customers with targeted, all-encompassing system solutions.</p>
                </div>
                <h3 className="battery-storage__section-title">Key Features of Our BESS</h3>
                <ol className="battery-storage__numbered-list">
                    <li className="battery-storage__numbered-item">Advanced Battery Management Technology</li>
                    <ul className="battery-storage__list">
                        <li className="battery-storage__item"><b>Highly Integrated Chips &amp; Unique Algorithm:</b> We employ advanced chips coupled
                            with a unique battery equalization algorithm. This combination allows for
                            bidirectional, large-current equalization, reaching currents up to 3A.</li>
                        <li className="battery-storage__item"><b>Efficient &amp; Reliable:</b> Our system boasts an impressive energy efficiency of up to 94%,
                            ensuring high equalizing efficiency and reliability.</li>
                        <li className="battery-storage__item"><b>Low Power Consumption &amp; Scalability: </b> With ultra-low static power consumption,
                            the system is designed for easy expansion and can be cascaded to suit larger
                            requirements.</li>
                        <li className="battery-storage__item"><b>Battery Protection: </b> Our technology accurately estimates the internal state of the
                            battery, safeguarding both its safety and prolonging its lifespan.</li>
                    </ul>

                    <li className="battery-storage__numbered-item">Active Safety Technology</li>
                    <ul className="battery-storage__list">
                        <li className="battery-storage__item"><b>Intelligent Fire Protection: </b> At the pack level, our BESS features an intelligent fire
                            protection system.</li>
                        <li className="battery-storage__item"><b>Safety Isolation: </b> We incorporate battery-integrated system partition safety
                            isolation, ensuring robust protection.</li>
                        <li className="battery-storage__item"><b>Active Fire Protection:</b> The system is equipped with full-time immersion capabilities
                            for active fire prevention.</li>
                    </ul>
                    <li className="battery-storage__numbered-item">Energy Management &amp; Coordinated Control Technology</li>
                    <ul className="battery-storage__list">
                        <li className="battery-storage__item"><b>Comprehensive Data Handling: </b>Our system is adept at data acquisition,
                            computation, event management, and processing.</li>
                        <li className="battery-storage__item"><b>Effective System Control: </b> We ensure efficient control of the entire system, coupled
                            with real-time monitoring for seamless energy management.</li>
                    </ul>
                </ol>
            </div>
            <div className="battery-storage__banner">
                <p className="battery-storage__important-text">Our BESS is not just an energy storage solution; it&#39;s a step towards smarter, safer, and more efficient
                    energy management for a wide array of applications. Whether it&#39;s for a data center, a household, or
                    an industrial setup, our system is designed to meet diverse needs with precision and reliability.</p>
            </div>
        </section>
    );
}

export default BatteryStorageContent;