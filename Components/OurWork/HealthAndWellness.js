import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function HealthAndWellness() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Health And Wellness"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
               
             <div className="tab-pane fade show active" id="health" role="tabpanel" aria-labelledby="profile-tab">
           
                <div className="row py-3">
                   <div className="col-lg-4 my-2">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503423899379!6m8!1m7!1sO2369teECvwAAAQvPB9esg!2m2!1d42.28794402585311!2d-88.9541532785417!3f145!4f0!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>ROSECRANCE GRIFFIN WILLIAMSON CAMPUS</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503423526765!6m8!1m7!1s22IvG4vcFIAAAAQqS0fOzg!2m2!1d41.9133572629786!2d-87.65676787429197!3f77.08!4f-16.090000000000003!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>GOOSE ISLAND CROSSFIT</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503423968579!6m8!1m7!1sAuo8rkhYVQQAAAQvvU01HA!2m2!1d32.30976446607249!2d-110.8913777293296!3f57.5!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>MASSAGE ENVY</h3>
                              </div>
                           </div>
                    </div>
                </div>
                <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503424013338!6m8!1m7!1sWK1-oC3uDuAAAAQ1mHAfrA!2m2!1d27.87025860790061!2d-82.70686298441376!3f297.05!4f-2.5900000000000034!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>D1 SPORTS TRAINING CLEARWATER</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503423609648!6m8!1m7!1sZc1aXqE_UowAAAQo8YzWUQ!2m2!1d39.94970580965843!2d-86.13678139836884!3f151.24!4f-16.019999999999996!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>MONON COMMUNITY CENTER</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503423635252!6m8!1m7!1sF%3A-GHaXPzqD9jU%2FWWzaZEusk3I%2FAAAAAAADHFw%2FG_lhw5AZlP40digULNbqcXWptGN28JqnwCLIBGAYYCw!2m2!1d33.453396636845!2d-111.68787261618!3f52.15!4f-10.930000000000007!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>MASSAGE ENVY MESA</h3>
                              </div>
                           </div>
                    </div>
                </div>
                <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503423656374!6m8!1m7!1sF%3A-eGkcpCPmcP4%2FWWzYCQyG0-I%2FAAAAAAADH0Y%2F1TBONJWxBdodUzMkudBcd28wW0LyIJQFwCLIBGAYYCw!2m2!1d33.58355129868!2d-111.89294803213!3f17.02!4f-9.920000000000002!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>MASSAGE ENVY SHEA</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!4v1581322891737!6m8!1m7!1sCAoSLEFGMVFpcE0wTlBuU2pzS3p1V2ROVDBHNVRWRHJGVFRrZkt1YnJ4WktDc1VG!2m2!1d41.748362253192!2d-88.175143411762!3f281.96!4f-6.280000000000001!5f0.40251797913493803" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>Naper Grove Vision Care</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!4v1581322993850!6m8!1m7!1sCAoSLEFGMVFpcFBVNGVJaFNQT2FmT2pWcFFlVjY2RmtVOXZQSTVCdGNvMU0zVjBN!2m2!1d37.851162996263!2d-122.03399537173!3f143.49!4f-0.9699999999999989!5f0.5058499090264086" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>Poplar Spectacles</h3>
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

export default HealthAndWellness;