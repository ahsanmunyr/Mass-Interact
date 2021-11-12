import image from './../Assets/service/service-1.jpg'
import Iframe from 'react-iframe'
import React , {useEffect} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
import ActiveLink from './ActiveLink';
import 'react-lazy-load-image-component/src/effects/blur.css';
function CustomVirtualTourSection() {
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
             <h3>Custom Virtual Tours Services</h3>
                <br/>
                <p>
                In a world where consumers seek instant gratification, businesses can find a massive competitive advantage by providing a superior, immersive, and unique customer experience. A professional-quality virtual tour is one of the best ways. Mass Interacts Custom Virtual Tours allow prospective customers to see what you have to offer - without leaving the comfort of their own home. (Mass Interact`s)
                </p>
 
                <p>
                A Custom Virtual Tour builds a simulation of a real location, using sequential 360 panoramic images as viewpoints. Enhanced effects, like sound, floor plans, and music allow businesses to present their company in the best way.
                </p>
             </div>
        
          </div>
       </section>
 
       <section>
          <div className="container py-3">
             <div data-aos="fade-left" className="service-1-img">
                {/* <img src={image}/> */}
                <Iframe src="https://www.google.com/maps/embed?pb=!1m0!4v1503657922853!6m8!1m7!1sjjJsKR9O350AAAQ2riQYyw!2m2!1d33.50690804487009!2d-111.9521260627636!3f294!4f0!5f0.7820865974627469"
                    width="100%" height="650px" frameBorder="0" allowFullScreen={true} aria-label="Google Iframe" data-acsb-navigable="true" data-acsb-force-navigable="true" data-acsb-now-navigable="true" style={{border: 0}}    
                    />

                <span></span>
             </div>
          </div>
       </section>
 
       <section className="py-5"
        style={{backgroundColor: '#efefef'}}
        >
          <div className="container">
          <div className="row">
             <div data-aos="fade-right" className="col-lg-4 col-sm-6 mx-auto my-3">
                <div className="service-1-card">
                   <h3>Customized Brand Experience</h3>
                   <p>Custom Virtual Tours are a great way to present your brand in a unique and standout way. They enhance your social media and digital marketing efforts by delivering an incredible visual communication experience. Our panoramic photos and virtual tours enhance your marketing collateral with complete customization, including logos, colors, fonts, videos, and messaging.</p>
                </div>
             </div>
 
             <div data-aos="fade-down" className="col-lg-4 col-sm-6 mx-auto my-3">
                <div className="service-1-card">
                   <h3>360 Panoramic Photography</h3>
                   <p>We use high-quality panoramic photography paired with cutting-edge post-processing methods to create a standout portrayal of your brand in an immersive experience. </p>
                </div>
             </div>
 
             <div data-aos="fade-left" className="col-lg-4 col-sm-6 mx-auto my-3">
                <div className="service-1-card">
                   <h3>Mobile-ready and Responsive</h3>
                   <p>Our Hotel and Resort virtual tours are powered by HTML 5 technology, ensuring that they’re completely responsive and can be viewed across platforms and operating systems - including desktop, laptop, tablets, and mobile phones, Windows, Android, iOS, and other operating systems. No matter how someone is viewing, we guarantee they get the immersive experience. </p>
                </div>
             </div>
 
             </div>
          </div>
       </section>
 
 
       <section className="py-5" style={{backgroundColor: '#f15929'}}>
          <div className="container">
             <div className="multiple-location">
                <div data-aos="fade-left" className="multiple-1">
                   <h3>HAVE MULTIPLE LOCATIONS? <br/> NO PROBLEM.</h3>
                   <p>We have photographers in every major city, allowing us to schedule and shoot your 360 Tour where you need us!</p>
                </div>
                <div data-aos="fade-right" className="multiple-2 my-auto ml-auto">
                <ActiveLink activeClassName="active" href="/contact">
                                <a onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white'}} ><button>Request A Qoute Now</button></a>
                </ActiveLink>
                </div>
             </div>
          </div>
       </section>
 
       <section>
          <div className="container py-5">
             <div data-aos="fade-up" className="benefits">
                <h3>Benefits of Custom Virtual Tours</h3>
             </div>
             <div className="row pt-5 pb-3">
 
                <div data-aos="flip-down" className="col-lg-4 col-sm-6 mx-auto my-3">
                   <div className="service-2-card">
                      <h3>Superior customer experience</h3>
                      <p>Whether you’re a gym, a beauty salon, or an interior design firm; a virtual tour can bring extra visibility to your business. There’s a big difference between a website with text and images vs. an immersive, interactive experience - a Custom Virtual Tour gives you that edge.</p>
                   </div>
                </div>
 
                <div data-aos="flip-down" className="col-lg-4 col-sm-6 mx-auto my-3">
                   <div className="service-2-card">
                      <h3>Better Exposuree</h3>
                      <p>The uniquely immersive experience that Custom Virtual Tours create is more effective than any form of advertising. It allows you to create a sense of familiarity and ease among customers who are planning to visit your physical premises. It can also build intrigue and excitement around your business.</p>
                   </div>
                </div>
 
                <div data-aos="flip-down" className="col-lg-4 col-sm-6 mx-auto my-3">
                   <div className="service-2-card">
                      <h3>Great Return on Investment (ROI)</h3>
                      <p>Your one-time investment in a photoshoot will result in intrigue, an increase in business, and a superlative customer experience even before a customer visits your physical location.</p>
                   </div>
                </div>
 
                <div data-aos="flip-down" className="col-lg-4 col-sm-6 my-3">
                   <div className="service-2-card">
                      <h3>Superlative experience across devices</h3>
                      <p>Our Custom Virtual Tours are powered by a cross-plat forming HTML 5 engine, enabling the tours to be customized on desktops, tablets, and smartphones.</p>
                   </div>
                </div>
 
                <div data-aos="flip-down" className="col-lg-4 col-sm-6 mr-auto my-3">
                   <div className="service-2-card">
                      <h3>Gives you flexibility and freedom</h3>
                      <p>A Custom Virtual Tour gives you the ability to capture your customer’s attention by focusing on key aspects of your product(s) or service(s) in a unique and engaging way.</p>
                   </div>
                </div>
 
             </div>
          </div>
       </section>
    </section>
);
}

export default CustomVirtualTourSection;