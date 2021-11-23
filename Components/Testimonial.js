// import './../Styles/style.css';
import image from './../Assets/testimonial.jpg'
import image2 from './../Assets/testimonial-profile.png'

import dp1 from './../Assets/dp/1.jpg'
import dp2 from './../Assets/dp/2.jpg'
import dp3 from './../Assets/dp/3.jpg'
import dp4 from './../Assets/dp/4.jpg'
import dp5 from './../Assets/dp/5.jpg'
import dp6 from './../Assets/dp/6.jpg'
import Image from 'next/image'
import React , {useEffect, useState} from 'react'
import { Carousel  } from 'react-bootstrap';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
// import { Fade,Bounce,Slide  } from "react-awesome-reveal";
function Testimonials({data}) {
    const [index, setIndex] = useState(0);
    const [array, onChangeArray] = useState([]);


    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    useEffect(() => {
        // console.log(data, 's')
        if(data.success){
            onChangeArray(data.data)
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
   <div  style={{zIndex: 1, backgroundColor: 'white', position:'relative'}}  className="logosPadding">
    {
    array.length > 0 ?
    <>
    <div className='Testimonialss'> <h1 style={{  
        color:'white',
        textAlign:'center',
        }} className="testimonials-H">Testimonials</h1></div>
    <div className="testimonial-image">
    {/* about: "We are satisfied with our decision of choosing Mass"
    description: "We are satisfied with our decision of choosing Mass Interactive as our first choice for a visual campus tour. You were so consistent and focused and were fully dedicated to showing us the best end product. From being dedicated to shooting the virtual tour campus to being patient with our never-ending questions, Mass Interact sure proved themselves in the best way possible. I would highly recommend them"
    id: 1
    image_url: "upload/testinomials/6177caff76264.jpg"
    name: "New test" */}

    <Carousel activeIndex={index} onSelect={handleSelect}  interval={3000}>
    { array.map((item,index)=>
                <Carousel.Item key={index}>
                <div className="testimonials min-850" >
                        <Carousel.Caption className="testimonialContent" >
                        <div  style={{}}>
                            <p className="testimonials-texts">
                                {item.description}
                            </p>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-lg-12 mr-auto">
                                    <div className="d-flex">
                                        <div>
                                            {/* <Image src={dp1} className="testimonial-profile"  /> */}
                                            <img className="testimonial-profile" src={'https://webprojectmockup.com/custom/mass_interact/public/'+item.image_url} />
                                           
                                        </div>
                                    <div  className="testinomial-persons-name">
                                        <h6>{item.name}</h6>
                                        <p>{item.about}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Carousel.Caption>
                    </div>
            </Carousel.Item>
    )}
    </Carousel>

    </div>
    </>: null
    }
    </div>
);
}
// export async function getStaticProps () {
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_testinomials')
//   const json = await res.json()
//   console.log(json)
//   return { testim: json.data }
// }

export default Testimonials;