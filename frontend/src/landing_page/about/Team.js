import React from "react";


function Team(){
    return(
        <>
                <div className="container">

<div className="row mt-5 mb-5 d-flex justify-content-center gap-3 ">
    <div className="col-4 mt-5 text-center">

        <img src="\images\nithinKamath.jpg" className="mt-5" alt="Nitin Kamath" style={{borderRadius:"50%" , width:"65%"}}/>
        <p className="text-center mt-3">Nithin Kamath</p>
        <p className="mb-3 text-muted text-center">Founder, CEO</p>
    </div>
    <div className="col-4">
                <h3 className="mb-5">People</h3>
                <p className="text-muted mt-3" >Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p className=" text-muted mt-3">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p className="text-muted mt-3">Playing basketball is his zen.</p>
                <p className="text-muted">Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>/<a href="" style={{textDecoration:"none"}}> TradingQnA</a> /<a href="" style={{textDecoration:"none"}}>Twitter</a></p>
    </div>
</div>


</div>

        </>
    )
}
export default Team;