import "./FAQContent.scss";
import { useState } from "react";
// import plus from "../../assets/icons/plus.svg";


function FAQContent() {
  const [faqs] = useState([
    {
      id: 1,
      question: "What is it?",
      answer:
        "Home EcoEarner Power System is home power generation system designed to provide your home with the average UK electricity use of 10.3 kWh / day.",
      expanded: false,
    },
    {
      id: 2,
      question: "What does it do?",
      answer: [
        "Enables you to generate 10.3 kWh / day with no electricity bills to pay.",
        "10.3 kWh / day provides all the power used by the average UK home for daily living needs.",
      ],
      expanded: false,
    },
    {
      id: 3,
      question: "What’s in it for me?",
      answer: [
        "You can own your own electricity power generation system, right there in your own home",
        "No more electricity bills to pay",
        "Freedom from future electricity price increases",
        "Spread the cost out over 8 years",
        "Instead of dead money paying for your electricity – use that money to pay off your own electricity generation system",
        "An asset you can own",
        "No extra cash outlay",
        "You get to swap your average monthly electricity bill for monthly equipment costs",
        "Subject to credit approval",
      ],
      expanded: false,
    },
    {
      id: 4,
      question: "Will it fit my home?",
      answer: [
        "We will need to assess the energy resource available at your home.",
        "Factors affecting the power able to be generated by the system include solar resource at the site, sun hours, aspect of the land (does it face north, south, east or west?), nature of the roof (flat, peaked, does it face north, south,east or west?), the aspect and shape of the building, wind resource at the site, the impact of adjacent structures and trees, etc.",
        "Our experienced design team will assess the characteristics of your home and design the system to optimize the power available based on the features specific to your home.",
      ],
      expanded: false,
    },
    {
      id: 5,
      question: "Do I need planning permission?",
      answer: [
        "In most cases the answer is no, when considering rooftop solar.",
        "Listed buildings and those in a conservation area may require planning permission",
      ],
      expanded: false,
    },
    {
      id: 6,
      question: "Are there any tax incentives?",
      answer: [
        "For domestic dwellings, the main government incentives are provided by way of grants or subsidies. These may vary depending on your circumstances and location",
        "Where you operate a small business from your home, there may be some tax benefits available. In the March 2023 budget, the government amended the rules so that businesses can claim a 100% first year capital allowance on the cost of purchasing and installing solar panels, meaning part of the cost of the installation may be able to be deducted from taxable profit in the first year.",
      ],
      expanded: false,
    },
    {
      id: 7,
      question: "What if I am a tenant and only have a short-term lease?",
      answer: [
        "It should still make sense to install the system.",
        "Most landlords are looking to improve their Energy Performance Certificate ratings and will need to eventually meet the MEES rules. So, they should be supportive of the installation.",
        "We can speak with your landlord if desired.",
      ],
      expanded: false,
    },
    {
      id: 8,
      question:
        "Can I use Home EcoEarner Power System in my small business office?",
      answer: [
        "Yes",
        "Home EcoEarner has been designed for both home and business use in small offices, shops, workshops, storage facilities, etc.",
      ],
      expanded: false,
    },
    {
      id: 9,
      question: "Will it affect my credit rating?",
      answer: [
        "Each person’s credit rating is personal to their circumstances.",
        "The answer to this question therefore depends on personal circumstances.",
        "Absent any specific issues with your credit rating, on balance, the answer should be “no”.",
        "Under the Home EcoEarner Power System offer, you are just swapping payments you now make for your electricity bills for the cost of purchasing an asset.",
        "And you will no longer be exposed to electricity price increases.",
        "There should be no negative impact on your credit rating.",
        "It may be possible that it might improve your credit rating.",
      ],
      expanded: false,
    },
    {
      id: 10,
      question:
        "Can Home EcoEarner help meet the Earnings Performance Certificate Certificate (EPC) or Minimum Energy Efficiency Standard (MEES) requirements?",
      answer: "Yes.",
      expanded: false,
    },
    {
      id: 11,
      question: "Can I still charge my electric vehicle at home?",
      answer: [
        "Yes.",
        "You can still charge your electric vehicle at home.",
        "You can charge your EV at any time night or day and where it is charged from your Home EcoEarner Power System, there is no cost.",
        "Even if you go over the average UK daily power consumption rate of 10.3 kWh / day, and tap into the backup grid power, that should still provide cost savings for you.",
        "It should be significantly cheaper than charging it under your current electricity cost.",
        "It should be significantly cheaper than charging it at motorway charging stations.",
      ],
      expanded: false,
    },
  ]);

  const [faqData] = useState([
    {
      id: 12,
      question: "What is it?",
      answer: [
        "Home EcoEarner Power Booster is a proprietary energy generation system designed to enable a significant increase in power output from a domestic power generation system.",
        "Home EcoEarner Power Booster is intended to enable homeowners to convert a cost into a meaningful income.",
        "Home EcoEarner Power Booster will only be offered as an upgrade to the Home EcoEarner Power System.",
        "Multiple new green technologies are being developed.",
        "Some are patented already and are now moving to the product design stage.",
        "Some are in the Research and Development phase or early product development stage.",
        "Once installed, you will have a solar, battery, inverter, controller, and wind turbine system for your home + our Power Booster.",
        "And you will still have grid power access as a backup.",
        "You will become a seller of power to the grid rather than a buyer of power from the grid, so you will likely never need grid power again. But we keep it there as a safety measure to provide you with the comfort of knowing that you have that backup should you need it.",
      ],
    },
    {
      id: 13,
      question: "What does it do?",
      answer:
        "Home EcoEarner Power Booster is designed to enable a significant increase in power output from a domestic power generation system such as to enable to the homeowner to generate enough excess power as to convert a cost into a meaningful income.",
    },
    {
      id: 14,
      question: "What’s in it for me?",
      answer: [
        "Cost-Free Upgrade",
        "Enables you to convert your home electricity from a cost into an income",
        "If you choose our Home EcoEarner Power System now: ",
        "We will install our Home EcoEarner Power Booster on release",
        "Current target release date 24 months",
        "At no cost to you",
        "We then buy excess electricity from you",
        "No more monthly bills",
        "Nothing more to pay",
        "Instead of you paying us, we will be paying you.",
      ],
    },
    {
      id: 15,
      question: "How long before Home EcoEarner Power Booster is available?",
      answer: [
        "Current target date for release is Q1 2026.",
        "That will depend on the rate of progress of the Research and Development and product development in the intervening period.",
      ],
    },
    {
      id: 16,
      question: "Do I need planning permission?",
      answer:
        "There should be no extra planning permission needed for Home EcoEarner Power Booster.",
    },
    {
      id: 17,
      question: "What is a PPA?",
      answer: [
        "A Power Purchase Agreement (PPA) is an agreement under which we will purchase the excess power from you.",
        "The PPA you enter into with us will be exclusive to us.",
        "Entry into an exclusive PPA with us is needed as we are not charging you anything for the supply and installation of our Home EcoEarner Power Booster equipment.",
        "We buy the excess power from you.",
        "We then sell that excess power to electricity distributors. That is how we recover that cost.",
      ],
    },
    {
      id: 18,
      question: "How do I earn income from it?",
      answer: [
        "Under the PPA, we pay you for the excess electricity that your Home EcoEarner Power Booster system produces.",
        "Payments will be made monthly based on the amount of excess electricity your Home EcoEarner Power Booster system produces.",
        "Exactly how much your Home EcoEarner Power Booster system produces may be affected by the solar and wind resources at your site.",
        "We will give you an estimate of the likely range of power output at your site and potential income earnings as part of the upgrade at the time.",
      ],
    },
    {
      id: 19,
      question: "Can I still charge my electric vehicle at home?",
      answer:
        ["Yes.", "You can still charge your electric vehicle at home.", "Home EcoEarner Power Booster will be designed to provide all the power you need to charge your EV.", "We intend to offer a heavily discounted rate for any EV charging that takes you up over the average UK daily power usage rate of 10.3 kWh / day.", "We may offer an even lower rate for any night-time EV charging.", "Even if you go over the average UK daily power consumption rate of 10.3 kWh / day, and tap into the excess power produced by Home EcoEarner Power Booster, that should still provide cost savings for you.", "It should be significantly cheaper than charging it under your current electricity arrangements.", "It should be significantly cheaper than charging it at motorway charging stations."],
    },

  ]);

  // const toggleFAQ = (id) => {
  //   setFaqs((prevFaqs) =>
  //     prevFaqs.map((faq) =>
  //       faq.id === id ? { ...faq, expanded: !faq.expanded } : faq
  //     )
  //   );
  // };

  // const toggleFAQData = (id) => {
  //   setFaqData((prevFaqData) =>
  //     prevFaqData.map((singleFaq) =>
  //       singleFaq.id === id
  //         ? { ...singleFaq, expanded: !singleFaq.expanded }
  //         : singleFaq
  //     )
  //   );
  // };
  return (
    <main className="faq">
      {/* <div className="faq__banner">
        <span className="faq__header">FAQs</span>
      </div> */}
      <div className="faq__wrapper">
        <h2 className="faq__section-heading">Home EcoEarner Power System</h2>
        <div className="faq__container">
          {faqs.map((faq) => {
            return (
              <div className="faq__item" key={faq.id}>
                <div
                  className="faq__question-box"
                >
                  <p className="faq__question-text">{faq.question}</p>
                  <div className="faq__icon-container">
                    {/* <img
                      src={plus}
                      alt="plus"
                      className={
                        faq.expanded
                          ? "faq__icon faq__icon--cross"
                          : "faq__icon"
                      }
                    /> */}
                  </div>
                </div>
                <div className="faq__answer">
                  {Array.isArray(faq.answer) ? (
                    <ul className="faq__list">
                      {faq.answer.map((item, index) => (
                        <li className="faq__list-item" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="faq__list">
                      <li className="faq__list-item">{faq.answer}</li>
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <h2 className="faq__section-heading faq__section-heading--bottom">
          Home EcoEarner Booster System
        </h2>
        <div className="faq__container">
          {faqData.map((singleFaq) => {
            return (
              <div className="faq__item" key={singleFaq.id}>
                <div
                  className="faq__question-box faq__question-box--bottom"
                // onClick={() => toggleFAQData(singleFaq.id)}
                >
                  <p className="faq__question-text">{singleFaq.question}</p>
                  <div className="faq__icon-container faq__icon-container--unfill">
                    {/* <img
                      src={plus}
                      alt="plus"
                      className={
                        singleFaq.expanded
                          ? "faq__icon faq__icon--cross"
                          : "faq__icon"
                      }
                    /> */}
                  </div>
                </div>
                <div className="faq__answer faq__answer--bottom">
                  {Array.isArray(singleFaq.answer) ? (
                    <ul className="faq__list">
                      {singleFaq.answer.map((item, index) => (
                        <li
                          className="faq__list-item faq__list-item--bottom"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="faq__list">
                      <li className="faq__list-item faq__list-item--bottom">
                        {singleFaq.answer}
                      </li>
                    </ul>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default FAQContent;
