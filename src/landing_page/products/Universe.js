import React from "react";
function Universe() {
  return (
    <div className="container border-top mt-5 ">
      <div className="row p-5 text-center">
        <p className="mt-5">
          Want to know more about our technology stack? Check out the
           <a href="" style={{textDecoration:"none"}}> Finverse.tech</a> blog.
        </p>
        <h1 className="mt-5">The  Finverse Universe</h1>
        <p className="">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img className="p-2 m-3 mt-4" src=" media/images/smallcaselogo.png" style={{width:"55%"}}></img>
          <p className="text-small text-muted">Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3">
          <img className="p-2 m-3 mt-4" src="media/images/zerodhafundhouse.png" style={{width:"53%"}}></img>
          <p className="text-small text-muted">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.

</p>
        </div>
        <div className="col-4 ">
          <img className="p-2 m-3 mt-5" src="media\images\sensibull-logo.svg" style={{width:"55%"}}></img>
          <p  className="text-small text-muted p-2">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
        </div>
        <div className="col-4 p-3">
          <img className="p-2 m-3 mt-4" src=" media\images\streakLogo.png" style={{width:"50%"}}></img>
          <p className="text-small text-muted">Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
        </div>
        <div className="col-4 p-3">
          <img className="p-2 m-3 mt-4" src="media\images\dittoLogo.png" style={{width:"45%"}}></img>
          <p className="text-small text-muted">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
        </div>
        <div className="col-4 p-3">
          <img className="p-2 m-3 mt-4" src="media\images\tijori.svg" style={{width:"45%"}}></img>
          <p className="text-small text-muted">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-5" style={{width:"18%", margin: "0 auto"}}>Signup Now</button>
      </div>

    </div>
  );
}

export default Universe;
