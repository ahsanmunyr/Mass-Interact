// import './../Styles/style.css';
import image from './../Assets/service/service-1.jpg'
import image1 from './../Assets/service/services-screen.png'
import Iframe from 'react-iframe'
import React , {useEffect} from 'react'
// import { Fade, Bounce,Slide,Zoom } from "react-awesome-reveal";
import 'aos/dist/aos.css'; 
// import OurSampleWork from './OurSampleWork'
import AOS from 'aos';
// import {
//    Link
//  } from "react-router-dom";
 import Image from 'next/image'
 import ActiveLink from './ActiveLink';
 import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function GoogleVirtualTourSection() {
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
        <section className="pt-5 pb-3">
         <div className="container">
            <div data-aos="fade-right" className="service-head googletours">
               {/* <h3>Double the FootFall. Drive up the Sales. Get more ROI</h3> */}
               <h3>Double the footfall. Drive-up your sales. Get more ROI</h3>
               <br/>
               <p>
                  Unleash the power of interactive content and make it work the most for your business. Maximize the impact of your Google Business Listing by adding your unique virtual tour, which highlights your business inside and out through stunning imagery and video.
               <br/>
                  According to data, customers who view a listing with a virtual tour are <b style={{ color: '#f1592a'}} >2x</b> as likely to visit the store or place a booking. A 360º virtual tour is a constant advertisement for your business on Google, pushing more online and offline traffic and customers to your business.
               </p>
            </div>
         </div>
      </section>

      <section>
         <div className="container py-3">
            <div data-aos="fade-left" className="service-1-img">
               {/* <img src={image}/> */}
               <Iframe 
                     src="https://www.google.com/maps/embed?pb=!1m0!4v1503657922853!6m8!1m7!1sjjJsKR9O350AAAQ2riQYyw!2m2!1d33.50690804487009!2d-111.9521260627636!3f294!4f0!5f0.7820865974627469"
                     width="100%" 
                     height="650px" 
                     frameBorder="0" 
                     allowFullScreen={true} 
                     aria-label="Google Iframe" 
                     data-acsb-navigable="true" 
                     data-acsb-force-navigable="true" 
                     data-acsb-now-navigable="true" 
                     style={{border: 0}}    
                   />
               {/* https://www.google.com/maps/embed?pb=!1m0!4v1503657922853!6m8!1m7!1sjjJsKR9O350AAAQ2riQYyw!2m2!1d33.50690804487009!2d-111.9521260627636!3f294!4f0!5f0.7820865974627469 */}
               {/* <div className="text-in-img">
                  <p>Explore Now</p>
               </div> */}
               {/* <div className="button-in-img">
               <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}}  to="/mass">  <button>Lets Go!</button></Link>
               </div> */}
               <span></span>
            </div>
         </div>
      </section>
      
      <section className="py-5" style={{backgroundColor: '#f15929'}}>
         <div className="container">
            <div className="multiple-location">
               <div data-aos="fade-left" className="multiple-1">
                  <h3>HAVE MULTIPLE LOCATIONS?<br/> NO PROBLEM.</h3>
                  <p>
                     We have photographers in every major city, allowing us to schedule & shoot your 360 Tour where you need us!
                  </p>
               </div>
               <div data-aos="fade-right" className="multiple-2 my-auto ml-auto">
               <ActiveLink activeClassName="active" href="/contact">
                                <a onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}} >  <button>Request A Qoute Now</button></a>
                </ActiveLink>
     
               </div>
            </div>
         </div>
      </section>

      <section>
         <div className="container-1440 pt-5 pb-3">
            <div className="row pt-5 pb-3">
               <div data-aos="flip-down" className="col-xl-3 col-lg-4 col-sm-6 mx-auto my-3">
                  <div className="service-2-card google-vt-card">
                  <h3>Stand Out In Search Results</h3>
                  <p>
                     The biggest key to success with Google’s search engine algorithm is producing high-quality content. Our High Dynamic Range (HDR) processing creates images that are far superior to a regular photograph. HDR processing uses a full set of images— adding both shadows and highlights– to create an incredible image that is both luminescent and deep.
                  </p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-xl-3 col-lg-4 col-sm-6 mx-auto my-3">
                  <div className="service-2-card google-vt-card">
                  <h3>Get higher visibility on Google</h3>
                  <p>
                     When you get a Mass Interact virtual tour for your business, you increase the visibility of your business across all Google platforms. In addition to increasing the visual impact of your Google Business Listing, it will also appear in organic searches and Google Maps. This tour can also be integrated with your social channels and embedded in your website.
                  </p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-xl-3 col-lg-4 col-sm-6 mx-auto my-3">
                  <div className="service-2-card google-vt-card">
                  <h3>Explore on Street View</h3>
                  <p>
                     Google Street View enlists trusted photographers who create a 360º view of your business. Whether you have a gym, restaurant, or university, the virtual tour works to give users an idea of what to expect when they visit. With options to zoom in/out with high resolution, pictures, and creative inside views, it is the virtual way to invite people into your physical location.
                  </p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-xl-3 col-lg-4 col-sm-6 mx-auto my-3">
                  <div className="service-2-card google-vt-card">
                  <h3>Boost Your Conversions</h3>
                  <p>
                  Increased visibility of your business among top search results is directly proportional to the increase in footfalls to your business. Over 34% who view your listing on mobile and 50% who view your listing on a smartphone are likely to visit your store within a day! Imagine the customers you’ll lose if you don’t have a great listing!
                  </p>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </section>
   
  );
}

export default GoogleVirtualTourSection;