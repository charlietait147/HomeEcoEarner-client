import "./PamphletContent.scss";
import homeEcoEarnerSnippet from "../../assets/images/home-ecoearner-snippet.jpg";
import roryBio from "../../assets/images/rory-bio.png";
import davidBio from "../../assets/images/David-Sheldon-bw.jpg";
function PamphletContent() {
    return (
        <section className="pamphlet">
            <div className="pamphlet__wrapper">
                <h1 className="pamphlet__title">Energy Freedom at
                    Your Fingertips!</h1>
                <h3 className="pamphlet__claimer">Are you tired of high energy bills?</h3>
                <h3 className="pamphlet__claimer">Looking for a solution that benefits both your
                    wallet and the environment?</h3>
                <h3 className="pamphlet__claimer">Why not convert your electricity from a cost
                    into an income?</h3>
                <h3 className="pamphlet__claimer">Look no further!</h3>
                <div className="pamphlet__image-container">
                    <img src={homeEcoEarnerSnippet} alt="" className="pamphlet__image" />
                </div>
                <div className="pamphlet__main-text-section">
                    <p className="pamphlet__main-text">Imagine having a Home EcoEarner Power System
                        installed in your home. With no upfront or net cost
                        to you, this revolutionary system offers a host of
                        benefits you won’t want to miss.</p>
                </div>
                <h4 className="pamphlet__subtitle">Cost-Free Electricity</h4>
                <div className="pamphlet__text-section">
                    <p className="pamphlet__text">
                        Say goodbye to soaring energy bills! Home EcoEarner allows you
                        to generate cost-free electricity, up to the average annual UK
                        household usage. Your home will be powered by clean, renewable
                        energy saving you money while reducing your carbon footprint.
                    </p>
                </div>
                <h4 className="pamphlet__subtitle">Extra Income</h4>
                <div className="pamphlet__text-section">
                    <p className="pamphlet__text">
                        But that’s not all! With Home EcoEarner, you can also earn an extra
                        income. By harnessing the power of renewable energy, you can
                        generate surplus electricity that can be sold back to the grid. Watch
                        your savings grow while you contribute to a sustainable future.
                    </p>
                </div>
                <h4 className="pamphlet__subtitle">About Us</h4>
                <div className="pamphlet__section-container">
                    <div className="pamphlet__bio-image-container">
                        <img src={davidBio} alt="david sheldon headshot" className="pamphlet__bio-image pamphlet__bio-image--modified" />
                        <p className="pamphlet__bio-image-label pamphlet__bio-image-label--left">David Sheldon</p>
                        <img src={roryBio} alt="rory tait headshot" className="pamphlet__bio-image" />
                        <p className="pamphlet__bio-image-label pamphlet__bio-image-label--right">Rory Tait</p>
                    </div>
                    <div className="pamphlet__text-section pamphlet__text-section--flex ">
                        <p className="pamphlet__text">
                            Home EcoEarner, co-founded by Rory Tait
                            and David Sheldon, pioneers renewable
                            energy solutions. Rory, with 30 years in
                            energy law, and David, with expertise in
                            finance and renewables, lead the charge
                            in transforming homes into sustainable
                            power hubs. With Rory’s Renewable
                            Energy Association (REA) background
                            and David’s business acumen, they
                            empower households and promote clean
                            tech adoption.
                        </p>
                    </div>
                </div>
                <div className="pamphlet__main-text-section pamphlet__main-text-section--border">
                    <p className="pamphlet__main-text">
                        Ready to take control of your energy costs and make a positive impact
                        on your finances and the environment? Contact us today to learn
                        more about Home EcoEarner and how you can benefit from cost-free
                        electricity and an extra income.
                    </p>
                </div>
                <small className="pamphlet__terms">*Terms and conditions apply. Actual savings
                    and income may vary based on individual
                    circumstances. Home EcoEarner does not
                    guarantee specific financial outcomes.</small>
            </div>
        </section>
    );
}

export default PamphletContent;