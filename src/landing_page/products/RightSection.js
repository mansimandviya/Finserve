import React from "react";
function RightSection({imageURL, productName, productDescription, link, linkText}) {
  return (
    <div className="container border-top mt-5 ">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5 ">
          <h2 className="mt-5" style={{}}>{productName}</h2>
          <p className="">{productDescription}</p>
          <div className=" ">
            <a
                className="fs-6"
              href={link}
              style={{ textDecoration: "none" }}
            >
              {linkText}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img className="" src={imageURL} style={{width:"120%"}} ></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
