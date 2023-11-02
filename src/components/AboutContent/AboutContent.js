import "./AboutContent.scss";
import houses from "../../assets/images/houses.jpg";
import world from "../../assets/images/world-electricity.jpg";
function AboutContent() {
    return (
        <main className="about-content">
            <div className="about-content__banner">
                <span className="about-content__header">ABOUT</span>
            </div>
            <div className="about-content__wrapper">
                <h2 className="about-content__section-heading">What Do We Do?</h2>
                <div className="about-content__header-container">
                    <div className="about-content__image-container">
                        <img src={houses} alt="houses" className="about-content__houses-image" />
                    </div>
                    <div className="about-content__text-container">
                        <h3 className="about-content__section-subheading">We serve:</h3>
                        <ul className="about-content__list">
                            <li className="about-content__item">Homeowners</li>
                            <li className="about-content__item">Tenants</li>
                            <li className="about-content__item">Social housing associations</li>
                            <li className="about-content__item">Landlords</li>
                            <li className="about-content__item">Councils</li>
                            <li className="about-content__item">Pensioners</li>
                            <li className="about-content__item">Retirees</li>
                            <li className="about-content__item">Mortgage prisoners</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-content__container">
                <div className="about-content__wrapper">
                    <h3 className="about-content__section-subheading about-content__section-subheading--contrast">So they can:</h3>
                    <ol className="about-content__numbered-list">
                        <li className="about-content__numbered-item">Generate their own electricity.</li>
                        <li className="about-content__numbered-item">Free themselves from electricity bills.</li>
                        <li className="about-content__numbered-item">Free themselves from future electricity price increases.</li>
                        <li className="about-content__numbered-item">Potentially earn a meaningful income from their home electricity generation.</li>
                        <li className="about-content__numbered-item">All with no up-front cost.</li>
                        <li className="about-content__numbered-item">While doing their bit to help the planet get to Net Zero.</li>
                    </ol>
                </div>
            </div>
            <img src={world} alt="world electricity" className="about-content__world-electricity-image" />
            <div className="about-content__wrapper">
                <h2 className="about-content__section-heading">How Do We Do It?</h2>
            </div>
            <div className="about-content__banner-proposition">
                Our Customer Value Proposition = Give yourself a chance to convert your home electricity
                from a cost into an income.
            </div>
            <div className="about-content__wrapper">
                <h3 className="about-content__section-subheading">If you choose our HomeEco Earner Power System:</h3>
                <ul className="about-content__list">
                    <li className="about-content__item">We will install our Home EcoEarner Power Booster when released.</li>
                    <li className="about-content__item">Current projected timing - 24 months.</li>
                    <li className="about-content__item">At no cost to you.</li>
                    <li className="about-content__item">We will then buy excess electricity from you</li>
                    <li className="about-content__item">No more monthly electricity bills for you.</li>
                    <li className="about-content__item">Nothing more to pay.</li>
                    <li className="about-content__item">Instead of you paying us, we will be paying you.</li>
                    <li className="about-content__item">You will have converted your home electricity from a cost into an income.</li>

                </ul>
            </div>



        </main>

    );
}

export default AboutContent;