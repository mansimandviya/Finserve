import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <h1 className="fs-3 px-5 mt-5 ">To create a ticket, select a relevant topic</h1>
      <div className="row mt-3 p-5" style={{lineHeight:"2.0em"}}>
        <div className="col-4 ">
          <h5> <i class="fa fa-plus-circle" aria-hidden="true"></i> Account opening</h5>
          <ul>
            <a href="" style={{textDecoration:"none"}}><li>Resident individual</li></a>
            <a href="" style={{textDecoration:"none"}}><li>Minor</li></a>
            <a href="" style={{textDecoration:"none"}}><li>Non Resident Indian (NRI)</li></a>
            <a href="" style={{textDecoration:"none"}}><li>Company, Partnership, HUF and LLP</li></a>
            <a href="" style={{textDecoration:"none"}}><li>Glossary</li></a>
          </ul>
        </div>
        <div className="col-4">
        <h5> <i class="fa fa-user" aria-hidden="true"></i> Your Finverse Account</h5>
        <ul>
          <a href="" style={{textDecoration:"none"}}><li>Your Profile</li></a>
          <a href="" style={{textDecoration:"none"}}><a href="" style={{textDecoration:"none"}}><li>Account modification</li></a></a>
          <a href="" style={{textDecoration:"none"}}><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
          <a href="" style={{textDecoration:"none"}}><li>Nomination</li></a>
          <a href="" style={{textDecoration:"none"}}><li>Transfer and conversion of securities</li></a>
        </ul>
        </div>
        <div className="col-4">
        <h5><i class="fa fa-bandcamp" aria-hidden="true"></i> Kites</h5>
        <ul>
          <a href="" style={{textDecoration:"none"}}><li>IPO</li></a>
          <a href="" style={{textDecoration:"none"}}><li>Trading FAQs</li></a>
          <a href="" style={{textDecoration:"none"}}><li>Margin Trading Facility (MTF) and Margins</li></a>
          <a href="" style={{textDecoration:"none"}}><li>Charts and orders</li></a>
          <a href="" style={{textDecoration:"none"}}><li>Alerts and Nudges</li></a>
          <a href="" style={{textDecoration:"none"}}><li>General</li></a>
        </ul>
        </div>
        <div className="col-4 mt-5">
        <h5><i class="fa fa-inr" aria-hidden="true"></i> Funds</h5>
        <ul>
            <a href="" style={{textDecoration:"none"}}><li>Add money</li></a>
            <a href="" style={{textDecoration:"none"}}><li>Withdraw money</li></a>
            <a href="" style={{textDecoration:"none"}}><li>Add bank accounts</li></a>
            <a href="" style={{textDecoration:"none"}}><li>eMandates</li></a>
            </ul>
            </div>
        <div className="col-4 mt-5">
        <h5><i class="fa fa-codepen" aria-hidden="true"></i> Console</h5>
        <ul>
           <a href="" style={{textDecoration:"none"}}><li> Portfolio</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Corporate actions</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Funds statement</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Reports</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Profile</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Segments</li></a>
           </ul>
           </div>
        <div className="col-4 mt-5">
        <h5><i class="fa fa-money" aria-hidden="true"></i> Coin</h5>
        <ul>
           <a href="" style={{textDecoration:"none"}}><li> Mutual funds</li></a>
           <a href="" style={{textDecoration:"none"}}><li> National Pension Scheme (NPS)</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Fixed Deposit (FD)</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Features on Coin</li></a>
           <a href="" style={{textDecoration:"none"}}><li> Payments and Orders</li></a>
           <a href="" style={{textDecoration:"none"}}><li> General</li></a>
           </ul>
           </div>
      </div>
    </div>
  );
}

export default CreateTicket;
