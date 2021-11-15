import image from './../Assets/service/service-1.jpg'
import Iframe from 'react-iframe'
import React , {useEffect} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
import ActiveLink from './ActiveLink';
import 'react-lazy-load-image-component/src/effects/blur.css';
function GolfVirtualTourSection() {
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
           <Iframe src="https://www.google.com/maps/embed?pb=!4v1633417989953!6m8!1m7!1sCAoSLEFGMVFpcE13Z0VVcnZvejVaVV9WYkNRVU9QTUNCWG1heWE0TmxuNlotVnVK!2m2!1d33.815113435205!2d-84.405350824737!3f300!4f10!5f0.7820865974627469"
            width="100%" height="550px" frameBorder="0" allowFullScreen={true} aria-label="Google Iframe" data-acsb-navigable="true" data-acsb-force-navigable="true" data-acsb-now-navigable="true" style={{border: 0}}    
            />
             
           </div>
        </div>
        <div className="col-xl-6 col-lg-12 mt-3">
           <div className="campusvt-col-1-text">
              <h3>Golf Virtual Tour</h3>
              {/* <p>Golf Virtual Tour are a great way to let prospective students find out more about your campus and everything that it has to offer. Travel time and costs make it difficult for prospective students to actually tour more than a few, select campuses. Which is why having a campus tour can give prospective applicants a live, immersive experience that can really give your Campus an edge over others. In the long run, this means fantastic outcomes — especially in terms of high conversion rates for applications and subsequent enrollments.</p>
              <p>Not only do Golf Virtual Tour help get eyeballs as far as prospective students are concerned, but they’re also great for alumni and potential donors. Having a state-of-the-art virtual tour is an invaluable marketing tool on many levels— it signals that you’re willing to incorporate cutting-edge technology while also building a unique way of showcasing your brand.</p>
            */}
            <p>
            Bring your Golf Course into prospective players’ homes with a Custom virtual tour. Highlight each whole’s beauty from the tee box to the green. Having a course tour can help players plan their next Outing or golf trip to your course and help you stand out. It’s a Hole-in-one opportunity that will drive conversions and business for you!
            </p>
              {/* <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}}  to="/mass/contact">  <button className="btn-services">Get a free quote</button></Link> */}
        
                 <ActiveLink activeClassName="active" href="/contact">
                                <a onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}} >   <button style={{  width: 'max-content'}} className="btn-home">GET STARTED</button></a>
                </ActiveLink>
           </div>
        </div>
     </div>
  </div>
</section>
<section className="py-5" style={{backgroundColor: '#efefef'}}>
  <div className="container">
     <div className="row">

        <div data-aos="fade-right" className="col-lg-4 col-sm-6 mx-auto my-3">
           <div className="service-1-card">
              <h3>A unique, curated experience</h3>
              <p>Golf Course virtual tours provide an immersive, interactive experience that cannot be matched by static photography. We integrate your existing marketing assets into the tour, ensuring that you see both engaged users and an immediate increase in conversion rates. </p>
              <p>The tour will be customized to your brand identity - integrating your logo, colors, and messaging to create a look and feel that is 100% unique and authentic.</p>
           </div>
        </div>

        <div data-aos="fade-down" className="col-lg-4 col-sm-6 mx-auto my-3">
           <div className="service-1-card">
              <h3>360-degree photography with panoramic views</h3>
              <p>We use high-quality panoramic photography paired with cutting-edge post-processing methods to showcase the unique differentiators of your golf course, building a life-like experience for viewers. We capture all the important visuals to make sure we present your golf course in the best light. </p>
           </div>
        </div>

        <div data-aos="fade-left" className="col-lg-4 col-sm-6 mx-auto my-3">
           <div className="service-1-card">
              <h3>Responsive and mobile-ready</h3>
              <p>Our Golf Course virtual tours are powered by HTML 5 technology, ensuring that they’re completely responsive and can be viewed across platforms and operating systems - including desktop, laptop, tablets, and mobile phones, Windows, Android, iOS and other operating systems. No matter how someone is viewing, we guarantee they get the immersive experience. </p>
           </div>
        </div>

     </div>
  </div>
</section>
<section className="py-5"  style={{backgroundColor: '#f15929'}}>
  <div className="container">
     <div className="multiple-location">
        <div data-aos="fade-left" className="multiple-1">
           <h3>Have multiple <br/> locations? No problem.</h3>
           <p>We have photographers in every major city, allowing us to schedule & shoot your Google Business View 360° Tour anywhere!</p>
        </div>
        <div data-aos="fade-right" className="multiple-2 my-auto ml-auto">
            
                <ActiveLink activeClassName="active" href="/google-virtual-tour">
                                <a onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}} ><button>Request A Qoute Now</button></a>
                </ActiveLink>
        </div>
     </div>
  </div>
</section>

<section>
  <div className="container py-5">
     <div data-aos="fade-up" className="benefits">
        <h3>Benefits of Golf Course Virtual Tours</h3>
     </div>
     <div className="row pt-5 pb-3">

        <div data-aos="flip-down" className="col-lg-4 col-sm-6 mx-auto my-3">
           <div className="service-2-card">
              <h3>Brand identity</h3>
              <p>We integrate all your brand identity elements into the virtual tour - including logos, colors, videos, fonts, downloadable brochures, and image galleries. This ensures your marketing collateral is collected on an integrated, shareable platform and that your virtual tour is a true reflection of your brand. </p>
           </div>
        </div>

        <div data-aos="flip-down" className="col-lg-4 col-sm-6 mx-auto my-3">
           <div className="service-2-card">
              <h3>Social media Integration</h3>
              <p>You can integrate the link of the golf course virtual tour within your existing social media channels. Or you can simply share or post the tour on your various social media pages. We also facilitate one-click sharing so that you can increase the reach and exposure of the tour with ease. </p>
           </div>
        </div>

        <div data-aos="flip-down" className="col-lg-4 col-sm-6 mx-auto my-3">
           <div className="service-2-card">
              <h3>Intuitive User Experience</h3>
              <p>The virtual tour is both intuitive and easy to use — with simple controls and navigation elements. With one click, users can access features like zooming in to view details, pan the entire environment, and move from one location to the next. </p>
           </div>
        </div>

        <div data-aos="flip-down" className="col-lg-4 col-sm-6 my-3">
           <div className="service-2-card">
              <h3>Integrating hole maps</h3>
              <p>We provide a visual point of reference using interactive fly-overs in the virtual tour. We also provide some unique course wayfinding features — including aerial views, interactive hotspots, and radar orientation. </p>
           </div>
        </div>

        <div data-aos="flip-down" className="col-lg-4 col-sm-6 mr-auto my-3">
           <div className="service-2-card">
              <h3>Offline access</h3>
              <p>Our virtual tours can also be converted into an exe file allowing offline distribution through CDs and thumb drives. We can also modify the tour to allow for iOS and Android app integration so that it can be accessed offline. </p>
           </div>
        </div>



     </div>
  </div>
</section>


</section>

);
}

export default GolfVirtualTourSection;