import React from "react";



function Hero() {
    return(


        <>
        <div className="container-fluid bg-light mt-5">
    <div className="row mx-5 mt-5">
        <div className="col mx-5 mt-5">
            <div className="d-flex justify-content-between align-center">
            <div><h2>Support Portal </h2></div>
            <div><button className="btn btn-primary text-light p-2"> My Tickets</button></div>
        </div>
        <div className="row">
            <div className="col">
  <div class="container-fluid mt-5 mb-5">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Eg: How do I open my account , How do i activate F&O" aria-label="Search" />
 </form>
  </div>
            </div>

        </div>
        </div>
    </div>
</div>
        
        </>
    )
}

export default Hero;