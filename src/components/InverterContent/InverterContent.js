import inverter from "../../assets/images/Inverter-1.png";
import inverterDiagram from "../../assets/images/Inverter-2.png";
import smallInverter from "../../assets/images/Inverter-3.png";
import "./InverterContent.scss";

function InverterContent() {
    return (
        <section className="inverter-content">
            <div className="inverter-content__wrapper">
                <h1 className="inverter-content__title">HF-H Series Inverter: A Comprehensive Solar Energy Solution</h1>
                <div className="inverter-content__image-container">
                    <img src={inverter} alt="inverter" className="inverter-content__image" />
                    <img src={inverterDiagram} alt="inverter diagram" className="inverter-content__image" />
                </div>
                <p className="inverter-content__description">Our HF-H series represents a new era in solar energy management, combining the functionalities of
                    solar energy storage, municipal power charge storage, and AC sine wave output into one
                    sophisticated all-in-one machine. <br /><br />Designed with versatility in mind, it&#39;s the perfect fit for a range of
                    applications, from residential to industrial.</p>
                <h3 className="inverter-content__section-title">Key Features of the HF-H Series Inverter: </h3>
                <ol className="inverter-content__numbered-list">
                    <li className="inverter-content__numbered-item">Advanced Control and Reliability</li>
                    <ul className="inverter-content__list">
                        <li className="inverter-content__item"><b>DSP Control &amp; Algorithm: </b> Utilizes DSP (Digital Signal Processor) control and an
                            advanced algorithm for a swift response, unmatched reliability, and adherence to
                            high industrial standards. </li>
                        <li className="inverter-content__item"><b>Multiple Charge Modes:</b>Offers four distinct charging modes:</li>
                        <ul className="inverter-content__list inverter-content__list--edited">
                            <li className="inverter-content__item">Solar Power Only</li>
                            <li className="inverter-content__item">Mains Power Only</li>
                            <li className="inverter-content__item">Solar Power Priority</li>
                            <li className="inverter-content__item">Combined Mains and Solar Power</li>
                        </ul>
                        <li className="inverter-content__item"><b>Output Modes:</b>Two output modes are available to cater to different needs –
                            Inverting and Mains Power.</li>
                    </ul>
                    <li className="inverter-content__numbered-item">Optimised Solar Charge Module</li>
                    <ul className="inverter-content__list">
                        <li className="inverter-content__item"><b>MPPT Tracking Technology:</b>Incorporates the latest MPPT (Maximum Power Point
                            Tracking) technology for efficient solar energy use.</li>
                        <li className="inverter-content__item"><b>Maximized Energy Harvesting:</b>Quickly tracks the photovoltaic array&#39;s maximum
                            power point under any conditions, ensuring maximum solar panel energy utilization
                            with a wide voltage range.</li>
                    </ul>
                    <li className="inverter-content__numbered-item">AC-DC Charge Module</li>
                    <ul className="inverter-content__list">
                        <li className="inverter-content__item"><b>Precision Control:</b>Employs an advanced control algorithm for fully digital double
                            closed-loop control of voltage and current, ensuring high accuracy.</li>
                        <li className="inverter-content__item"><b>Wide AC Voltage Input Range:</b>Allows stable and reliable battery charging, equipped
                            with comprehensive input/output protection features.</li>
                    </ul>
                    <li className="inverter-content__numbered-item">DC-AC Inverter Module</li>
                    <ul className="inverter-content__list">
                        <li className="inverter-content__item"><b>Intelligent Design:</b>Based on a fully digital intelligent design, this module uses
                            advanced SPWM (Sinusoidal Pulse Width Modulation) technology.</li>
                        <li className="inverter-content__item"><b>Pure Sign Wave Output:</b>Converts DC to AC, making it suitable for a wide range of
                            AC loads, including household appliances, electric tools, and industrial devices.</li>
                        <li className="inverter-content__item"><b>User Friendly Interface:</b>Features a segment LCD display for real-time operational
                            data and system status.</li>
                        <li className="inverter-content__item"><b>Comprehensive Protection:</b>Ensures the safety and stability of the entire system
                            with extensive electronic protection functions.</li>
                    </ul>
                </ol>
            </div>
            <div className="inverter-content__banner">
                <div className="inverter-content__small-wrapper">
                    <p className="inverter-content__important-text">The HF-H series inverter is more than just an energy storage device; it&#39;s a gateway to efficient and
                        reliable solar power management, tailored for a variety of needs and environments. Whether it&#39;s for
                        your home, business, or industrial facility, our inverter ensures that you get the most out of your
                        solar energy system.</p>
                    <div className="inverter-content__small-image-container">
                        <img src={smallInverter} alt="small inverter" className="inverter-content__small-image" />
                    </div>
                </div>

            </div>

        </section>
    );
}

export default InverterContent;