import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function RealEstate() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Real Estate"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
                 
             <div className="tab-pane fade show active" id="realestate" role="tabpanel" aria-labelledby="profile-tab">
             <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503507405268!6m8!1m7!1sUkVlJxJeDs4AAAQvxcqRdQ!2m2!1d26.15015560841055!2d-80.33029403921347!3f220.93!4f-16.86!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>PORTICO BY RICHMAN PROPERTIES</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503507431315!6m8!1m7!1sv7aQQSsxU8UAAAQ1t0Mosw!2m2!1d40.06180968635719!2d-83.03792914228052!3f294.5!4f-7.6200000000000045!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>TAYLOR HOUSE</h3>
                              </div>
                           </div>
                    </div>
                </div>
             </div>
           
                </div>
            </div>
            </div>
        </div>
        {/* <Testimonials/> */}
    </div>
  );
}

export default RealEstate;