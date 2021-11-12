
import image from './../Assets/logo.png'
import React , {useEffect} from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Image from 'next/image'
import ActiveLink from './ActiveLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
function Footer() {
    const click = () => {
        window.scrollTo(0, 0)
    }
return (
    <footer  style={{backgroundColor:'black', zIndex: 1, position:'relative'}}>
        
    <div className="container">
    <div className="row py-5">
        <div className="col-lg-4 col-sm-6">
            <div className="footer-1">
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={150}
                    height={110}
                    placeholder='blur'
                />
                <p>We are committed to getting your business the highest exposure possible on the most visited website in the world: Google. It is vital to the success of any business to have a complete, professional, and cutting-edge online presence.</p>
            </div>
        </div>
        <div  className="col-lg-2 col-sm-4">
            <div className="footer-2">
                <h6>Quick Links</h6>
                <ul>
                        <ActiveLink activeClassName="active" href="/about">
                                                <a style={{textDecorationLine:'none'}} onClick={click} className="nav__link" >
                                                    <p className="footer-custom">About Us</p>
                                                </a>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/career">
                                                <a style={{textDecorationLine:'none'}} onClick={click} className="nav__link" >
                                                    <p className="footer-custom">Careers</p>
                                                </a>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/college-campus-virtual-tours">
                                                <a style={{textDecorationLine:'none'}} onClick={click} className="nav__link" >
                                                    <p className="footer-custom">Campus Virtual Tour</p>
                                                </a>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/contact">
                                                <a style={{textDecorationLine:'none'}} onClick={click} className="nav__link" >
                                                    <p className="footer-custom">Contact</p>
                                                </a>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/blog">
                                                <a style={{textDecorationLine:'none'}} onClick={click} className="nav__link" >
                                                    <p className="footer-custom">Blogs</p>
                                                </a>
                        </ActiveLink>
                        <ActiveLink activeClassName="active" href="/privacy-policy">
                                                <a style={{textDecorationLine:'none'}} onClick={click} className="nav__link" >
                                                    <p className="footer-custom">Privacy Policy</p>
                                                </a>
                        </ActiveLink>
                  {/* <Link  onClick={()=> window.scrollTo(0, 0)}   style={{color: 'white', marginBottom: 5}}  to="/about">About Us</Link>
                  <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white', marginBottom: 5}} to="/google-virtual-tour">Our Services</Link>
                  <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white', marginBottom: 5}} to="/hospitaility">Our Work</Link>
                  <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white', marginBottom: 5}}  to="/career">Careers</Link>
                  <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white', marginBottom: 5}}  to="/contact">Contact Us</Link>
                  <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white', marginBottom: 5}}  to="/blog">Blogs</Link>
                  <Link  onClick={()=> window.scrollTo(0, 0)}  style={{color: 'white', marginBottom: 5}} to="/privacypolicy">Privacy Policy</Link> */}
                  {/* <a href="https://www.bbb.org/us/il/schaumburg/profile/internet-marketing-services/mass-interact-0654-88488219/#sealclick" rel="noopener noreferrer" rel="nofollow">
                     <img src="https://seal-chicago.bbb.org/seals/blue-seal-150-110-whitetxt-bbb-88488219.png"  alt="Mass Interact BBB Business Review" />
                  </a> */}
                </ul>
             
             </div>
          </div>
          <div  className="col-lg-3 col-sm-6">
             <div className="footer-3">
         
                <h6>Working Hours</h6>
                <ul>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <FontAwesomeIcon color="#f65c2a" style={{marginTop:3}} icon={faClock}></FontAwesomeIcon>
                    <li style={{paddingLeft: 10}}>Mon to Sun<br/>8 AM to 8 PM</li>
                </div>
                <br/>
                   {/* <li>Sunday<br/>Photoshoots Only</li> */}
                </ul>
              
             </div>
          </div>
          
          <div  className="col-lg-3 col-sm-6">
             <div className="footer-4">
            
                <h6>Contact</h6>
                <ul>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <FontAwesomeIcon color="#f65c2a" style={{marginTop:3}} icon={faMapMarkerAlt}></FontAwesomeIcon>
                        <li style={{paddingLeft: 10}}>1375 E Woodfield Road,<br/> Suite 570 Schaumburg,<br/> IL 60173</li>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <FontAwesomeIcon color="#f65c2a" style={{marginTop:3}} icon={faPhoneAlt}></FontAwesomeIcon>
                        <li style={{paddingLeft: 10}}>(312) 257-2228</li>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <FontAwesomeIcon color="#f65c2a" style={{marginTop:3}} icon={faEnvelope}></FontAwesomeIcon>
                        <li style={{paddingLeft: 10}}>info@massinteract.com</li>
                    </div>
                </ul>
            </div>
        </div>
       </div>
       <div className="row py-5">
       <div className="col-lg-12 col-sm-6 text-center">
       <a href="https://www.bbb.org/us/il/schaumburg/profile/internet-marketing-services/mass-interact-0654-88488219/#sealclick" rel="noopener noreferrer">
                     <img src="https://seal-chicago.bbb.org/seals/blue-seal-150-110-whitetxt-bbb-88488219.png" style={{}}  alt="Mass Interact BBB Business Review" />
                     
                  </a> 
       </div>
       </div>
    </div>
 </footer>
   
  );
}

export default Footer;