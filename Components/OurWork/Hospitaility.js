import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function Hospitaility() {
  
  useEffect(() => {
  },[]);
  return (
    <div className="App">
          {/* <Section heading="Hospitality"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row py-3">
                        <div className="col-lg-6 my-2">
                            <div className="panorama transform">
                                <Iframe loading='lazy' src="https://www.google.com/maps/embed?pb=!4v1633417189401!6m8!1m7!1sCAoSLEFGMVFpcFAyaHhyQ3FyY2Z2NklGRFQ2c3R4dWZoRXAwYjR5emR5UGF4ZVp1!2m2!1d39.186241540084!2d-106.81787685977!3f54.823864032351565!4f-2.1197500404434493!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" styles={{border: 0}} allowFullScreen={true}/>
                                <div className="image-text">
                                    <h3>THE LITTLE NELL</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 my-2">
                                <div className="panorama transform">
                                    <Iframe loading='lazy' src="https://www.google.com/maps/embed?pb=!1m0!4v1503657922853!6m8!1m7!1sjjJsKR9O350AAAQ2riQYyw!2m2!1d33.50690804487009!2d-111.9521260627636!3f294!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" styles={{border: 0}}  allowFullScreen={true}/>
                                    <div className="image-text">
                                        <h3>THE PHOENICIAN RESORT</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-2">
                                <div className="panorama transform">
                                    <Iframe loading='lazy' src="https://s3.amazonaws.com/vtvt/VTTOUR.html" width="100%" height="450" frameBorder="0" styles={{border: 0}}  allowFullScreen={true}/>
                                    <div className="image-text">
                                        <h3>VIRGINIA TECH</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-2 ">
                            <div className="panorama transform">
                                <Iframe loading='lazy' src="https://www.google.com/maps/embed?pb=!1m0!4v1503658247949!6m8!1m7!1slf8204yGdqcAAAQvwsaspw!2m2!1d37.83729277670259!2d-122.2920777223085!3f121.18!4f-21.42!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" styles={{border: 0}} allowFullScreen={true}/>
                                <div className="image-text">
                                    <h3>HYATT PLACE EMERYVILLE</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 my-2">
                                <div className="panorama transform">
                                    <Iframe loading='lazy' src="https://www.google.com/maps/embed?pb=!1m0!4v1503658378414!6m8!1m7!1sK4MG1vOZpPcAAAQ7LuuBKA!2m2!1d42.2246361480046!2d-83.61334819673635!3f155.93!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" styles={{border: 0}}  allowFullScreen={true}/>
                                    <div className="image-text">
                                        <h3>ANN ARBOR MARRIOTT</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-2">
                                <div className="panorama transform">
                                    <Iframe  loading='lazy'
                                        src="https://massinteract.com/westminster-college/"
                                        width="100%" height="450"
                                        frameBorder="0" 
                                        styles={{border: 0}}  
                                        allowFullScreen={true}
                                    />
                                    <div className="image-text">
                                        <h3>WESTMINSTER-COLLEGE</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row py-3"> */}
                       
                        {/* </div> */}
                    </div>

                </div>
            </div>
            </div>
        </div>
        {/* <Testimonials/> */}
    </div>
  );
}

export default Hospitaility;

