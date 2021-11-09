// import './../Styles/style.css';
// import left from './../Assets/home/Left.png'
import centre from './../Assets/home/home-main.png'
// import right from './../Assets/home/Right.png'
import React , {useEffect, useState} from 'react'
// import { Fade, Bounce,Slide, Zoom  } from "react-awesome-reveal";
// import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
// import {  ScrollTrigger } from "gsap/all";
import gsap from "gsap";
const MultiImages=()=>{

    useEffect(() => {
        gsap.from(".frame", {
            duration:3, scale: 1.05, 
            scrollTrigger: {
                trigger:".frame",
                // transform:"scale(1.2)",
                scrub:true,
                // markers:true,
                start:"top 100%", //when top of herman passes 75% viewport height
                end:"bottom 15%", //when bottom of herman passes 25% viewport height
                
                    //events: onEnter onLeave onEnterBack onLeaveBack
                toggleActions:"restart none none  repeat",
                // options:'reverse'
                    //options: play, pause, resume, reset, restart, complete, reverse,none
            }
        }) 

        // gsap.to(".frame", {
        //     duration:1,scale: 1.5, 
        //     scrollTrigger: {
        //         trigger:".frame",
        //         // markers:true,
        //         start:"top 75%", //when top of herman passes 75% viewport height
        //         end:"bottom 25%", //when bottom of herman passes 25% viewport height
                
        //             //events: onEnter onLeave onEnterBack onLeaveBack
        //         toggleActions:"restart none none reset"
        //             //options: play, pause, resume, reset, restart, complete, reverse,none
        //     }
        // }) 

        // gsap.from(".frameRight", {
        //     duration:2,  x:100,
        //       scrollTrigger: {
        //         trigger:".frameRight",
        //         // markers:true,
        //         start:"top 90%", //when top of herman passes 75% viewport height
        //         end:"bottom 45%", //when bottom of herman passes 25% viewport height
                
        //              //events: onEnter onLeave onEnterBack onLeaveBack
        //         toggleActions:"restart none none reset"
        //             //options: play, pause, resume, reset, restart, complete, reverse,none
        //       }
        //   }) 

          gsap.to(".frameRight", {
            duration:2, x: -460,
              scrollTrigger: {
                trigger:".frameRight",
                // markers:true,
                start:"top 75%", //when top of herman passes 75% viewport height
                end:"bottom 25%", //when bottom of herman passes 25% viewport height
                
                     //events: onEnter onLeave onEnterBack onLeaveBack
                toggleActions:"restart none none reset"
                    //options: play, pause, resume, reset, restart, complete, reverse,none
              }
          }) 
        //   gsap.from(".frameLeft", {
        //     duration:2, x:-100,
        //       scrollTrigger: {
        //         trigger:".frameRight",
        //         // markers:true,
        //         start:"top 90%", //when top of herman passes 75% viewport height
        //         end:"bottom 45%", //when bottom of herman passes 25% viewport height
                
        //              //events: onEnter onLeave onEnterBack onLeaveBack
        //         toggleActions:"restart none none reset"
        //             //options: play, pause, resume, reset, restart, complete, reverse,none
        //       }
        //   }) 

          gsap.to(".frameLeft", {
            duration:2, x: 460,
              scrollTrigger: {
                trigger:".frameRight",
                // markers:true,
                start:"top 75%", //when top of herman passes 75% viewport height
                end:"bottom 25%", //when bottom of herman passes 25% viewport height
                
                     //events: onEnter onLeave onEnterBack onLeaveBack
                toggleActions:"restart none none reset"
                    //options: play, pause, resume, reset, restart, complete, reverse,none
              }
          }) 


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
    <div style={{zIndex: 1, backgroundColor: 'white', position:'relative'}}>
      <div  className="threeImages">
              <div className="image-scroll col-lg-12" style={{
                          display: 'flex',
                          justifyContent: 'center'
                      }}>
                    {/* <Image alt='some value' className="frame img-home-3" data-scroll-zoom src={centre} /> */}
                    <img className="frame img-home-3" data-scroll-zoom src='https://webprojectmockup.com/custom/mass_interact/public/assets/images/home-main.png' />
            </div>
      </div>
    </div>
    
  );
}
// gsap.registerPlugin(ScrollTrigger); 
export default MultiImages;


