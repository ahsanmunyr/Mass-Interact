
// import Section from '../Banner';
// import Testimonials from '../Testimonial';
import React , {useEffect, useState} from 'react'
import Iframe from 'react-iframe'
import axios from 'axios'

function OurWorkSection({data}) {
   //  a(data)
   //  const [array, onChangeArray] = useState([])
    
      // useEffect(() => {
      //   axios.get(`https://webprojectmockup.com/custom/mass_interact/public/api/our_work/${Id}`)
      //   .then((response) => {
      //    //  a(Id, "AHSAN")
      //      if(response.data.success){
      //       console.log(response.data.data, "GGG")
      //       // onChangeArray(response.data.data)
      //       //  a(response.data.data)
      //      }
        
      //   })
      //   .catch((error)=>{
      //      console.log(error);
      //   });
      // },[])
      
  return (
    <div className="App">
       <div className="container py-5">
            <div className="row">
            <div className="col-lg-12">

                <div className="tab-content" id="myTabContent">
        
                <div className="tab-pane fade show active" id="auto" role="tabpanel" aria-labelledby="profile-tab">
           
                  <div className="row py-3">
                     {
                        data.map((item,index)=>(
                           <div key={index} className="col-lg-4 my-2">
                              <div className="panorama transform">
                                 <Iframe src={item.wireframe}  width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                                 <div className="image-text">
                                    <h3>{item.title}</h3>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  </div>
                  
               </div>
           
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default OurWorkSection;


{/* <div className="col-lg-4 my-2">
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
</div> */}