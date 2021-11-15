import image from './../Assets/about-us.jpg'
import image1 from './../Assets/banner/careearimage.jpg'
import image2 from './../Assets/banner/blogimages.jpg'
import image3 from './../Assets/banner/contactus.jpg'
import placeholder from './../Assets/placeholder.png'
import image4 from './../Assets/banner/GOLFVIRTUALTOUR.jpg'
import image5 from './../Assets/banner/customvirtuialtour.jpg'
import image6 from './../Assets/banner/campusvirtualtour.jpg'
import image7 from './../Assets/banner/3DVIRTUALMODLING.jpg'
import image8 from './../Assets/banner/videographyvirtualtour.jpg'
import image9 from './../Assets/banner/googlevirtualtours.jpg'
import image10 from './../Assets/banner/photographervirtualtour.jpg'
import image11 from './../Assets/banner/virtualhotel.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import React , {useEffect} from 'react'
import Image from 'next/image'
// import gsap from 'react-gsap'
// var id = document.querySelector(document)
// var querySelector = document.querySelector('#menu-toggler')
function Banner({heading}) {
  useEffect(() => {


  });
  return (
       <section>
         <div className="container4 ">
         {
            heading == "About Us" ?
            // <img src={image} className="trust"/>
            <Image
                alt='some value'
                src={image}
                placeholder='blur'
                height="700px"
                width='3000px'
                className='trust'
            />
            // <LazyLoadImage
            //    alt={image}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image} // use normal <img> attributes as props
            //    width='100%'
            // />
            : 
            heading == "Career" ?
            <Image
                src={image1}
                placeholder='blur'
                height="700px"
                width='3000px'
                className='trust'
            />
            // <LazyLoadImage
            //    alt={image1}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image1} // use normal <img> attributes as props
            //    width='100%'
            // />
            // <img src={image1} className="trust"/>
            : 
            heading == "Blog" ?
            // <img src={image2} className="trust"/>
            <Image
            src={image2}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image2}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image2} // use normal <img> attributes as props
            //    width='100%'
            // />
            : 
            heading == "Contact Us" ?
            // <img src={image3} className="trust"/>
            <Image
            src={image3}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image3}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image3} // use normal <img> attributes as props
            //    width='100%'
            // />
            :
            heading == "Campus Virtual Tour" ?
            // <img src={image6} className="trust"/>
            <Image
            src={image6}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image6}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image6} // use normal <img> attributes as props
            //    width='100%'
            // />
            : 
            heading == "Golf Virtual Tour" ?
            // <img src={image4} className="trust"/>
            <Image
            src={image4}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image4}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image4} // use normal <img> attributes as props
            //    width='100%'
            // />
            : 
            heading == "Google Virtual Tour" ?
            // <img src={image9} className="trust"/>
            <Image
            src={image9}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image9}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image9} // use normal <img> attributes as props
            //    width='100%'
            // />
            :
            heading == "Hotel & Resort Virtual Tour" ?
            // <img src={image11} className="trust"/>
            <Image
            src={image11}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image11}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image11} // use normal <img> attributes as props
            //    width='100%'
            // />
            : 
            heading == "Our Work Custom" ?
            // <img src={image5} className="trust"/>
            <Image
            src={image5}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image5}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image5} // use normal <img> attributes as props
            //    width='100%'
            // />
            : 
            heading == "PHOTOGRAHY" ?
            // <img src={image10} className="trust"/>
            <Image
            src={image10}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image10}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image10} // use normal <img> attributes as props
            //    width='100%'
            // />
            :
            heading == "3D Modeling VIRTUAL TOURS" ?
            // <img src={image7} className="trust"/>
            <Image
            src={image7}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
        //     <LazyLoadImage
        //        alt={image7}
        //        className='trust'
        //        threshold={400}
        //        effect='blur'
        //        placeholderSrc={placeholder}
        //        height='400px'
        //        src={image7} // use normal <img> attributes as props
        //        width='100%'
        //  />
            :
            heading == "VideoGraphy Virtual Tour" ?
            // <img src={image8} className="trust"/>
            <Image
            src={image8}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
        //     <LazyLoadImage
        //        alt={image8}
        //        className='trust'
        //        threshold={400}
        //        effect='blur'
        //        placeholderSrc={placeholder}
        //        height='400px'
        //        src={image8} // use normal <img> attributes as props
        //        width='100%'
        //  />
            :
            heading == "CUSTOM VIRTUAL TOURS" ?
            // <img src={image5} className="trust"/>
            <Image
            src={image5}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
        //     <LazyLoadImage
        //        alt={image5}
        //        className='trust'
        //        threshold={400}
        //        effect='blur'
        //        placeholderSrc={placeholder}
        //        height='400px'
        //        src={image5} // use normal <img> attributes as props
        //        width='100%'
        //  />
            : 
            <Image
            src={image}
            placeholder='blur'
            height="700px"
            width='3000px'
            className='trust'
             />
            // <LazyLoadImage
            //    alt={image}
            //    className='trust'
            //    threshold={400}
            //    effect='blur'
            //    placeholderSrc={placeholder}
            //    height='400px'
            //    src={image} // use normal <img> attributes as props
            //    width='100%'
            // />
           
         }
            {/* <img src={image} className="trust"/> */}
            <div className="hoja">
               <h2>
                  <span  className="back-bigtext hotels-service trust-heads masthead"></span>
                  <span className="masthead">{heading}</span>
               </h2>
            </div>
         </div>
      </section>
 
   
  );
}

export default Banner;
