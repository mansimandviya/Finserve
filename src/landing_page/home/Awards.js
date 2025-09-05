import React from "react";
function Awards() {
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg"></img>
        </div>
        <div className="col-6 p-5 mt-3">
          <h2>Largest stock broker in India</h2>
          <p className="mb-5">
            2+ million Finverse clients contribute to over 15% of all trade
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and options</p>
                </li>
                <li>
                  <p>Commodities and derivatives</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                    <p>Stocks and IPOs</p>
                </li>
                <li>
                    <p>Direct Mutual Funds</p>
                </li>
                <li>
                    <p> Bonds and Government securities</p>
                </li>
              </ul>
            </div>
            <img src="media\images\pressLogos.png" style={{width:"95%"}}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
