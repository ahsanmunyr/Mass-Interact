import Section from '../Banner';
import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
function Restaurant() {
  
  useEffect(() => {

  },[]);
  return (
    <div className="App">
          {/* <Section heading="Restaurants"/> */}
        <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
                      
             <div className="tab-pane fade show active" id="resturant" role="tabpanel" aria-labelledby="profile-tab">

<div className="row py-3">
      <div className="col-lg-4 my-2 ">
         <div className="panorama transform">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503424189235!6m8!1m7!1sisqZptBcWYMAAAQvOcTjYQ!2m2!1d41.88979080432126!2d-87.63784200453614!3f108.31!4f-2.049999999999997!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
            <div className="image-text">
               <h3>THE HAMPTON SOCIAL</h3>
            </div>
         </div>
      </div>
      <div className="col-lg-4 my-2">
              <div className="panorama transform">
                 <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503424203222!6m8!1m7!1sJ5WZUzzQSHwAAAQfr9K4Og!2m2!1d41.88695152269108!2d-87.65201700832301!3f159.65!4f-6.670000000000002!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                 <div className="image-text">
                    <h3>LA SIRENA CLANDESTINA</h3>
                 </div>
              </div>
       </div>
       <div className="col-lg-4 my-2">
              <div className="panorama transform">
                 <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503424225533!6m8!1m7!1sb77_L3RYsrcAAAQvvcJEKQ!2m2!1d41.968381784088!2d-87.68824928126037!3f353!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                 <div className="image-text">
                    <h3>ARTANGO BAR AND STEAKHOUSE</h3>
                 </div>
              </div>
       </div>
   </div>

  <div className="row py-3">
   <div className="col-lg-4 my-2 ">
         <div className="panorama transform">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503424246943!6m8!1m7!1swBKb0_MMmkoAAAQfDplHbQ!2m2!1d41.36732510673838!2d-87.42574239163515!3f84.91!4f-7.819999999999993!5f0.7820865974627469"  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
            <div className="image-text">
               <h3>LIGHTHOUSE RESTAURANT</h3>
            </div>
         </div>
      </div>
      <div className="col-lg-4 my-2">
              <div className="panorama transform">
                 <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503424290907!6m8!1m7!1su78gNr1GerAAAAQvPHRZXw!2m2!1d41.88150265799546!2d-87.62877363384519!3f47!4f0!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                 <div className="image-text">
                    <h3>ROSEBUD PRIME</h3>
                 </div>
              </div>
       </div>
       <div className="col-lg-4 my-2">
              <div className="panorama transform">
                 <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503424303863!6m8!1m7!1skh26qHoIhaoAAAQ8sU7A9Q!2m2!1d36.11215747212331!2d-115.1725734256723!3f133.27!4f-8.86!5f0.7820865974627469" width="100%" height="450" frameBorder="0" style={{border: 0}}  allowFullScreen={true}/>
                 <div className="image-text">
                    <h3>BUDWEISER BEER PARK</h3>
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

export default Restaurant;