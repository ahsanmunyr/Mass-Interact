
import image1 from './../Assets/home/Website-Banner.jpg'
import image2 from './../Assets/home/2.jpg'
import React , {useEffect, useState} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import gsap from "gsap";
import { useForm } from "react-hook-form";
import { default as NumberFormat } from 'react-number-format';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Parallax } from 'react-scroll-parallax';
import Imag from './../pages/Utils/img'
// for next.js
import Link from 'next/link'
import Image from 'next/image'
import ActiveLink from './ActiveLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope,  } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import MultiImages from './MultiImages';
import PlayVideo from './PlayVideo';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function HomeSection() {
   
   const [value, setValue] = useState(324234)
   const [isPopoverOpen, setIsPopoverOpen] = useState(false)
   const closeModal = () => setIsPopoverOpen(false);
   const [token, onChangeToken] = useState(null)
   const [message, onChangeMessage] = useState('Loading...')
   const [messageTitle, onChangeMessageTitle] = useState('')
   const [loading, onChangeLoading] = useState(false)
   const [imageloading, onChangeLoadingImage] = useState(false)
    useEffect(() => {


        AOS.init({
         disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
         startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
         initClassName: 'aos-init', // className applied after initialization
         animatedClassName: 'aos-animate', // className applied on animation
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

     const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
     const onSubmit =  (data) => {
  
      // this.props.onSubmit(recaptchaValue);
   
        const obj = { 
           name: data.name , 
           email: data.email,
           number: value.value,
           business: data.business,
           address: data.address,
           details: data.details
         };
         // console.log(obj)
   
         var bodyFormData = new FormData();
   
         bodyFormData.append('name', data.name);
         bodyFormData.append('email', data.email);
         bodyFormData.append('number', value.value);
         bodyFormData.append('business_name', data.business);
         bodyFormData.append('location', data.address);
         bodyFormData.append('description', data.details);
   
         // var d = new Date();
         // var n = d.getTime();
      if(value.value &&  data.email && data.name && data.details){
   
      
         if(!token){
            reset()
            // setIsPopoverOpen(true)
            // axios.post(`https://www.massinteract.com/send_email.php?ver=${n}`, obj)
            axios({
               method: "post",
               url: `https://webprojectmockup.com/custom/mass_interact/public/api/contact`,
               data: bodyFormData,
               headers: { "Content-Type": "x-www-form-urlencoded" },
             })
            .then(response => {
               // console.log("Status: ", response.status);
               // console.log("Data: ", response.data);
               setIsPopoverOpen(true)
               onChangeMessage('Your submission has been received and we will contact you soon.')
               onChangeMessageTitle('Thank You')
               toast.success('Message sent successfully', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
            }).catch(error => {
               setIsPopoverOpen(true)
               onChangeMessageTitle("Network Error")
               onChangeMessage('ERROR, Please Try Again')
               // console.error('Something went wrong!', error);
               // toast.error('Something went wrong!', {
               //    position: "top-right",
               //    autoClose: 5000,
               //    hideProgressBar: false,
               //    closeOnClick: true,
               //    pauseOnHover: true,
               //    draggable: true,
               //    progress: undefined,
               //    });
                  // setIsPopoverOpen(false)
            });
         }else{
            setIsPopoverOpen(true)
            onChangeMessageTitle("Error")
            onChangeMessage('Recaptcha Error')
            // toast.error('Recaptcha Error', {
            //    position: "top-right",
            //    autoClose: 5000,
            //    hideProgressBar: false,
            //    closeOnClick: true,
            //    pauseOnHover: true,
            //    draggable: true,
            //    progress: undefined,
            //    });
         }
      }else{
         setIsPopoverOpen(true)
         onChangeMessageTitle("Warning")
         onChangeMessage('Please fill out the following form.')
         // toast.warning('Please fill out the following form.', {
         //    position: "top-right",
         //    autoClose: 5000,
         //    hideProgressBar: false,
         //    closeOnClick: true,
         //    pauseOnHover: true,
         //    draggable: true,
         //    progress: undefined,
         //    });
      }
      };
   const contentStyle = {
         maxWidth: "600px",
         width: "90%"
       };
   
   function recaptchaVal(value) {
      onChangeToken(value)
      // console.log("Captcha value:", value);
    }
   const afterLoading = () => {
      onChangeLoadingImage(true)
    //   websiteLandingLoader(true)

   }
  return (
   <section>
     
      <section className="sec-5-home parallex-image">
         <img src={'https://webprojectmockup.com/custom/mass_interact/public/upload/'+'banner/img-1.jpg'}  className='parallex-image' />
      <div className='hoja'>
         
            <div className="centered trust-head" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent:'space-around',      
                  }}>
               <div className='bannerContent row'>
               <ToastContainer
                     position="top-right"
                     autoClose={5000}
                     hideProgressBar={false}
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                     style={{
                        position:'absolute',
                        zIndex: 99999,
                        marginTop: 0
            }}
            />
               <div className="col-sm-12 col-lg-6 center-md text-white text-left " >
                  <h2  className="masthead" style={{textAlign:'center', color:'white'}}> a globally trusted virtual tour provider</h2>
                  <h2 style={{ textAlign: 'center', flexDirection:'column', justifyContent:'center'}}>
                     <span style={{color: 'white'}} className="masthead">Let Google`s #1 Agency tell your virtual story</span>
                  </h2>
                  </div>
               <div className="col-sm-12 col-lg-6 form-horizontal form-white text-white text-left" >
               <section className="section-1">
                     <div className="form-class">
                        <div style={{paddingLeft: '20px'}}>
                        <h3>To Get Started, Schedule a Live Demo!</h3>
                        <p>Just fill in the form below and one of our Tour Specialists will contact you.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-inputs">
                           <div className="row" style={{width: '96%', justifyContent:'center',alignSelf:'center'}}>
                              <div className="col-lg-12" style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>*&nbsp;</span>
                                 <input type="text" name="name" placeholder="Full name" {...register("name")} />
                              </div>
                              <div className="col-lg-6 col-md-6 pr-1" style={{display:'flex', flexDirection:'row'}}>
                                 <span style={{color:'red'}}>*&nbsp; </span><input type="email"  name="email" placeholder="Email Address" {...register("email")} />
                              </div>
                              <div className="col-lg-6 col-md-6 pl-1" style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>*&nbsp;</span>
                                 {/* <input type="number" name="" placeholder="Number"/> */}
                                 <NumberFormat format="(###) ###-####" onValueChange={(e)=> setValue(e)}  name="number" allowEmptyFormatting mask="_" />        
                              </div>
                              <div className="col-lg-6 col-md-6 pr-1" style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>&nbsp; &nbsp;</span>
                                 <input  type="text" name="business" placeholder="Business Name" {...register("business")}/>
                              </div>
                              <div className="col-lg-6 col-md-6 pl-1" style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>&nbsp; &nbsp;</span>
                                 <input type="text" name="address" placeholder=" Location" {...register("address")}/>
                              </div>
                              <div className="col-lg-12" style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>*&nbsp;</span>
                                 <textarea  type="text"  name="details" placeholder="Details" {...register("details")}></textarea>
                              </div>
                              <div className="col-lg-12" style={{marginLeft: 11}}>
                                 <input className="my-input" name="Request A Quote" type="submit" />
                              <div style={{ }}  className="recaptcha-css ml-2">
                              <ReCAPTCHA
                                 onChange={recaptchaVal}
                                 // stoken
                                 sitekey="6LdzjpocAAAAAI_h98i0kQihQYk9MZTSQK5bJTnI"
                                 />
                              </div>
                              <Modal
                                    toggle={closeModal}
                                    isOpen={isPopoverOpen}
                                    className="modal-danger"
                                    contentClassName="bg-gradient-danger"
                                    >
                                          <div className=" modal-header">
                                             <h3 className=" modal-title" id="modal-title-notification">
                                                {messageTitle}
                                             </h3>
                                          </div>
                                          <div className=" modal-body">
                                             <div className=" py-3 text-center">
                                                <i className=" ni ni-bell-55 ni-3x"></i>                       
                                                <p>
                                                   {message}
                                                </p>
                                             </div>
                                          </div>
                                          <div className="modal-footer">
                                             <Button
                                                className=" text-white ml-auto"
                                                // color="link"
                                                onClick={closeModal}
                                                type="button"
                                             >
                                                Close
                                             </Button>
                                             </div>
                                          </Modal>
                              </div>
                           </div>
                        </form>
                     </div>
                  </section>
               </div>
               </div>
            </div>
         </div> 
      </section>
      <PlayVideo />
      <section className="sec-2-image">
         <div className="container">
            <div className="row">
               <div className="img-area img-sec-area-3 ">
                  <Image alt='some value' src={image2} className="img-home-2"  height="1000" width="1000"    />
               </div>
               <div className="col" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end'
               }}> 
               <div  className="col-lg-6 ml-auto">
                  <div className="about-mass home-sec-2">
                     <hr/>
                     <h1>CREATE AN INTERACTIVE AND IMMERSIVE EXPERIENCE</h1>
                     <p>
                        The virtual tour brings your school or business to life in a new and engaging way while increasing accessibility and reducing travel time. Reach prospective students or customers and give them access to important real-life details from the convenience of their home. 
                        <br/>
                        Our proprietary virtual tour software allows Mass Interact to replicate the pleasurable experience of visiting and walking through a campus or business location through video walks, 3D tours, and interactive 360-degree virtual tours.
                     </p>

                  </div>
               </div>
               <div  className="col-lg-6 ml-auto">
                  <div className="about-mass home-sec-2">
                     <hr/>
                     <h1>BRING YOUR CAMPUS TO LIFE IN A NEW WAY</h1>
                     <p>
                        Mass Interact takes prospective students on a virtual 360 tour of your campus. We bring your school to their screens with full access into the campus, buildings, and facilities, making it easy to explore what’s in store all from the comfort of their home. 
                     <br/>
                        Our advanced technology will help you reach a larger pool of potential students, increasing applications and conversions while reducing their travel time and costs
                     </p>
                  <ActiveLink activeClassName="active" href="/contact">
                        <button style={{color: 'white'}} className="btn-home">Learn More</button>
                  </ActiveLink>
                  </div>
               </div>
            </div> 
            </div>    
         </div>
      </section>
      <section className="sec-4-home" style={{zIndex: 1, backgroundColor: 'white', position:'relative', paddingTop: '80px'}} >
         <div className="container" style={{ backgroundColor: 'white', position:'relative'}}>
            <div>
               <div className="engagement-home text-center">
                  <h1>DIGITAL SOLUTIONS THAT DRIVE ENGAGEMENT</h1>
               </div>
            </div>
         </div>
      </section>
      <MultiImages />
   </section>
);
}

export default HomeSection
