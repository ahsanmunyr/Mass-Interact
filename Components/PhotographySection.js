
import image1 from './../Assets/service/Still-Photography.jpg'
import image3 from './../Assets/service/Panoramas.jpg'
import image4 from './../Assets/service/Aerial-Photography.jpg'
import Iframe from 'react-iframe'
import React , {useEffect} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
// import v from './../Assets/ST.mp4'
import ActiveLink from './ActiveLink';
import 'react-lazy-load-image-component/src/effects/blur.css';
function PhotographySection() {
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
            <div data-aos="fade-right" className="service-head">
               <h3>Photography</h3>
               <br/>
               <p>
               Professional Photography for street view helps highlight the best aspects about your business and brand. Every step of the process is designed to capture your customer’s attention. With our latest equipment and software, you’ll have images that will sell your business offerings to a thousand customers before you do the talking!
               </p>
            </div>
         </div>
      </section>

      <section>
         <div className="container py-3">
            <div data-aos="fade-left" className="" >
            {/* <Iframe   src={require('./../Assets/ST.mp4')} 
                   width="100%" height="600px" className="photography-section-video-css" frameBorder="0" allowFullScreen={true} aria-label="Google Iframe" data-acsb-navigable="true" data-acsb-force-navigable="true" data-acsb-now-navigable="true"    
                   /> */}
             <video  autoPlay={true} controls src={require('./../Assets/ST.mp4')} />
          
               <span></span>
            </div>
         </div>
      </section>

      <section className="py-5" style={{backgroundColor: '#efefef'}}>
         <div className="container-1440 pt-5 pb-3">
            <div className="row">

            <div data-aos="fade-right" className="col-lg-3 col-sm-6 mx-auto my-3">
                  <div className="service-1-card">
                     <h3>HDR Imagery </h3>
                     <p>High Dynamic Range (HDR) processing is a technology that is used to create images that are much more evocative than regular photographs. It is based on the human visual system and uses a full set of images to create one image. This creates a level of detailing (with shadows and highlights) that is unprecedented. </p>
                  </div>
               </div>

               <div data-aos="fade-down" className="col-lg-3 col-sm-6 mx-auto my-3">
                  <div className="service-1-card">
                     <h3>Perfect Verticals </h3>
                     <p>Many photography angles cause vertical perception distortion. This means that the vertical lines in the image (towers, walls, trees, etc) start converging towards the top. And with interior photography, the areas can appear a lot smaller than they are. Our expert photographers ensure that our vertical lines maintain a 90-degree angle in every image. </p>
                  </div>
               </div>

               <div data-aos="fade-left" className="col-lg-3 col-sm-6 mx-auto my-3">
                  <div className="service-1-card">
                     <h3>Optimized sharpening </h3>
                     <p>Optimized sharpening of images means that you get photographs that can be used for real-time processing across digital and print. We optimize images to guarantee the perfect size and resolution — saving you lots of time while ensuring the superior quality of the images. We also highlight certain interiors or product features so that the viewer’s eyes are immediately drawn to what you want them to see. </p>
                  </div>
               </div>

               <div data-aos="fade-left" className="col-lg-3 col-sm-6 mx-auto my-3">
                  <div className="service-1-card">
                     <h3>Professional Editing</h3>
                     <p>Our professionally crafted images are created with a single goal - to sell your business. Using professional-grade high-quality equipment, we start with enhanced still photography, which includes HDR techniques. During the post-process, we optimize, sharpen, color enhance, retouch, and re-tone images so that the resulting visual display of your business instantly attracts your customer’s attention.</p>
                  </div>
               </div>

               {/* <div data-aos="fade-left" className="col-lg-4 col-sm-6 mx-auto my-3">
                  <div className="service-1-card">
                     <h3>TOTAL TONE MAPPING</h3>
                     <p>Our professionally crafted images are created with a single aim – to sell your business. Using professional grade high-quality equipment, we start with enhanced still photography which includes HDR techniques. During the post-process, we optimize, sharpen, colour enhance, retouch and re-tone images so that they resulting visual display of your business instantly attracts your customer’s attention </p>
                  </div>
               </div>

               <div data-aos="fade-left" className="col-lg-4 col-sm-6 mx-auto my-3">
                  <div className="service-1-card">
                     <h3>TASTEFUL RETOUCHING</h3>
                     <p>Our professionally crafted images are created with a single aim – to sell your business. Using professional grade high-quality equipment, we start with enhanced still photography which includes HDR techniques. During the post-process, we optimize, sharpen, colour enhance, retouch and re-tone images so that they resulting visual display of your business instantly attracts your customer’s attention </p>
                  </div>
               </div> */}

            </div>
         </div>
      </section>

      <section>
         <div className="container-1440">
            <div className="row pb-5">
               <div data-aos="fade-left" className="col-lg-6 mt-3">
                  <div className="photography-service-image">
                     {/* <img src={image1}/> */}
                     <Image alt='some value' src={image1} placeholder='blur'  />
                     {/* <LazyLoadImage
                        alt={image1}
                        threshold={400}
                        effect='blur'
                        src={image1} // use normal <img> attributes as props
                     /> */}
                  </div>
               </div>
               <div data-aos="fade-right" className="col-lg-6 my-auto mt-3 ">
                  <div className="photography-service-text">
                     <h3>Still Photography</h3>
                     <p>Our professionally crafted images are created with a single aim – to sell your business. Using professional-grade high-quality equipment, we start with enhanced still photography which includes HDR techniques. During the post-process, we optimize, sharpen, color enhance, retouch, and re-tone images so that the resulting visual display of your business instantly attracts your customer’s attention.</p>
                  </div>
               </div>
            </div>

            <div className="row pb-5 flex-direction-photography">
               <div  data-aos="fade-right" className="col-lg-6 my-auto mt-3 ">
                  <div className="photography-service-text ">
                     <h3>360 Panoramas</h3>
                     <p>The Inside View Virtual Tour or 360 degree tour is a great way to highlight what is unique about your business and products. Our trained and certified photographers produce high-quality panoramic views of all types of interiors even when faced with challenges like low lighting and tight spaces.</p>
                  </div>
               </div>
               <div data-aos="fade-left"  className="col-lg-6 mt-3">
                  <div className="photography-service-image">
                     {/* <img src={image3} /> */}
                     <Image alt='some value' src={image3} placeholder='blur'  />
                     {/* <LazyLoadImage
                        alt={image3}
                        threshold={400}
                        effect='blur'
                        src={image3} // use normal <img> attributes as props
                     /> */}
                  </div>
               </div>
            </div>

            <div className="row pb-5">
               <div data-aos="fade-left" className="col-lg-6 mt-3">
                  <div className="photography-service-image">
                  <Image alt='some value' src={image4} placeholder='blur'  />
                     {/* <img src={image4} /> */}
                     {/* <LazyLoadImage
                        alt={image4}
                        threshold={400}
                        effect='blur'
                        src={image4} // use normal <img> attributes as props
                     /> */}
                  </div>
               </div>
               <div data-aos="fade-right" className="col-lg-6 my-auto mt-3 ">
                  <div className="photography-service-text">
                     <h3>Aerial Photography</h3>
                     <p>Aerial photography of your business allows your customers to visualize the location and subtly keep a mental record of the landmarks around it. You can add a new perspective to your business with aerial photography that is clicked with the help of drones or UAV services.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>


      <section className="py-5" style={{backgroundColor: '#f15929'}}>
         <div className="container-1440">
            <div className="multiple-location">
               <div data-aos="fade-left" className="multiple-1">
                  <h3>HAVE MULTIPLE LOCATIONS? <br/> NO PROBLEM.</h3>
                  <p>We have photographers in every major city, allowing us to schedule & shoot your 360 Tour where you need us!</p>
               </div>
               <div data-aos="fade-right" className="multiple-2 my-auto ml-auto">
               <ActiveLink activeClassName="active" href="/contact">
                                <a onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}} ><button>Request A Qoute Now</button></a>
                </ActiveLink>
               </div>
            </div>
         </div>
      </section>

    
      {/* <section className="py-3">
         <div className="container">
         <Bounce>
            <div className="our-work pt-3 pb-5">
               <h3>Our Sample Work</h3>
            </div>
         </Bounce>
            <div className="service-screen">
            <Zoom>
               <img src={image2}/>
               <div className="frame-service-center">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503658096645!6m8!1m7!1sIAlhxAwdgJ8AAAQvvI2Bkg!2m2!1d30.26440205146451!2d-97.74364485853425!3f60.31!4f2.9099999999999966!5f0.7820865974627469"
                   width="100%" height="100%" frameBorder="0" style={{border: 0}} allowFullScreen={true}     
                   />
               </div>
            </Zoom>
            </div>
         </div>
      </section> */}

      </section>
);
}

export default PhotographySection;