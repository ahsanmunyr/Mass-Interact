// import './../Styles/style.css';

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
import image7 from './../Assets/Logos/WA.png'
import image11 from './../Assets/Logos/PF.png'
import image16 from './../Assets/Logos/WSL.jpeg'
import image17 from './../Assets/Logos/VT logo.jpg'
import image18 from './../Assets/Logos/KU.png'
import image24 from './../Assets/Logos/kissing.png'
import image25 from './../Assets/Logos/massage.jpg'
import image26 from './../Assets/Logos/DT.png'
import image27 from './../Assets/Logos/P.png'
import image28 from './../Assets/Logos/ML.png'
import Image from 'next/image'
import React , {useEffect, useState,  useReducer } from 'react'
import { Carousel  } from 'react-bootstrap';
import Iframe from 'react-iframe'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
// import AOS from 'aos';
export default function Brands({data}) {

   const [array, onChangeArray] = useState([])

    useEffect(() => {
         if(data){
            // console.log(data)
            onChangeArray(data)
         }
        AOS.init({
           disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
           startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
           initClassName: 'aos-init', // class applied after initialization
           animatedClassName: 'aos-animate', // class applied on animation
           useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
           disableMutationObserver: false, // disables automatic mutations' detections (advanced)
           debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
           throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
           // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
           offset: 120, // offset (in px) from the original trigger point
           delay: 100, // values from 0 to 3000, with step 50ms
           duration: 300, // values from 0 to 3000, with step 50ms
           easing: 'ease', // default easing for AOS animations
           once: false, // whether animation should happen only once - while scrolling down
           mirror: false, // whether elements should animate out while scrolling past them
           anchorPlacement: 'top-bottom', 
          });
       },[]);
return (

   <section  style={{ backgroundColor: 'white',position: 'relative'}}  >
      {
         array.length > 0 ?
         <div className="container-1440 pt-5 pb-3">
               <div className="about-mass home-sec-2">
                  <h1 style={{textAlign:'center'}}>Our clients include</h1>
               </div>
            <div style={{width:'100%', display:'flex', flexWrap:'wrap', flexDirection:'row'}} className="py-3">
            {
               array.map((item, index)=>(
                  <div key={index} data-aos="flip-up" className="col-md-3 m-auto">
                     <a href={item.url} rel="noopener noreferrer">
                        <div className="sponsors-clients">
                           {/* <img src={image16}/> */}
                           <img width="220px" src={'https://webprojectmockup.com/custom/mass_interact/public/'+item.image} />
                           {/* <Image src={image16} placeholder='blur' /> */}
                        </div>
                     </a>
                  </div>
               ))
            }
            </div>
         </div>:
         <div className="about-mass home-sec-2">
            <h1 style={{textAlign:'center'}}>Sorry...</h1>
         </div>
      }
</section>
   );
}

// export default Brands;




