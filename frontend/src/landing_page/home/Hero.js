import React from 'react';

function Hero () {
    return (  
           <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src ='/images/homeHero.png' alt="Hero image" className='mb-5'/>
                <h1 className='mt-5'>
                    Invest in everything .
                </h1>
                 <p>
Online platform to invest in stocks , derivatives , mutual funds .
                 </p>
                 <button className='btn btn-primary p-1 fs-5 mb-5' style={{width:"20%" , margin: "0 auto "}}>Signup now</button>
            </div>
           </div>
    );
}

export default Hero ;