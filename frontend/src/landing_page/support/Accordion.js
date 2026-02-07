import React from "react";



function Accordion(){
    return(
        <>
        <div className="container mt-5 bg-white mb-5">
            <div className="row">
                <div className="col-8">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       <i class="fa-solid fa-circle-plus px-5"></i> Account Opening 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
<ul>
    <li><a href="" style={{textDecoration: "none"}}>Resident individual</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Minor</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Non Resident Indian (NRI)</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Company , Partnership , HUF and LLP</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Glossary</a></li>

</ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <i class="fa-solid fa-circle-user px-5"></i> Your Zerodha Account
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        <ul>
    <li><a href="" style={{textDecoration: "none"}}>Your Profile</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Account Modification</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Non Resident Indian (NRI)</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Nomination
Transfer and conversion of securities</a></li>

</ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <i class="fa-brands fa-fly px-5 "></i> Kite
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
       <ul>
    <li><a href="" style={{textDecoration: "none"}}>IPO
</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Trading FAQs</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Alerts and Nudges</a></li>
    <li><a href="" style={{textDecoration: "none"}}>
General</a></li>
    <li><a href="" style={{textDecoration: "none"}}>Glossary</a></li>
</ul>
      </div>
    </div>
  </div>
</div>
                </div>
                <div className="col-4">
                    <div className="row px-5">
                        <div className="col-1  bg-warning "></div>
                        <div className="col-10 bg-tertiary">
                            <ul>
                                <li><a href="">Special live trading session on Sunday , February 1,2026</a></li>
    <li><a href="">surveillance measure on scrips-February 2026</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}


export default Accordion;