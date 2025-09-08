import React from 'react'
import { Link } from 'react-router-dom';
function Team() {
    return ( <div className="container ">
        <div className="row p-5 mb-5 mt-3 border-top">
          <h1 className="text-center ">
            People
          </h1>
        </div>
        <div className="row text-muted" style={{lineHeight:'2', fontSize:"1.2em"}}>
          <div className="row">
            <div className="col text-center">
              <img className="mb-5"src='media/images/nithinKamath.jpg' style={{borderRadius: '100%', width:"45%"}}></img>
              <h5>Nithin Kamath</h5>
              <h6>Founder, CEO</h6>
            </div>
            <div className="col p-3">
              <p className=" ">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
              </p>
              <p className=" ">
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p className=" ">
              Playing basketball is his zen.
              </p>
              <p className=" ">
              Connect on <Link to='/' style={{textDecoration:"none"}}>HomePage</Link> / <a href=''style={{textDecoration:"none"}}>TradingQnA</a> / <a href=''style={{textDecoration:"none"}}>Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div> );
}

export default Team;