import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container border-top mb-5">
    <div className="row p-5">
        <div className="col-8 p-4">
            <img src={imageURL} style={{width:'80%'}}></img>
        </div>
        <div className="col-4 py-5 mt-5">
            <h2>{productName}</h2>
            <p className="fs-5 mt-4">{productDescription}</p>
            <div className="my-4 ">
            <a className="" href={tryDemo} style={{textDecoration:'none'}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{textDecoration:'none',marginLeft:'50px'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="mt-4"> 
            <a  href={googlePlay} ><img src="media/images/googlePlayBadge.svg"></img></a>
            <a className=""href={appStore} style={{marginLeft:'50px'}}><img src="media/images/appStoreBadge.svg"></img></a>
            </div>
        </div>
    </div>
  </div>;
}

export default LeftSection;
