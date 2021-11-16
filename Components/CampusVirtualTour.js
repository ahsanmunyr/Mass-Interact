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
function CampusVirtualTourSection() {
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
           <section className="campusvt py-5">
         <div className="container-1440">
            <div className="row">
               <div className="col-xl-6 col-lg-12 mt-3">
                  <div className="campusvt-col-1-img">
                  <Iframe src="https://massinteract.com/westminster-college/"
                   width="100%" height="500px" loading='lazy' frameBorder="0"  allowFullScreen={true} aria-label="Google Iframe" data-acsb-navigable="true" data-acsb-force-navigable="true" data-acsb-now-navigable="true" style={{border: 0}}    
                   />
                    
                  </div>
               </div>
               <div className="col-xl-6 col-lg-12 mt-3">
                  <div className="campusvt-col-1-text">
                     <h3>Campus Virtual Tour</h3>
                     <p>Campus virtual tours are a great way to help prospective students see and learn more about your campus and all it has to offer. Stand out by giving potential applicants a live, immersive experience while eliminating any travel time, cost, or external stresses that may get in the way of visiting your school. Allowing students to virtually visit provides higher conversion rates for applications and subsequent enrollments to your campus.</p>
                     <p>Mass Interact’s Campus virtual tours are also great for alumni and potential donors. Having a state-of-the-art virtual tour is an invaluable marketing tool and a unique way to showcase your school.</p>
                 
                        {/* <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}}  to="/mass/contact">  <button className="btn-services">Get a free quote</button></Link>  */}
                        <ActiveLink activeClassName="active" href="/contact">
                                <a onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}} >  <button style={{  width: 'max-content'}} className="btn-home">GET STARTED</button></a>
                        </ActiveLink>
                        {/* <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}}  to="/contact">
                           <button style={{  width: 'max-content'}} className="btn-home">GET STARTED</button>
                        </Link>
                  */}
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-5" style={{backgroundColor: '#efefef'}}>
         <div className="container">
         <div className="row">
            <div data-aos="fade-down" className="col-lg-4 col-sm-6 mx-auto my-3">
               <div className="service-1-card">
                  <h3>Customized Brand Experience</h3>
                  <p>
                     Interactive virtual tours are a great way to showcase your school’s brand identity and offerings to prospective students and their families. Our panoramic photos and virtual tours enhance your social media, digital presence, and marketing collateral with an incredible visual communication experience that’s completely customizable - including logos, colors, fonts, videos, and messaging.
                  </p>
               </div>
            </div>

            <div data-aos="fade-down" className="col-lg-4 col-sm-6 mx-auto my-3">
               <div className="service-1-card">
                  <h3>360 Panoramic Photography</h3>
                  <p>
                  We use high-quality panoramic photography paired with cutting-edge post-processing methods to create a standout experiential product for our clients. This ensures that we portray all the unique and important aspects of your location in the best way
                  </p>
               </div>
            </div>

            <div data-aos="fade-down" className="col-lg-4 col-sm-6 mx-auto my-3">
               <div className="service-1-card">
                  <h3>Mobile-ready and Responsive</h3>
                  <p>
                  Our Campus virtual tours are powered by HTML 5 technology, ensuring that they’re completely responsive and can be viewed across platforms and operating systems - including desktop, laptop, tablets, and mobile phones, Windows, Android, iOS and other operating systems. No matter how someone is viewing, we guarantee they get the immersive experience.
                  </p>
               </div>
            </div>

            </div>
         </div>
      </section>


      <section className="py-5"  style={{backgroundColor: '#f15929'}}>
         <div className="container">
            <div className="multiple-location">
               <div data-aos="fade-down" className="multiple-1">
                  <h3>HAVE MULTIPLE LOCATIONS?  <br/> NO PROBLEM.</h3>
                  <p>We have photographers in every major city, allowing us to schedule & shoot your 360 Tour where you need us!</p>
               </div>
               <div data-aos="fade-down" className="multiple-2 my-auto ml-auto">

               {/* <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}}  to="/contact">  <button>Request A Qoute Now</button></Link>  */}
                         <ActiveLink activeClassName="active" href="/contact">
                                <a onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}} > <button>Request A Qoute Now</button></a>
                        </ActiveLink>
               </div>
            </div>
         </div>
      </section>

      <section>
         <div className="container-1440 pt-5 pb-3">
            <div data-aos="fade-up" className="benefits">
               <h3>Benefits of Campus Virtual Tours</h3>
            </div>
            <div className="row pt-5 pb-3">

               <div data-aos="flip-down" className="col-lg-3 col-sm-4 mx-auto my-3">
                  <div className="service-2-card">
                     <h3>Organic Exposure</h3>
                     <p>When your virtual tour is immersive, viewers are more likely to share snapshots on their own social media channels, giving you added exposure. </p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-lg-3 col-sm-4 mx-auto my-3">
                  <div className="service-2-card">
                     <h3>Reach a Younger Audience</h3>
                     <p>A virtual tour is especially appealing to the younger, engaging audience you’re aiming to reach - millennial and Gen Z. </p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-lg-3 col-sm-4 mx-auto my-3">
                  <div className="service-2-card">
                     <h3>Own the Content</h3>
                     <p>All panoramic photography and virtual tours will be entirely owned by you, ensuring a strong marketing asset in the long run.</p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-lg-3 col-sm-4 my-3">
                  <div className="service-2-card">
                     <h3>SEO Advantage</h3>
                     <p>Mass Interact virtual tour content is hosted in the Google database and stored in the Google Knowledge Graph, giving you a significant advantage when it comes to SEO (Search Engine Optimization).</p>
                  </div>
               </div>
               <div data-aos="flip-down" className="col-lg-3 col-sm-6 mr-auto my-3">
                  <div className="service-2-card">
                     <h3>Fundraising Efforts</h3>
                     <p>A virtual tour that’s catered to alumni and potential donors is a great way to raise funds for your campus. It allows them to revisit the nostalgia associated with your campus while showcasing improvements that have been made. </p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-lg-3 col-sm-6 mx-auto my-3">
                  <div className="service-2-card">
                     <h3>Complete Business Listing Status</h3>
                     <p>Get one step closer to a complete Business Listing with an official GSVI (Google Street View Inside) that a Mass Interact virtual tour offers - a major advantage for any kind of online discovery.</p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-lg-3 col-sm-6 my-3">
                  <div className="service-2-card">
                     <h3>Create a Better Orientation Process</h3>
                     <p>Having a virtual tour can give you the added edge when you’re designing an orientation program for incoming students.</p>
                  </div>
               </div>

               <div data-aos="flip-down" className="col-lg-3 col-sm-6 mr-auto my-3">
                  <div className="service-2-card">
                     <h3>Dynamic Google-Generated Content</h3>
                     <p>With our virtual tours you can integrate Google-generated content within your school’s website and social media pages.</p>
                  </div>
               </div>
       
         </div>
         
         </div>
      </section>

      {/* <OurSampleWork name="CVTS" /> */}

      {/* <section className="py-3">
         <div className="container">
         <Bounce>
            <div className="our-work pt-3 pb-5">
               <h3>Our Sample Work</h3>
            </div>
         </Bounce>
            <div className="service-screen">
            <Zoom>
               <img src={image1}/>
               <div className="frame-service-center">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503658096645!6m8!1m7!1sIAlhxAwdgJ8AAAQvvI2Bkg!2m2!1d30.26440205146451!2d-97.74364485853425!3f60.31!4f2.9099999999999966!5f0.7820865974627469"
                   width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen={true}     
                   />
               </div>
            </Zoom>
            </div>
         </div>
      </section> */}

    </section>
   
  );
}

export default CampusVirtualTourSection;