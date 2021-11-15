import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function Recreation() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Recreation"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
                 
                <div className="tab-pane fade show active" id="recreation" role="tabpanel" aria-labelledby="profile-tab">
             <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425109587!6m8!1m7!1s_sjqZ1SlfdkAAAQvxYs1pw!2m2!1d32.76683953574402!2d-96.79490138423694!3f208.94!4f0!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>SPARK! DALLAS</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425119836!6m8!1m7!1sltEBNEqm1tsAAAQvxaekPg!2m2!1d41.88869493603403!2d-87.62846588788489!3f48!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>SPIN CHICAGO</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!4v1599215689657!6m8!1m7!1sCAoSLEFGMVFpcFAtQldYS19fdHZsb0Y4TUxTLXpOSFhtMy0tdjIxajJ5WHdvc0ZL!2m2!1d38.992310916349!2d-92.322045105674!3f160!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>SKY ZONE TRAMPOLINE PARK</h3>
                              </div>
                           </div>
                    </div>
                </div>
               <div className="row py-3">
                <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425159886!6m8!1m7!1syCweR9OBTtoAAAQvOzhR-Q!2m2!1d41.94511609491336!2d-87.71051210147294!3f215.95!4f1.9000000000000057!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>FIRST ASCENT AVONDALE</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425203744!6m8!1m7!1sEE6oga1aIF4AAAQzO0cDDw!2m2!1d42.00702183832804!2d-87.98863756598223!3f33.78!4f3.8499999999999943!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>AUDOBON SKATE PARK</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503425222365!6m8!1m7!1sF%3A-glk-fngpphw%2FWWztBjQuWLI%2FAAAAAAADHJQ%2Fy25ommbhYLsbIMRJZ73-pHjN4bLuV1PWgCLIBGAYYCw!2m2!1d32.796705198702!2d-96.828963526212!3f343.2!4f-1.8400000000000034!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>PETICOLAS BREWING</h3>
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

export default Recreation;