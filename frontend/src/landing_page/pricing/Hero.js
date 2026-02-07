import React from "react";


function Hero(){
    return(
        <>
        <div className="container mb-5 mt-5">
            <div className="row text-center mt-5 mb-5">
                <h2>Charges</h2>
                <h4 className="text-muted fw-normal mt-2 mb-5">List of all charges and taxes</h4>


</div>

<div className="row mt-5">
    <div className="col-4 text-center p-5">
        <img src="/images/pricingEquity.svg" style={{width:"60%"}}/>
        <h2>Free equity delivery</h2>
        <p className="text-small text-muted mt-2">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

    </div>
    <div className="col-4 text-center p-5">
        <img src="/images/intradayTrades.svg" style={{width:"60%"}}/>
        <h2>Intraday and F&O trades</h2>
        <p className="text-small text-muted mt-2">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

    </div>
        <div className="col-4 text-center p-5">
        <img src="/images/pricingEquity.svg" style={{width:"60%"}}/>
        <h2>Free direct MF</h2>
        <p className="text-small text-muted mt-2">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

    </div>
</div>
</div>
        
        </>
    )
}
export default Hero;