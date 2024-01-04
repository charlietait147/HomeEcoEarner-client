import "./BlogContent.scss";
import sunshineImage from "../../assets/images/sunshine.jpg";
function BlogContent() {
    return (
        <section className="blog-content">
            <div className="blog-content__wrapper">
                <h1 className="blog-content__title">Unleash the Power of Your Home: Turn Sunshine into Cash with Solar and Battery Systems!</h1>
                <div className="blog-content__image-container">
                    <img src={sunshineImage} alt="" className="blog-content__image" />
                </div>
                <div className="blog-content__text-section blog-content__text-section--edited">
                    <p className="blog-content__text">In a world where energy costs are soaring and environmental concerns are
                        at the forefront, imagine a solution that not only benefits your wallet but
                        also contributes to a greener planet.</p>
                    <p className="blog-content__text">Welcome to the future of energy independence – where your home
                        becomes a micro power plant, and you are the boss of your electricity!</p>
                </div>

                <h3 className="blog-content__subtitle">The Problem: Soaring Energy Bills and
                    Environmental Worries</h3>
                <div className="blog-content__text-section">
                    <p className="blog-content__text">We have all experienced the sting of rising energy bills, wondering how we
                        can possibly keep up with the costs while still maintaining a comfortable
                        lifestyle.</p>
                    <p className="blog-content__text">Fossil fuels, the primary source of traditional energy, not only burn a hole in
                        our pockets but also contribute significantly to environmental degradation.</p>
                    <p className="blog-content__text">It&#39;s time for a change.</p>
                </div>
                <h3 className="blog-content__subtitle">The Solution: Solar and Battery Systems –
                    Your Ticket to Energy Independence</h3>
                <div className="blog-content__text-section">
                    <p className="blog-content__text">Enter solar and battery systems – a revolutionary solution that not only
                        slashes your electricity bills but also empowers you to be part of the clean
                        energy revolution.</p>
                    <p className="blog-content__text">By harnessing the power of the sun, you can generate your electricity,
                        reducing reliance on the grid and minimizing your carbon footprint.</p>
                </div>
                <h3 className="blog-content__subtitle">Visualize the Benefits: See the Savings,
                    Witness the Impact</h3>
                <ol className="blog-content__numbered-list">
                    <li className="blog-content__numbered-item"><b>Monthly Savings:</b></li><p className="blog-content__text">Picture a scenario - where your monthly electricity bill is significantly
                        reduced, if not eliminated entirely.</p><p className="blog-content__text">The money you save can be redirected towards covering other living costs
                            or even that dream vacation you&#39;ve been planning.</p>
                    <li className="blog-content__numbered-item"><b>Monthly Income:</b></li><p className="blog-content__text">Picture the next scenario - where you don’t have a monthly bill – you have
                        a monthly income.</p><p className="blog-content__text">The money you earn can be redirected towards topping up your pension
                            savings or more meaningful investments.</p>
                    <li className="blog-content__numbered-item"><b>Environmental Impact:</b></li><p className="blog-content__text">Visualize your carbon footprint shrinking as you rely on clean, renewable
                        energy.</p><p className="blog-content__text">Each unit of electricity generated from your solar panels is a step towards a
                            healthier planet.</p>
                    <li className="blog-content__numbered-item"><b>Energy Independence:</b></li><p className="blog-content__text" >Imagine the peace of mind that comes with knowing you have a reliable
                        source of energy, irrespective of external factors.</p><p className="blog-content__text">Power outages become a thing of the past as your home becomes a
                            fortress of energy independence.</p>
                </ol>
                <h3 className="blog-content__subtitle">Call to Action: Transform Your Home into a
                    Powerhouse</h3>
                <ol className="blog-content__numbered-list">
                    <li className="blog-content__numbered-item"><b>Consultation:</b> Reach out to Home EcoEarner by signing up on our
                        Home page for a personalized consultation. Understand the potential
                        savings and benefits tailored to your home&#39;s unique needs.</li>
                    <li className="blog-content__numbered-item"><b>Financing Options:</b> Explore various financing options, including
                        government incentives and tax credits, to make the transition to solar
                        and battery systems more affordable.</li>
                    <li className="blog-content__numbered-item"><b>Installation:</b> Take the plunge and get your solar and battery systems
                        installed. Watch as your home transforms into a sustainable, money-
                        saving powerhouse.</li>
                    <li className="blog-content__numbered-item"><b>Spread the Word:</b> Share your success story with friends and family,
                        inspiring others to join the clean energy revolution.</li>
                </ol>
                <h3 className="blog-content__subtitle">Conclusion: Embrace the Power, Reap the
                    Rewards</h3>
                <div className="blog-content__text-section">
                    <p className="blog-content__text">By turning your home into a micro power plant, you are not just saving
                        money.</p>
                    <p className="blog-content__text">You maybe even earning money and investing in a cleaner, more
                        sustainable future.</p>
                    <p className="blog-content__text">The benefits extend beyond your pocketbook to the global fight against
                        climate change.</p>
                    <p className="blog-content__text">So, why settle for being at the mercy of rising energy costs when you can
                        be the captain of your energy destiny?</p>
                    <p className="blog-content__text">Make the switch, embrace the power, and let the sunshine turn into cash in
                        your hands!</p>
                </div>

            </div>
        </section>

    );
}

export default BlogContent;