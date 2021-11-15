// import './../Styles/style.css';
import image1 from './../Assets/blog/blog1.jpg'
import image3 from './../Assets/blog/blog3.jpg'
import image4 from './../Assets/blog/blog4.jpg'
import image5 from './../Assets/blog/blog5.jpg'
import image6 from './../Assets/blog/blog6.jpg'
import Iframe from 'react-iframe'
import React , {useEffect,useState} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from 'next-pagination'
// import ActiveLink from './ActiveLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router"
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faSearch, faUser, faCalendar, faFolderOpen, faFolder } from "@fortawesome/free-solid-svg-icons";
// import blogs from './../pages/Modal/blogs'
import 'react-lazy-load-image-component/src/effects/blur.css';
const APPURL = 'https://webprojectmockup.com/custom/mass_interact/public'


// https://webprojectmockup.com/custom/mass_interact/public/upload/blog_images/6177ccbc2e59e.png
function BlogSection({array1,array2,array3}) {
   const [pageIndex, setPageIndex] = useState(1);
   const [apiCurrentPage, onChangeData] = useState({})
   const [obj, onChangeObj] = useState([])
   const [search, onChangeSearch]= useState('')
    const [filteredData,setFilteredData] = useState([]);
    const [filteredData1,setFilteredData1] = useState([]);
    const [filteredData2,setFilteredData2] = useState([]);
    const [filteredData3,setFilteredData3] = useState([]);
  

 
//     consultant: "Justwords Consultants"
// created_at: "2021-10-26T07:06:50.000000Z"
// date: "2021-10-26"
// description: "There was a time when school-going students depended solely on their parents’ discretion and decision when it was a matter of choosing the right institution. However, today, tech-savvy students, especially those who are ready for high school, explore their options as much as their parents. So, if you are wondering how to boost student enrollment at your high school this year, digital marketing is the way to go. From your website to social media pages to emails, everything needs to be aligned with what your prospective students like and need. Here are 5 tips that will help."
// id: 1
// image: "upload/blog_images/6177a90a9a04e.jpg"
// points: "[{\"title\":\"Remember that content will always be the king\",\"desc\":\"These days, students as well as their parents know the importance of making informed decisions. And good content can help with that. So, your website, blog, and even social media pages should have engaging, useful, original and updated content. And that doesn\\u2019t just mean plain text. Experiment with different content formats like images, videos, virtual tours, infographics, and even memes to attract students. School virtual tours are especially a good idea as they are immersive, super realistic and help students imagine what their actual experience will be like.\"},{\"title\":\"SEO is the key to ranking high\",\"desc\":\"Did you know that 75% of those who look for something on the internet don\\u2019t even go to the second page of the search results? This means that your school website must appear on the first page, to get maximum clicks. And search engine optimization or SEO is one of the best tips to boost student enrollment this way. Make sure your website loads fast, is well-formatted, and the content is easy to read (use headings and subheadings). Apart from creating high quality content regularly, also include the right keywords. But make sure you don\\u2019t stuff your site with keywords as it will defeat your purpose. Weave keywords into image descriptions, captions and alt texts too. Your website should be mobile-friendly as students or busy parents will want to check up on you on the go. Your contact information and social media buttons should be clearly featured on your site too.\"},{\"title\":\"Make the most of social media\",\"desc\":\"If you are wondering how to boost student enrollment through your Facebook, Twitter or Instagram pages, stay aware of the latest trends. Use visuals generously and introduce a fun element wherever possible. For example, user generated content clicks with potential students amazingly well, as they are honest. So, you can share videos where your current students talk about why they love your school. Or create videos of graduation ceremonies, reunions, sports events, and orientation days. To share updates in real time, go \\u201clive\\u201d on Twitter or Facebook. You can also create different groups on Facebook based on different study streams, sports, and extracurricular clubs. Since every student has a unique preference, this will give them a chance to find out if your school will suit them.\"},{\"title\":\"Tell a story they want to hear\",\"desc\":\"Storytelling is one of the top marketing strategies to increase student enrollment. This means, potential students or their parents don\\u2019t just want to know about your state-of-the-art facilities, stylish classrooms, or bright green grounds. They want to know about your vision and goals, how you pay attention to every student, whether they can pursue their future goals through your curriculum, how they can develop their social skills, and so on. Students want to find out if they will enjoy studying at your school, if you offer scholarships or financial aid, if the commute will be easy and if the neighborhood is safe. So, tell a story that covers how you started, how far you have come, how your past students have succeeded in life, and what you do to prepare students for the real world. A virtual tour can be particularly effective, if it shows how students at your school study, play and interact.\"},{\"title\":\"Keep communication crisp and effective\",\"desc\":\"One of the best ways to boost student enrollment is by keeping the communication channel easy and crisp. Apart from incorporating a chatbot on your site, you can communicate through emails, WhatsApp messages, and texts. Make sure students and parents can get in touch with someone from admissions or a student counselor. Keep messages or emails readable and subject lines easy to understand. Personalize the greeting and stick to the point. If you are sending marketing emails, don\\u2019t do it every day. And always add a call to action at the end of your message or email, so that students know what the next step is.\"}]"
// summary: "It is possible to boost student enrollment despite stiff competition when you have a smart strategy and can put the above tips to good use. And since digital marketing is so much about visual marketing, contact us at info@massinteract.com for amazing images, videos and virtual tours.\r\n\r\nBoost Student"
// tags: "[\"food\",\"cricket\",\"eat\",\"drink\",\"play\"]"
// title: "5 Digital Ways to Boost Student Enrollment at Your High School"
// updated_at: "2021-10-26T07:06:50.000000Z"
 
  useEffect(() => {
   // if(array.success){
   //    setFilteredData(array.data);
   // }
   if(array1.success){
      setFilteredData1(array1.data);
   }
   if(array2.success){
      setFilteredData2(array2.data);
   }
   if(array3.success){
      setFilteredData3(array3.data);
   }
   // setFilteredData(array);
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
  },[]);

  useEffect(()=>{
   axios.get(`https://webprojectmockup.com/custom/mass_interact/public/api/blog?page=${pageIndex}`)
   .then((response) => {
      if(response.data.success){
     
         //  a
         //  a(response.data.data.data[0].id)
         onChangeData(response.data.data)
         // setFilteredData(response.data.data.data)
         onChangeObj(response.data.data.data)
      }
   })
   .catch((rrr)=> console.log(rrr))
 },[pageIndex])

//  const pageChange = () => {
//     console.log("SADSA")
//     if(page)
//     onChangePage()
//  }

const handleSearch = (event) => {
   onChangeSearch(event.target.value)
   let value = event.target.value
   // let result = [];
   // console.log(value);
   let result = obj.filter((data) => {
   return data.title.search(value) != -1 || data.consultant.search(value) != -1 || data.date.search(value) != -1  || data.description.search(value) != -1
   });
   // console.log(result,"::::::::::::::::::::")
   setFilteredData(result);
}

  return (
    <section>
    <div className="container">
       <div className="row py-5">
             <div className="col-xl-8 col-lg-8 col-md-8 col-12 pl-3 ">
                        <div className="search-wrapper">
                           {/* <input type="text" name="" /> */}
                           <input id="searchFilter" type="text" onChange={(event) =>handleSearch(event)} placeholder="Search" />
                           <button disabled>
                              <FontAwesomeIcon color="white" style={{marginTop:3}} icon={faSearch}></FontAwesomeIcon>
                              {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                           </button>
                        </div>
            </div>
            {
            obj.length > 0 ?
          <div className="col-xl-8 col-lg-8 col-md-8 col-12 pl-2">
        {/* filteredData */}
         {
            (search == '' ? obj : filteredData).map((item, index)=>(
               <div className="my-5" key={index}>
                <div data-aos="fade-up-right"  className="img-item blogImage">
                   <img src={'https://webprojectmockup.com/custom/mass_interact/public/'+item.image} />
                  {/* {console.log(item.image)} */}
                 
                </div>
                <div  data-aos="fade-up" className="aside">
                   <div className="text-main">
                      <h5>{item.title}</h5>
                   </div>
                   <div className="about-img-item">
                      <div className="seen-comments">
                         <span > <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faUser}></FontAwesomeIcon> {item.consultant}  </span>
                         <span > <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faCalendar}></FontAwesomeIcon> {item.date} </span>
                         <span > <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faFolder}></FontAwesomeIcon> {item.category_name} </span>
                         {/* <span > <FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faTags}></FontAwesomeIcon> 
                        {  
                           JSON.parse(item.tags).reduce((acc,item)=>{
                           acc=acc+item+", "
                           return acc
                        }," ")}
                          </span> */}
                      </div>
                   </div>
                </div>
                <div data-aos="fade-right" className="text-main">
                   <p>
                   {item.description}
                  </p>
                </div>
                <div data-aos="fade-right" className="button-blog">
                    <button> 
                       <Link href="/details-blogs/[id]" as={`/details-blogs/${item.id}`}>READ MORE</Link>
                    </button>
                </div>
             </div>
            ))
         }
          </div>:  
               <div className="col-xl-8 col-lg-8 col-md-8 col-12 py-5 ">
                        <div className="text-main">
                           <h1>No Data Found</h1>
                        </div>
               </div>
            }
          <div className="col-xl-4 col-lg-4 col-md-4 ">
          <div className="recent-categories recent">
                <h6>Latest Post</h6>
                {
                filteredData1.map((item, index)=>(
           
                  <div key={index} data-aos="zoom-in" className="inner-post">

                     <>
                        <div className="post-image blogImage">
                        <img src={'https://webprojectmockup.com/custom/mass_interact/public/'+item.image} />
                        </div>
                        <div className="post-des">
                           <p className='textLimit'> {item.title}</p>
                           <span > <FontAwesomeIcon color="#f65c2a" icon={faCalendar}></FontAwesomeIcon> {item.date} </span>
                        
                        </div>
                     </>
                  </div>
            
              
                ))
                }
                
             </div>
            <div  data-aos="fade-up" className="col-lg-12 col-md-6 px-2">
            <div className="recent-categories recent">
                  <h6>Follow Us</h6>
                  <div className="follow-btn ">
                     <span  className="m-1" >
                        <a href="https://www.facebook.com/massinteract/"  rel="noopener noreferrer">
                           <FontAwesomeIcon color="#f65c2a" icon={faFacebook}></FontAwesomeIcon>
                        </a>
                     </span>
                     <span  className="m-1" >
                        <a href="https://twitter.com/massinteract/" rel="noopener noreferrer">
                           <FontAwesomeIcon color="#f65c2a" icon={faTwitter}></FontAwesomeIcon>
                        </a>
                     </span>
                     <span  className="m-1" >
                        <a href="https://www.linkedin.com/company/massinteract" rel="noopener noreferrer">
                           <FontAwesomeIcon color="#f65c2a" icon={faLinkedin}></FontAwesomeIcon>
                        </a>
                     </span>
                     <span  className="m-1" >
                        <a href="https://www.instagram.com/massinteract/" rel="noopener noreferrer">
                           <FontAwesomeIcon color="#f65c2a" icon={faInstagram}></FontAwesomeIcon>
                           </a>
                     </span>
                  </div>
               </div>
            </div>
            {
               filteredData2.length > 0 ?
               <div  data-aos="fade-up" className="col-lg-12 col-md-6 px-2">
                        <div className="recent-categories recent">
                           <h6>Tags</h6>
                           <div className="inner-tags">
                                 {
                                    filteredData2.map((item, index)=>(
                                       <p key={index}  style={{margin: 3, color: '#f65c2a'}} className='tagsBlog' ><Link href="/tags/[id]" as={`/tags/${item.id}`} >{item.name}</Link></p>
                                    ))
                                 }
                           </div>
                        </div>
               </div>: null
            }
            {           
               filteredData3.length > 0 ?
            <div  data-aos="fade-up" className="col-lg-12 col-md-6 px-2">
                     <div className="recent-categories recent">
                        <h6>Categories</h6>
                        <ul>
                           {
                                    filteredData3.map((item, index)=>(
                                       <li key={index}  className='CategoriesBlog'><FontAwesomeIcon color="#f65c2a" style={{marginLeft: 5}} icon={faFolderOpen}></FontAwesomeIcon> <Link href="/category/[id]" as={`/category/${item.id}`}  >{item.name}</Link></li>
                                    ))
                           }
                        </ul>
                     </div>
            </div>: null
            }
             </div>
               <div style={{
                  width: '100%',
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'space-between'
               }}>
               
                  <div data-aos="fade-right" className="button-blog">
                  <button onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex == 1 ? true : false}  >
                    
                     <Link href="" >Previous</Link> 
                  </button>
                  </div>

                  <div data-aos="fade-right" className="button-blog">
                  <button onClick={() => setPageIndex(pageIndex + 1)} disabled={pageIndex == apiCurrentPage.last_page ? true : false}><Link href=""  >Next</Link></button>
               </div>
            </div>
          </div>
      
    </div>
  
 </section>
   
  );
}



export default BlogSection;