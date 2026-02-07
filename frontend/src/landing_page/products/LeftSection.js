import React from "react";


function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (

        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL}/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                     <div className="mt-3">
                                         <a href={tryDemo} className='text-decoration-none'>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a  href={learnMore} style={{marginLeft:"50px"}} className='text-decoration-none p-5'> LearnMore <i class="fa-solid fa-arrow-right-long"></i> </a>
                     </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src="/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} className=' p-5'  style={{marginLeft:"50px"}}><img src="/images/appStoreBadge.svg"/></a>
                    </div>
                </div>


            </div>

        </div>



        </>
    )
}

export default LeftSection;















