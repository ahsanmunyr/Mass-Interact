import image1 from './../Assets/service/services-screen.png'
import Iframe from 'react-iframe'
import React , {useEffect} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
function OurSampleWork({name}) {
useEffect(() => {
   AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initclassNameName: 'aos-init', // className applied after initialization
      animatedclassNameName: 'aos-animate', // className applied on animation
      useclassNameNames: false, // if true, will add content of `data-aos` as classNamees on scroll
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
});
return (
   <section>
      <section className="">
         <div className="">
            <div className="our-work pt-3 ">
               <h3>See Our Work</h3>
            </div>
   
            <div className="service-screen">
            {/* <Zoom > */}
               <Image  alt='some value' height='800' width='2200' src={image1} placeholder='blur'  />
               <div className="frame-service-center">
                  <iframe src={
                     name == "CVTS" ?
                     "https://www.massinteract.com/worcester-state-university/":
                     name == "CustomVTS" ?
                     "https://tourmkr.com/F1CF4FoiCh/9488211p&11.08h&81.61t":
                     name == "GolfVTS" ?
                     "https://www.google.com/maps/embed?pb=!4v1633418181745!6m8!1m7!1sCAoSLEFGMVFpcE0wMWNUUjdTcjVaYjNtZ2FVZzBwWE9MYUpnMmd4T3FvbnFFcEVX!2m2!1d30.749273590763!2d-81.613100464566!3f340!4f0!5f0.7820865974627469":
                     name == "GVTS" ?
                     "https://www.google.com/maps/embed?pb=!1m0!4v1503507431315!6m8!1m7!1sv7aQQSsxU8UAAAQ1t0Mosw!2m2!1d40.06180968635719!2d-83.03792914228052!3f294.5!4f-7.6200000000000045!5f0.7820865974627469":
                     name == "PGS" ?
                     "https://www.google.com/maps/embed?pb=!1m0!4v1503507405268!6m8!1m7!1sUkVlJxJeDs4AAAQvxcqRdQ!2m2!1d26.15015560841055!2d-80.33029403921347!3f220.93!4f-16.86!5f0.7820865974627469":
                     name == "SS" ?
                     'https://www.google.com/maps/embed?pb=!4v1633417189401!6m8!1m7!1sCAoSLEFGMVFpcFAyaHhyQ3FyY2Z2NklGRFQ2c3R4dWZoRXAwYjR5emR5UGF4ZVp1!2m2!1d39.186241540084!2d-106.81787685977!3f54.823864032351565!4f-2.1197500404434493!5f0.7820865974627469':
                     name == "3DM" ?
                     "https://www.google.com/maps/embed?pb=!1m0!4v1503425222365!6m8!1m7!1sF%3A-glk-fngpphw%2FWWztBjQuWLI%2FAAAAAAADHJQ%2Fy25ommbhYLsbIMRJZ73-pHjN4bLuV1PWgCLIBGAYYCw!2m2!1d32.796705198702!2d-96.828963526212!3f343.2!4f-1.8400000000000034!5f0.7820865974627469":
                     name == "VGVTS" ?
                     "https://www.google.com/maps/embed?pb=!1m0!4v1503422410019!6m8!1m7!1sjBX-jjIfLIIAAAQ1sC2ihg!2m2!1d41.92190559197017!2d-87.65383939719652!3f359!4f0!5f0.7820865974627469":

                     "https://www.google.com/maps/embed?pb=!1m0!4v1503658096645!6m8!1m7!1sIAlhxAwdgJ8AAAQvvI2Bkg!2m2!1d30.26440205146451!2d-97.74364485853425!3f60.31!4f2.9099999999999966!5f0.7820865974627469"
                  }
                  scrolling="no"
                    allowtransparency="true" allowFullScreen={true}
                  loading='lazy'
                  width="100%" height="450" style={{border: 0}}    
                  >
                  </iframe>
               </div>
               {/* </Zoom>  */}
            </div>
         </div>
      </section>

   </section>
);
}

export default OurSampleWork;