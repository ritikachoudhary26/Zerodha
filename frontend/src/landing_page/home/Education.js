import React from 'react';

function Education () {
    return (  
            <div className="container mt-3">
              <div className="row">
                <div className="col-6">
                    <img src='/images/education.svg' style={{width: "70%"}}/>
                </div>

                <div className="col-6">
                  <h1 className=" mt-5 mb-3 fs-2">Unbeatable pricing</h1>
          <p className='mt-3'>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-decoration-none">
            Versity<i class="fa-solid fa-arrow-right-long mx-2"></i>
          </a>
          <p className='mt-3'>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a href="" className="text-decoration-none">
            TradingQ&A<i class="fa-solid fa-arrow-right-long mx-2"></i>
          </a>
                </div>
              </div>
            </div>
        
    );
}

export default Education ;