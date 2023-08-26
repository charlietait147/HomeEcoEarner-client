import renewableHouse from "../../assets/images/renewable-house.png"
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
                To make money from renewable energy, join the Home EcoEarner System,
                your gate-way to cost-free, income-generating renewable energy.
                </p>
                <button className = "header__waiting-list-button">
                Join Waiting List
                </button>
          </div>
          <div className="header__image-container">
            <img src={renewableHouse} alt="house with renewable energy" className="header__image" />
          </div>
        </header>
      </div>
    </section>
  );
}

export default MainBodyContent;
