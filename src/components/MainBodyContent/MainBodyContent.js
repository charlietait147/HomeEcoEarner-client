import renewableHouse from "../../assets/images/renewable-house.png";
import cutCostIcon from "../../assets/icons/cut-cost-icon.png";
import electricityBillIcon from "../../assets/icons/electricity-bill-icon.png";
import upgradeIcon from "../../assets/icons/upgrade-icon.png";
import "./MainBodyContent.scss";
function MainBodyContent() {
  return (
    <section className="main-body">
      <div className="main-body__wrapper">
        <header className="header">
          <div className="header__heading-container">
            <h1 className="header__heading">
              Convert Your Electricity Costs Into Earnings
            </h1>
            <p className="header__tag-line">
              To make money from renewable energy, join the Home EcoEarner
              System, your gate-way to cost-free, income-generating renewable
              energy.
            </p>
            <button className="header__waiting-list-button">
              JOIN WAITING LIST
            </button>
          </div>
          <div className="header__image-container">
            <img
              src={renewableHouse}
              alt="house with renewable energy"
              className="header__image"
            />
          </div>
        </header>
        <section className="benefits">
          <h2 className="benefits__header">What are the benefits?</h2>
          <div className="benefits__card-container">
            <article className="benefits__card">
              <img
                src={cutCostIcon}
                alt="cutting the cost icon"
                className="benefits__card-icon"
              />
              <h3 className="benefits__card-title">No Upfront Cost</h3>
              <p className="benefits__card-description">
                You get to own a home electricity generation system without
                paying a penny upfront.
              </p>
            </article>
            <article className="benefits__card">
              <img
                src={electricityBillIcon}
                alt="electricity bill icon"
                className="benefits__card-icon"
              />
              <h3 className="benefits__card-title">
                No More Electricity Bills
              </h3>
              <p className="benefits__card-description">
                You can enjoy cost-free electricity
                {/* ICON REFERENCE */}
                {/* <a href="https://www.freepik.com/icon/invoice_1956804#fromView=search&term=cross+out+electricity+bills&page=1&position=9">Icon by Icongeek26</a> */}
              </p>
            </article>
            <article className="benefits__card">
              <img src={upgradeIcon} alt="upgrade icon" className="benefits__card-icon benefits__card-icon--modified" />
              <h3 className="benefits__card-title">
                Upgrade for Additional Earnings
              </h3>
              <p className="benefits__card-description">
                You can opt for a cost-free upgrade after 2 years to transform
                your home electricity system into an income stream.
              </p>
              {/* ICON REFERENCE */}
              {/* <a href="https://www.freepik.com/icon/top_8020016#fromView=search&term=upgrade+&page=1&position=0">Icon by Pavani TLN</a> */}
            </article>
            <article className="benefits__card">
            <img
                src={""}
                alt="cash in pocket icon"
                className="benefits__card-icon"
              />
              <h3 className="benefits__card-title">Cash in Your Pocket</h3>
              <p className="benefits__card-description">
              After the upgrade, instead of you paying us, we’ll be paying you.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MainBodyContent;
