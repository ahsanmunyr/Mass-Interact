
import image from './../Assets/about-us-sec-1.png'
import image2 from './../Assets/mission.png'
import image3 from './../Assets/vision.png'
import React , {useEffect, useState} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Link from 'next/link'
import Image from 'next/image'

function AboutSection() {
useEffect(() => {
    AOS.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
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
        <section>
            <div className="container pt-5">
                <div className="row">
                <div data-aos="fade-down" className="col-lg-6">
                    {/* <img width="100%" className="for-fun" src={image}/> */}
                    <Image 
                        width={550}
                        height={600}
                        placeholder="blur" 
                        src={image}
                        className="for-fun"
                    />
                    {/* <LazyLoadImage
                        alt={image}
                        width="100%" 
                        className="for-fun"
                        threshold={400}
                        effect='blur'
                        src={image} // use normal <img> attributes as props
                    /> */}
                </div>
                <div data-aos="fade-up" className="col-lg-6 ">
                    <div className="about-mass">
                        <hr/>
                        <h1>About <span> Mass <br/> Interact </span></h1>
                        <p>
                            Mass Interact is a Google-trusted agency that creates virtual and interactive tours. We help you optimize, differentiate,
                            and convey your business through an immersive, one-of-a-kind experience. We are committed to getting your business the
                            highest exposure possible on the most visited website: Google. It is important for the success of a business to have a
                            complete, professional, and cutting-edge online presence. Mass Interact
                            creates 360 virtual tours that go beyond what other tours provide. 
                        </p>
                        <p>
                            We believe in making your first impression so impressive that prospective customers can experience what makes your business special.
                            Interactive features engage your target audience and bring your business to life. Plus, our virtual tours are used across the most
                            crucial platforms - including Google Search, Google Maps, Google Pages, your website, Facebook and more. 
                        </p>
                        <p>
                            Mass Interact helps you add an entirely new dimension to your business. Literally. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
            </section>
            <section>
            <div className="container">
                <div className="row py-3">
                <div data-aos="flip-left" className="col-lg-6">
                    <div className="our-mission-vision">
                        <div className="our-mission-vision-padding">
                            <Image 
                            placeholder="blur" 
                            src={image2}
                            />
                            <h3>OUR MISSION</h3>
                            <p>
                                Mass Interact’s mission is to give your business a professional and cutting-edge online presence. Through our technology, photography, and virtual tours, we aim to increase your SEO, Google Rankings, customer confidence, and viewer experience to unprecedented levels. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div data-aos="flip-right" className="our-mission-vision">
                        <div className="our-mission-vision-padding">
                            <Image 
                            placeholder="blur" 
                            src={image3}
                            />
                            <h3>OUR VISION</h3>
                            <p>
                            We are an innovative 360 virtual tour company. Our vision is to help your business get the highest exposure possible across digital and social. Our goal is to provide unique and impactful experiences by creating virtual reality.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
      </section>
     
     );
}

export default AboutSection;

