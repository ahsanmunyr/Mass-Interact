
import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function Auto() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Auto"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
        
                <div className="tab-pane fade show active" id="auto" role="tabpanel" aria-labelledby="profile-tab">
           
                  <div className="row py-3">
                     <div className="col-lg-4 my-2">
                        <div className="panorama transform">
                           <Iframe src="https://www.google.com/maps/embed?pb=!4v1599132539973!6m8!1m7!1sCAoSLEFGMVFpcFBJeDdxVkk2Vzd4UUt0Rm00elVuMGpWQU9tUlluX0RnbzRJNFJh!2m2!1d42.273217!2d-87.87346869999999!3f160!4f20!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                           <div className="image-text">
                              <h3>McLAREN CHICAGO SHOWROOM</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 my-2">
                              <div className="panorama transform">
                                 <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503421087770!6m8!1m7!1s3OtRrMnRdGoAAAQo8LXzVQ!2m2!1d41.87271461982603!2d-87.80409055765858!3f304.48!4f-4.780000000000001!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                                 <div className="image-text">
                                    <h3>OAKBROOK TOYOTA</h3>
                                 </div>
                              </div>
                     </div>
                     <div className="col-lg-4 my-2">
                              <div className="panorama transform">
                                 <Iframe src="https://www.google.com/maps/embed?pb=!4v1581322388170!6m8!1m7!1sCAoSLEFGMVFpcFBrbEE1cEQxSEhOSVIwTXRMOEQ2VG9OUF8zeGRjdWxiNlNCVnNM!2m2!1d29.638075468761!2d-98.618858986736!3f75.48!4f-12.069999999999993!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                                 <div className="image-text">
                                    <h3>Audi</h3>
                                 </div>
                              </div>
                     </div>
                  </div>
                  <div className="row py-3">
                     <div className="col-lg-4 my-2 ">
                        <div className="panorama transform">
                           <Iframe src="https://www.google.com/maps/embed?pb=!4v1581322456224!6m8!1m7!1sCAoSLEFGMVFpcE9mbkhSaXZtVVpIYmE5Y1lLaWJnaERuSE1PeHZ2d3E0eHREcmFJ!2m2!1d29.676881868779!2d-95.421630293728!3f198.85!4f-4.659999999999997!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                           <div className="image-text">
                              <h3>Central Houston Nissan</h3>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 my-2">
                              <div className="panorama transform">
                                 <Iframe src="https://www.google.com/maps/embed?pb=!4v1581322555338!6m8!1m7!1sCAoSLEFGMVFpcFBoZS1tRTJzVk9maWdyV2NEQXRDTUhaYmFqbUYwd2hKZWZpUHNy!2m2!1d32.902890794553!2d-96.768358882715!3f79.5!4f-4.25!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                                 <div className="image-text">
                                    <h3>Land Rover Dallas</h3>
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

export default Auto;