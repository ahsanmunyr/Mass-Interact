import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function Cultural() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Cultural"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active"  id="cultural" role="tabpanel" aria-labelledby="profile-tab">
                      
           

                <div className="row py-3">
                    <div className="col-lg-4 my-2 ">
                        <div className="panorama transform">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422179604!6m8!1m7!1sc9EEUWkM75sAAAQvvMMi3g!2m2!1d41.88242626981543!2d-87.63798677644093!3f171.68!4f-0.9200000000000017!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                            <div className="image-text">
                            <h3>LYRIC OPERA OF CHICAGO</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-2">
                            <div className="panorama transform">
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422201104!6m8!1m7!1scuDqJwoxaDQAAAQ2riXIBw!2m2!1d41.14227947450239!2d-73.52917422855525!3f305.79!4f-2.5600000000000023!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                                <div className="image-text">
                                    <h3>THE GLASS HOUSE</h3>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-4 my-2">
                            <div className="panorama transform">
                                <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422467858!6m8!1m7!1sCAoSLEFGMVFpcE5TaW9wak51cml2R281Szg1N2gyOFJXYUdqNHZoYjdJU1lRZExW!2m2!1d41.8987808!2d-87.6246567!3f343!4f-18!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                                <div className="image-text">
                                    <h3>FOURTH PRESBYTERIAN CHURCH</h3>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-lg-4 my-2 ">
                        <div className="panorama transform">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503422410019!6m8!1m7!1sjBX-jjIfLIIAAAQ1sC2ihg!2m2!1d41.92190559197017!2d-87.65383939719652!3f359!4f0!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                            <div className="image-text">
                            <h3>ST VINCENT DEPAUL PARISH</h3>
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

export default Cultural;