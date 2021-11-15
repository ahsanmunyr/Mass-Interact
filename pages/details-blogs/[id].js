import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import Link from 'next/link'
import axios from "axios";
import Head from 'next/head'
import Image from 'next/image'
import image1 from './../../Assets/about-us.jpg'
import { ToastContainer, toast } from 'react-toastify';
// import Popup from 'reactjs-popup';
// import ActiveLink from './ActiveLink';
// import blogs from './../Modal/blogs'
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faFolder, faUser, faCalendar, faTags, faArrowLeft, faFolderOpen  } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft, faLightbulb  } from "@fortawesome/free-regular-svg-icons";
function DetailBlog({lBlog, Tag, Category}) {

const [dataChange, setdataChange] = useState({})
const [blogID, setblogID] = useState(0)
const [categories, setCategories] = useState([])
const [tags, setTags] = useState([])
const [isPopoverOpen, setIsPopoverOpen] = useState(false)
const closeModal = () => setIsPopoverOpen(false);
const [token, onChangeToken] = useState(null)
const [file, onChangeFile] = useState(null)
const [message, onChangeMessage] = useState('Loading...')
const [messageTitle, onChangeMessageTitle] = useState('')
var router = useRouter()
const { id } = router.query
const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();


useEffect(() => {
   if(Category.success){
      //  a
      setCategories(Category.data)
   }
      setblogID(id)
      const func = () => axios.get(`https://webprojectmockup.com/custom/mass_interact/public/api/get_blog?id=${id}`)
            .then((response) => {
               if(response.data.success){
                  //  a(response.data.data)
                
                     //  a("AD")
                     if(response.data.data.details){
                        //  a("AD")
                        setdataChange(response.data.data.details[0])
                         setTags(response.data.data.tags)
                     }
                     
                  
                  // console.log(response.data.data);
               }
            
            })
            .catch((error)=>{
               console.log(error);
            });
      func();
      AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initclassNameName: 'aos-init', // className applied after initialization
            animatedclassNameName: 'aos-animate', // className applied on animation
            useclassNameNames: false, // if true, will add content of `data-aos` as classNamees on scroll
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
   }, [id]);


const onSubmit =  (data) => {
      const obj = {
         name: data.name , 
         email: data.email,
         message: data.message,
         website: data.url,
         blog_id: blogID,
      };
   
   if(data.name &&  data.email && data.message && data.url && blogID){
         axios.post('https://webprojectmockup.com/custom/mass_interact/public/api/blog_comment', obj)
         .then((response) => {
            reset()
         if(response.data.success){
            setIsPopoverOpen(true)
            onChangeMessage('Comment Successfully Posted')
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
         }
         }).catch(error => {
            setIsPopoverOpen(true)
            onChangeMessage("Network Error")
            onChangeMessageTitle('ERROR, Please Try Again')
            toast.error('Something went wrong!', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
         });
   }else{
      setIsPopoverOpen(true)
      onChangeMessage('Please fill out the following form.')
      onChangeMessageTitle('Warning')
   }
};

return (
      <div>
         <Head>
            { dataChange ?
                       <title>{dataChange.title}</title>: <title>no data</title>
            }
            <title>{dataChange.title}</title>
            <meta name="description"  content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
      <section>

{
   dataChange.title ?


   <>

      <div className="container4">
         <Image
                  alt='some value'
                  src={image1}
                  placeholder='blur'
                  height="700px"
                  width='3000px'
                  className='trust'
         />
         <div className="hoja">
               <h2>
                  <span  className="back-bigtext hotels-service trust-heads masthead"></span>
                  <span className="masthead">The Mass Interact Blog</span>
               </h2>
            </div>
      </div>
      <div className="container-1200 py-5">
         <div className="row">
         <div className="col-lg-9 px-2">
            <div data-aos="fade-up"  className="img-item blogImage">
            {
               dataChange.image ?
               
               <img  alt='some value' src={'https://webprojectmockup.com/custom/mass_interact/public/'+dataChange.image} />: 
               <img  alt='some value' src={'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'} />
            }
            </div>
            {
               dataChange.title ?
            <div data-aos="fade-up" className="head-text-blog">
               <h3>{dataChange.title}</h3>
               <span> <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faUser}></FontAwesomeIcon> {dataChange.consultant} </span>
               <span> <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faCalendar}></FontAwesomeIcon> {dataChange.date} </span>
               <span> <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faFolder}></FontAwesomeIcon> {dataChange.category_name} </span>
            </div>: null    
            }
            <div  data-aos="fade-up"  className="text-blogs">
            {
               dataChange.description ?
               <p>{dataChange.description}</p>: null
            }
            {
               dataChange.points ?
               <ol>
                  {
                     JSON.parse(dataChange.points).map((item, index)=>
                        <li  data-aos="fade-up"   key={index}><span>{item.title} – </span>{item.desc}</li>
                     )
                  }
               </ol>:null
            }
            {
            dataChange.summary ?
               <p  data-aos="fade-up" >{dataChange.summary}</p>: null
            }
            </div>
            {
               tags ?
               <div data-aos="fade-up"  className="tags-blogs pt-5">
               {
                     tags.map((item, index)=> 
                     <span key={index}>
                      <Link href="/tags/[id]" as={`/tags/${item.id}`}><a  href="#">{item.name} <FontAwesomeIcon color="white" style={{marginLeft: 5}} icon={faTags}></FontAwesomeIcon> </a> 
                     </Link>
                     </span>
                     )
               }
                  </div>
                  : null
            }
            <div className="prev-blog-post" id="section-bottom">
                  <p><a style={{textDecorationLine:'none'}} href="#" onClick={() => router.back()}><FontAwesomeIcon color="black" style={{marginLeft: 5}} icon={faArrowLeft}></FontAwesomeIcon> Back </a></p>
            </div>
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
            
            <div className="col-lg-3 px-2">
            <div className="row">
                  <div data-aos="fade-up" className="col-lg-12 col-md-6 px-2">
                        <div  className="recent-posts recent">
                           <h6>Recent-posts</h6>
                           {
                              lBlog.success ?
                              <ul>
                                 {
                                    (lBlog.data).map((item, index)=> 
                                    <span key={index} style={{
                                       display:'flex',
                                       flexDirection:'row'
                                    }}>
                                       <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5, marginTop: 5}} icon={faLightbulb}></FontAwesomeIcon> 
                                       <li  className='blogID'> 
                                             <Link    style={{ textDecoration: 'none' }}       
                                                            href="/details-blogs/[id]" 
                                                            as={`/details-blogs/${item.id}`}
                                                   >{item.title}
                                             </Link>
                                       </li>
                                    </span>
                                    )
                                 }
                              
                              </ul>: null
                           }
                        </div>
                  </div>
                  {
                     categories ?
                  
                  <div  data-aos="fade-up" className="col-lg-12 col-md-6 px-2">
                     <div className="recent-categories recent">
                        <h6>Categories</h6>
                        <ul>
                           {
                              categories.map((item, index)=>(
                                 <li key={index}  className='CategoriesBlog'><FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faFolderOpen}></FontAwesomeIcon> <Link href="/category/[id]" as={`/category/${item.id}`}  >{item.name}</Link></li>
                              ))
                           }
                        </ul>
                     </div>
                  </div>: null
                  }
               </div>
            </div>
         </div>
      </div>
  
   </>:<div style={{ 
                  height:'500px', 
                  width: '100%', 
                  display:"block", 
                  justifyContent:'center', marginTop: 100
               }}> <h1 style={{textAlign:'center'}}> No Data Found </h1> </div>
}

   </section>
