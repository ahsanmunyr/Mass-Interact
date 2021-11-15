import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function Education() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Education"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
                                    
             <div className="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="profile-tab">
             <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425623749!6m8!1m7!1sT_SGz3QSRvYAAAQ1sC1hkA!2m2!1d41.92335109785201!2d-87.65374617825228!3f211.96!4f0!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>DEPAUL UNIVERSITY STUDENT CENTER</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425637808!6m8!1m7!1sCXP3GFi8EIsAAAQfDohZAg!2m2!1d41.89218728052575!2d-87.62938106419318!3f37.55!4f-2.8900000000000006!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>INSTITUTO CERVANTES</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425657544!6m8!1m7!1sN4S5IHHKZq4AAAQn71irbQ!2m2!1d41.89153595307924!2d-87.60891559845425!3f282.53!4f-0.4099999999999966!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>CHICAGO CHILDREN`S MUSEUM</h3>
                              </div>
                           </div>
                    </div>
                </div>
                <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425671245!6m8!1m7!1scfPkahVS_yMAAAQ1sCytwQ!2m2!1d41.92388115969759!2d-87.65634830495208!3f226.97!4f0.980000000000004!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>MCGOWAN SCIENCE AND CHEMISTRY DEPAUL</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425802832!6m8!1m7!1sFwMFZlW4MvwAAAQvxfikcA!2m2!1d41.92413504922321!2d-87.65465921032376!3f94.98!4f3.9000000000000057!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>Arts and Letters Hall</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425820861!6m8!1m7!1s-GO_pO0UtewAAAQvOYl9Hw!2m2!1d42.07562023949038!2d-87.74442209330903!3f284.19!4f-13.569999999999993!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>JOHN T. RICHARDSON LIBRARY</h3>
                              </div>
                           </div>
                    </div>
                </div>
                <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503426135982!6m8!1m7!1st2pgrPHEC8UAAAQ1sC0L1w!2m2!1d41.92358360848421!2d-87.65640711487112!3f17!4f0!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>SCHMITT DEPAUL ACADEMIC CENTER</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425976632!6m8!1m7!1sZdZQH9bRo-4AAAQz9bHeEw!2m2!1d41.87626023541266!2d-87.65221043452709!3f332!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>DEPAUL ARTS AND LETTERS HALL</h3>
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

export default Education;