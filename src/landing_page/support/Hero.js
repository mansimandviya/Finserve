import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="herowrapper">
      <div className="row p-5 mt-5" id="supportwrapper">
        <div className="col">
          <h4>Support Portal</h4>
        </div>
        <div className="col">
          <a
            href=""
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "35px",
            }}
          >
            Track tickets
          </a>
        </div>
      </div>
      <div className="row " id="supportwrapper">
        <div className="col-6 p-5"style={{}}>
          <h3>
            Search for an answer, or browse help topics to create a ticket
          </h3>
          <input className="py-3 my-3"style={{width:"100%", height:"25%", border:"none", borderRadius:"10px"}} placeholder="Eg. How do I activate F&O, why is my order getting rejected.." />
          <ul className="mt-2 " >
          <a href="" style={{textDecoration:"none",color:"white"}}><li>Track account openeing</li> </a>
          <a href=""style={{textDecoration:"none",color:"white"}}><li>Track segment activation </li></a>
          <a href=""style={{textDecoration:"none",color:"white"}}><li>Intraday Margins</li></a>
          <a href=""style={{textDecoration:"none",color:"white"}}><li>Kite user manual</li></a>
          </ul>
        </div>
        <div className="col-6 p-5 " style={{marginRight: "0px"}}>
          <h3>Featured</h3>
          <ul className="" >
          <a href="" style={{textDecoration:"none",color:"white"}}><li>Current Takeovers and delisting</li> </a>
          <a href=""style={{textDecoration:"none",color:"white"}}><li>Latest Intradat leverages - MIS & CO </li></a>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