</div>
   )
}

export default DetailBlog;


{/* <div data-aos="fade-up" className="blog-comments">
<form onSubmit={handleSubmit(onSubmit)}   className="form-inputs">
      <div className="row">
         <div className="col-lg-12 px-1">
            <h4>LEAVE A REPLY</h4>
              <p>Your email address will not be published. Required fields are marked *</p>
               <div style={{flexDirection:'row', display:'flex'}}>
               <span style={{color:'white', top: 1}}>*&nbsp;</span>
               <textarea type="text"  name="message"  placeholder="Message" {...register("message")}></textarea>
               </div>
         </div>
         <div  style={{flexDirection:'row', display:'flex'}} className="col-lg-4 col-md-6 col-12 px-1">
            <span style={{color:'white', top: 1}}>*&nbsp;</span>
            <input type="text" name="name" {...register("name")} placeholder="Enter Name"/>
         </div>
         <div   style={{flexDirection:'row', display:'flex'}}className="col-lg-4 col-md-6 col-12 px-1">
            <span style={{color:'white', top: 1}}>*&nbsp;</span>
            <input type="email" name="email" {...register("email")} placeholder="Enter Email Address"/>
         </div>
         <div  className="col-lg-4 col-md-6 col-12 mx-auto px-1">
            <input  type="url" name="url" {...register("url")} placeholder="Enter Website URL"/>
         </div>
   
         <div className="col-12 text-center my-3  px-1">
            <button type="submit" className="post-comment">Post Comment</button>
         </div>
      </div>
      </form>
   </div> */}