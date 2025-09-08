import React from "react";
function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h2 className="fs-2 mb-5">Trust with confidence</h2>
          <h3 className="fs-4">Customer-first always</h3>
          <p className="text-muted">
            That is why 1.3+ crore customer trust finverse with 3.5 lakh crores
            of investments.
          </p>
          <h3 className="fs-4">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality app that you use at your pace, the way you like.
          </p>
          <h3 className="fs-4">The Finverse Universe</h3>
          <p className="text-muted">
            Not just an app but the whole ecosystem. our investment in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-4">Do Better with Money</h3>
          <p className="text-muted">
            With initiative like Nudge and kill Switch, we dont just facilitate transactions, but actively help you to do better with your money.
          </p>
       
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }}></img>
          <div className="text-center p-5">
            <a href="" className="p-1" style={{textDecoration:'none'}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href="" className="p-3" style={{textDecoration:'none'}}>Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
