import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function Retail() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Retail"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
                
                <div className="tab-pane fade show active" id="retail" role="tabpanel" aria-labelledby="contact-tab">
             
             <div className="row py-3">
                   <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422688213!6m8!1m7!1stGu_8FMSPlIAAAQvxcUZrg!2m2!1d40.7398248641362!2d-73.98989503452827!3f16.39!4f-19.069999999999993!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>ETHAN ALLEN NYC</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422704800!6m8!1m7!1s-AezamVVCX0AAAQvO-9I0A!2m2!1d44.98513055687691!2d-93.27190615674976!3f281.22!4f-3.700000000000003!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>MARTIN PATRICK 3</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422722488!6m8!1m7!1sJumuZ6s0P48AAAQvwspuOQ!2m2!1d41.70483483348449!2d-87.6819318263976!3f281.54!4f-2.319999999999993!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>THE QUILTER`S TRUNK</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422753356!6m8!1m7!1sKXLt53u0WHkAAAQqmQyUNA!2m2!1d41.92802071683982!2d-87.70551037638597!3f99!4f0!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>ARCHITECTUAL ARTIFACTS INC</h3>
                         </div>
                      </div>
                   </div>
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!4v1581325727515!6m8!1m7!1sCAoSLEFGMVFpcE1jV3VRYUlTT3pUcjRjb0E5VUZ0Z1ZETW16bWhKODdLYlV6MTRS!2m2!1d38.798489083569!2d-77.164809691056!3f340!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>Ferguson Kitchen Bath Lighting</h3>
                              </div>
                           </div>
                    </div>
                    <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!4v1581325646131!6m8!1m7!1sCAoSLEFGMVFpcE5TSUVIOHJOTlAyeVNfdENCeWJUdDRHRFVqajJMQUlzbzFMNnhf!2m2!1d38.980513082626!2d-76.540350640636!3f154.29!4f16.549999999999997!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>Smyth Jewelers</h3>
                              </div>
                           </div>
                    </div>
                    {/* <div className="col-lg-6 my-2 ">
                      <div className="panorama transform">
                         <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422770668!6m8!1m7!1sYi0kltV3rrQAAAQqogjzrQ!2m2!1d42.08069029850684!2d-87.75395426057213!3f255!4f0!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                         <div className="image-text">
                            <h3>THE ART + SCIENCE BARBERSHOP</h3>
                         </div>
                      </div>
                   </div> */}
                   <div className="col-lg-4 my-2">
                           <div className="panorama transform">
                              <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422739576!6m8!1m7!1sE0ynwNd2DKQAAAQvOYwlGQ!2m2!1d41.96056050794047!2d-87.67364456873925!3f1!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                              <div className="image-text">
                                 <h3>CHALET NURSERY</h3>
                              </div>
                           </div>
                    </div>
                </div>
                {/* <div className="row py-3">
                   
                </div>
                <div className="row py-3">
                   
                  
                </div> */}
             </div>
   
                </div>
            </div>
            </div>
        </div>
        {/* <Testimonials/> */}
    </div>
  );
}

export default Retail;