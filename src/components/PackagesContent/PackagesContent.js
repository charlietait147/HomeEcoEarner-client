import "./PackagesContent.scss";
function PackagesContent() {
    return (
        <main className="packages">
            <div className="packages__wrapper">
                <h1 className="packages__title">Customer Packages</h1>
                <div className="packages__container">
                    <article className="packages__card">
                        <h3 className="packages__subtitle"><strong>Basic Package</strong> - Solar</h3>
                        <ul className="packages__list">
                            <li className="packages__item">2.7kW PV solar panels + inverter + controller</li>
                            <li className="packages__item">No upfront cost</li>
                            <li className="packages__item">Own your own power system</li>
                            <li className="packages__item">No more electricity bills</li>
                        </ul>
                    </article>
                    <article className="packages__card">
                        <h3 className="packages__subtitle"><strong>Premium Package</strong> - Power System - Solar + Battery</h3>
                        <ul className="packages__list">
                            <li className="packages__item">Everything in Basic plus</li>
                            <li className="packages__item">10.2kW battery</li>
                            <li className="packages__item">No upfront cost</li>
                            <li className="packages__item">We buy any excess electricity</li>
                        </ul>
                    </article>
                    <article className="packages__card">
                        <h3 className="packages__subtitle"><strong>Hybrid Package</strong> - Solar + Battery + Wind</h3>
                        <ul className="packages__list">
                            <li className="packages__item">Everything in Premium plus</li>
                            <li className="packages__item">2 x Mini wind turbines</li>
                            <li className="packages__item">Submission for any planning</li>
                            <li className="packages__item">No upfront cost</li>
                        </ul>
                    </article>
                    <article className="packages__card">
                        <h3 className="packages__subtitle"><strong>Ultimate Package</strong> – Solar + Battery + Wind + Power Booster</h3>
                        <ul className="packages__list">
                            <li className="packages__item">Everything in Hybrid plus</li>
                            <li className="packages__item">Power Booster - enables you to generate excess electricity *</li>
                            <li className="packages__item">Gives you priority access to our new technology</li>
                            <li className="packages__item">No up-front cost</li>
                            <li className="packages__item">Cost-free upgrade for Basic, Premium and Hybrid packages</li>
                            <li className="packages__item">Convert a cost into an income</li>
                            <li className="packages__item">Potential to earn a meaningful regular income</li>
                        </ul>
                    </article>
                </div>
            </div>
        </main>
    );
}

export default PackagesContent;