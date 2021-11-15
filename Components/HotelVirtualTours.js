import image from './../Assets/service/service-1.jpg'
import Iframe from 'react-iframe'
import React , {useEffect} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
import ActiveLink from './ActiveLink';
import 'react-lazy-load-image-component/src/effects/blur.css';
function HotelVirtualTourSection() {
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
                <h3>Virtual Tour</h3>
                <br/>
                <p>
                In the age of social media, everyday hotel photos are passé. The only way to truly stand out is with a state-of-the-art, interactive virtual tour built specifically for Hotels and Resorts. This will allow you to showcase your property in a way that attracts prospective customers - from in-depth room tours to highlighting the most stunning aspects of your resort.
                </p>
                <p>
                   Hotel virtual tours aren’t just for individual customers who want to stay at your property, they’re also great for organizations that want to host meetings, businesses looking to host conferences, or for families interested in a wedding venue. Our virtual tour will give these prospective customers a panoramic view of all your halls, rooms, and meeting spaces, allowing them to visualize their event in the best possible way. 
                </p>
             </div>
       
          </div>
       </section>
 
       <section>
          <div className="container py-3">
             <div data-aos="fade-left" className="service-1-img">
                {/* <img src={image}/> */}
                <Image  alt='some value'
                    placeholder='blur'
                    src={image}
                    width={2000}
                    height={1000}
                />
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
                      <p>
                      Interactive Hotel virtual tours are a great way to present your brand to the world. They enhance your social media and digital marketing efforts by delivering an incredible visual communication experience. Our panoramic photos and virtual tours enhance your marketing collateral with complete customization, including logos, colors, fonts, videos, and messaging.  
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
 
                <div data-aos="fade-left" className="col-lg-4 col-sm-6 mx-auto my-3">
                   <div className="service-1-card">
                      <h3>Mobile-ready and Responsive</h3>
                     <p>
                     Our Hotel and Resort virtual tours are powered by HTML 5 technology, ensuring that they’re completely responsive and can be viewed across platforms and operating systems - including desktop, laptop, tablets, and mobile phones, Windows, Android, iOS and other operating systems. No matter how someone is viewing, we guarantee they get the immersive experience.
                     </p>
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
                   <p>
                      We have photographers in every major city, allowing us to schedule & shoot your 360 Tour where you need us! 
                   </p>
                </div>
                <div data-aos="fade-right" className="multiple-2 my-auto ml-auto">
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
                <h3>Benefits of Hotels & Resorts Virtual Tours</h3>
             </div>
             <div className="row pt-5 pb-3">
 
                <div data-aos="flip-down" className="col-lg-3 col-sm-6 mx-auto my-3">
                   <div className="service-2-card">
                      <h3>Find your target audience</h3>
                      <p>
                      Our clients report much higher conversion rates after integrating virtual tours - they see a huge increase in calls, emails, and other inquiries. It’s a great way to connect with your audience and get reservations. You no longer have to rely on walk-ins or last-minute bookings.
                      </p>
                           </div>
                </div>
 
                <div data-aos="flip-down" className="col-lg-3 col-sm-6 mx-auto my-3">
                   <div className="service-2-card">
                      <h3>Connect with tech-savvy users</h3>
                      <p>More and more customers (especially millennials) are using the internet as their primary source for travel bookings. Having an immersive, cutting-edge virtual tour is likely to make you their go-to option. </p>
                   </div>
                </div>
 
                <div data-aos="flip-down" className="col-lg-3 col-sm-6 mx-auto my-3">
                   <div className="service-2-card">
                      <h3>SEO Advantage</h3>
                      <p>With an immersive Hotel & Resort virtual tour, viewers will end up sharing screenshots on their social media channels. This will result in authentic exposure for your property. </p>
                   </div>
                </div>
 
                <div data-aos="flip-down" className="col-lg-3 col-sm-6 my-3">
                   <div className="service-2-card">
                      <h3>Ownership of Content</h3>
                      <p>You will own the entire panoramic photography, which is a valuable long-term marketing asset for your Hotel. </p>
                   </div>
                </div>
             </div>
          </div>
       </section>
    </section>
);
}

export default HotelVirtualTourSection;