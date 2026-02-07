import React from "react";

function Universe({ imageURL, content }) {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row text-center mt-3 mb-3">
        <div className="col-4 p-5">
          <img src="/images/zerodhaFundhouse.png" style={{width:"50%"}}/>
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/sensibullLogo.svg" style={{width:"50%"}}/>
          <p className="text-small text-muted mt-2">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/goldenpiLogo.png"  style={{width:"50%"}}/>
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>
      <div className="row text-center mt-3 mb-5">
        <div className="col-4 p-5">
          <img src="/images/streakLogo.png" style={{width:"50%"}}/>
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/smallcaseLogo.png" style={{width:"50%"}} />
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="/images/dittoLogo.png " style={{width:"30%"}} />
          <p className="text-small text-muted mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
