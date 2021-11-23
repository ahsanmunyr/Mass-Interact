// import './../Styles/style.css';
import React , {useEffect,useState} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
// import ActiveLink from './ActiveLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt, faSearch, faUser, faCalendar, faFolderOpen, faFolder } from "@fortawesome/free-solid-svg-icons";
// import blogs from './../pages/Modal/blogs'
import 'react-lazy-load-image-component/src/effects/blur.css';
const APPURL = 'https://webprojectmockup.com/custom/mass_interact/public'


// https://webprojectmockup.com/custom/mass_interact/public/upload/blog_images/6177ccbc2e59e.png
function Category({ lBlog,Tag,Category}) {
   const [pageIndex, setPageIndex] = useState(1);
   const [apiCurrentPage, onChangeData] = useState({})
   const [obj, onChangeObj] = useState([])
   const [search, onChangeSearch]= useState('')
    var router = useRouter()
const { id } = router.query
    const [filteredData,setFilteredData] = useState([]);
    const [filteredData1,setFilteredData1] = useState([]);
    const [filteredData2,setFilteredData2] = useState([]);
    const [filteredData3,setFilteredData3] = useState([]);
  
    const handleSearch = (event) => {
      onChangeSearch(event.target.value)
       let value = event.target.value
      //  let result = [];
        let result = obj.filter((data) => {
       return data.title.search(value) != -1 || data.consultant.search(value) != -1 || data.date.search(value) != -1  || data.description.search(value) != -1
       });
      //  console.log(result)
       setFilteredData(result);
    }
 
  useEffect(() => {

   if(lBlog.success){
    //     a
      setFilteredData1(lBlog.data);
   }
   if(Tag.success){
    //  a
      setFilteredData2(Tag.data);
   }
   if(Category.success){
    //  a
      setFilteredData3(Category.data);
   }
   const func = () => axios.get(`https://webprojectmockup.com/custom/mass_interact/public/api/blog?category=${id}&page=${pageIndex}`)
            .then((response) => {
               if(response.data.success){
                  //  a
                  //  a(response.data.data.data)
                  onChangeData(response.data.data)
                  onChangeObj(response.data.data.data)
               }
            
            })
            .catch((error)=>{
               console.log(error);
            });
      func();
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
  },[id]);
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
                       <Link 
                       href="/details-blogs/[id]" as={`/details-blogs/${item.id}`}
                           >READ MORE</Link>
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
                                       <p  style={{margin: 3, color: '#f65c2a'}} className='tagsBlog' key={index}><Link href="/tags/[id]" as={`/tags/${item.id}`} >{item.name}</Link></p>
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



export default Category;