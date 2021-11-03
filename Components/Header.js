
import React , {useEffect, useState} from 'react'
import { Nav ,Navbar  } from 'react-bootstrap';
import Link from 'next/link'
import styles from './../styles/Home.module.css'
import image from './../Assets/logo.png'
import image1 from './../Assets/Logos/OF.jpg'
import NCAA from './../Assets/Logos/L/NCAA.png'
import OFCCG from './../Assets/Logos/L/OFCG.jpg'
import image10 from './../Assets/Logos/NCAA.jpg'
import image2 from './../Assets/Logos/PL.jpg'

import WS from './../Assets/Logos/WSS.png'
import NW from './../Assets/Logos/NW.jpg'
import CCL from './../Assets/Logos/CCL.png'
import MS from './../Assets/Logos/MS.png'
import CC from './../Assets/Logos/CC.png'
import PCL from './../Assets/Logos/PCL.png'
import  NWWC from './../Assets/Logos/NWWC.png'
import  UWM from './../Assets/Logos/UWM.png'
import  VT from './../Assets/Logos/VT.png'
import  UOP from './../Assets/Logos/UOP.png'
import  WUS from './../Assets/Logos/WUS.png'
import Image from 'next/image'
import ActiveLink from './ActiveLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope,  } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

useEffect(() => {

    },[]);

const click = () => {
    setIsOpen(true);
    window.scrollTo(0, 0);
}
const onChangeClick = () =>{
    setIsOpen(false)
}
return(
    <Navbar sticky="top" expand="md" bg="white" className="navbar"  >
        <Link href="/">
                <Image
                    src={image}
                    alt="Picture of the author"
                    width={140}
                    height={90}
                />
        </Link>
        <div id="navbarScroll">
            <Nav  className="ml-auto menu nav-menu"
                    style={{ maxHeight: '500px' }}
                    navbarScroll
            >
                <li className="menu-item ">
                        <ActiveLink activeClassName="active" href="/">
                                <a className="nav-link header-heading">Home</a>
                        </ActiveLink>
                </li> 
                <li className="menu-item ">
                        <ActiveLink activeClassName="active" href="/about">
                                <a className="nav-link header-heading">About</a>
                        </ActiveLink>
                </li>
                <div className="dropdown-mega-menu">
                    <li className="menu-item-show ">
                        <a className="nav__link dropbtn-mega" id="hover_link" onClick={onChangeClick} >
                            {/* <i style={{fontSize: 30}} className="fas fa-bars d-b"></i> */}
                            <span className="d-b" >
                                    <FontAwesomeIcon color="white" style={{fontSize: '20px', marginTop: '0px', overflowY: 'hidden'}}   icon={faBars}></FontAwesomeIcon>
                            </span>
                            {/* <FontAwesomeIcon color="white"  size="30px" icon={faBars}></FontAwesomeIcon> */}
                            <span className="d-s service-and-work">
                                Service & Work 
                            </span>
                        </a>
                        { !isOpen ?
                        <div className="dropdown-content-mega-menu">
                            <div className="row w-100 mx-auto padding-mega-menu">
                            <div className="col-xl-2 col-lg-3 px-1 text-left">
                            <div className="categories-mega-link for-small-screen">
                                <h3>Menu</h3>
                                <ul>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/">
                                                <a id="hover_link" className="d-inline">Home</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/about">
                                                <a id="hover_link" className="d-inline">About Us</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/career">
                                                <a id="hover_link" className="d-inline">Careers</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/blog">
                                                <a id="hover_link" className="d-inline">Blog</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/contact">
                                                <a id="hover_link" className="d-inline">Contact</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/college-campus-virtual-tours">
                                                <a id="hover_link" className="d-inline">Campus Virtual Tour</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="row w-100 m-auto">
                            <div className="categories-mega-link p-0">
                            <h3>Our Service</h3>
                                <ul>
                                    <li>
                                        <ActiveLink activeClassName="active nav__link" href="/google-virtual-tour">
                                                <a onClick={click} className="nav__link" ><p id="hover_link" className="p-0 m-0">Google Virtual Tour</p></a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/hotel-and-resort-virtual-tour">
                                                <a onClick={click} className="nav__link" ><p id="hover_link" className="p-0 m-0">Hotel & Resort Virtual Tour</p></a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/golf-course-virtual-tour">
                                                <a onClick={click} className="nav__link" ><p id="hover_link" className="p-0 m-0">Golf Course Virtual Tour</p></a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/custom-virtual-tour">
                                                <a onClick={click} className="nav__link" ><p id="hover_link" className="p-0 m-0">Custom Virtual Tour</p></a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/photography">
                                                <a onClick={click} className="nav__link" ><p id="hover_link" className="p-0 m-0">Photography</p></a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div> 
                        <div className="col-xl-2 col-lg-3 px-1 categories-mega-link text-left">
                        <div className="categories-mega-link">
                        <h3>Our Work</h3>
                        <ul>
                                <li id="hover_link">
                                    <ActiveLink activeClassName="active nav__link" href="/education">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Education</p>
                                                </a>
                                    </ActiveLink>
                                </li>               
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/hospitality">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Hospitality</p>
                                                </a>
                                </ActiveLink>
                                </li>
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/auto">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Auto</p>
                                                </a>
                                </ActiveLink>
                                </li>
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/cultural">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Cultural</p>
                                                </a>
                                </ActiveLink>
                                </li>
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/health-and-wellness">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Health And Wellness</p>
                                                </a>
                                </ActiveLink>
                                </li>
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/real-estate">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Real Estate</p>
                                                </a>
                                </ActiveLink>
                                </li>
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/recreation">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Recreation</p>
                                                </a>
                                </ActiveLink>
                                </li>
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/restaurant">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Restaurant</p>
                                                </a>
                                </ActiveLink>
                                </li>
                                <li id="hover_link" >
                                <ActiveLink activeClassName="active nav__link" href="/retail">
                                                <a onClick={click} className="nav__link" >
                                                    <p id="hover_link" className="p-0 m-0">Retail</p>
                                                </a>
                                </ActiveLink>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 px-1 categories-mega-link text-center">
                            <h3 className="text-center">Custom Tours</h3>
                            <div className="row">
                                    <div className="col-lg-6 col-xl-6 px-0 for-headings-custom-tours">
                                        <div style={{display: 'flex'}}>
                                            <h6>Campus Virtual Tours</h6>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                            <div className="for-flexing">
                                                <a href="https://www.massinteract.com/marietta-college/" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                          <Image className="next-image" placeholder='blur' src={MS}/>
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>Marietta College </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                            <div className="for-flexing">
                                                <a href="https://massinteract.com/cambridge-college/" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                        <Image className="next-image" placeholder='blur' src={CC}/>
                                                   
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>Cambridge College</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                            <div className="for-flexing">
                                                <a href="https://www.massinteract.com/nw-mississippi-college/" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                    <Image className="next-image" placeholder='blur' src={NW}/>
                                                    
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>NW Mississippi College</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                            <div className="for-flexing">
                                                <a href="https://massinteract.com/covenant-college/" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                    <Image className="next-image" placeholder='blur' src={CCL}/>
                                                
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>Covenant College</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                            <div className="for-flexing">
                                                <a href="https://massinteract.com/westminster-college/" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                        <Image className="next-image" placeholder='blur' src={NWWC}/>
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>Westminster College</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="col-lg-6 col-xl-6 px-0 for-headings-custom-tours">
                                        <h6><br/></h6>
                                        <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                            <div className="for-flexing">
                                                <a href="https://massinteract.com/west-liberty-university/" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                    <Image className="next-image" placeholder='blur' src={UWM}/>
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>West Liberty University</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                                <div className="for-flexing">
                                                <a href="https://s3.amazonaws.com/vtvt/VTTOUR.html" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                        <Image className="next-image" placeholder='blur' src={VT}/>
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>VT Virginia Tech</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                                <div className="for-flexing">
                                                <a href="https://tourmkr.com/F1WZkO2CpT/7971185p&99.48h&99.03t" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                        <Image className="next-image" placeholder='blur' src={UOP}/>
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>University of Pittsburgh </p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                            <div className="for-flexing">
                                                <a href="https://www.massinteract.com/worcester-state-university/" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                        <Image className="next-image" placeholder='blur' src={WS}/>
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>Worcester State University</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                                <div className="for-flexing">
                                                <a href="https://tourmkr.com/F1webstervienna/10083034p&316.59h&98.03t" target="_blank">
                                                    <div className="img-size-mega-menu">
                                                        <Image className="next-image" placeholder='blur' src={WUS}/>
                                                    </div>
                                                    <div className="text-mega-menu-links">
                                                        <p>Webster University</p>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                    </div>  
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 px-1 categories-mega-link text-left">
                            <h3 className="text-left pt-2"></h3>
                            <br/>
                                <div className="colunm w-100 m-auto">
                                    <div className="col-lg-12 col-xl-12 px-0 for-headings-custom-tours" style={{textAlign:'left'}}>
                                            <div style={{display: 'flex'}}>
                                                <h6>Golf Tour & Events Tour</h6>
                                            </div>                                               
                                            <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                                <div className="for-flexing">
                                                <a href="https://tourmkr.com/F1CF4FoiCh/9488211p&11.08h&81.61t" target="_blank">
                                                <div className="img-size-mega-menu">
                                                        <Image className="next-image" placeholder='blur' src={NCAA}/>
                                                        </div>
                                                        <div className="text-mega-menu-links">
                                                            <p>NCAA Hall of Champions</p>
                                                        </div>
                                                </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                                <div className="for-flexing">
                                                    <a href="https://massinteract.com/olympia-fields-country-club/" target="_blank">
                                                        <div className="img-size-mega-menu">
                                                            <Image className="next-image" placeholder='blur' src={OFCCG}/>
                                                        </div>
                                                        <div className="text-mega-menu-links">
                                                            <p>Olympia Fields Country Club</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                                
                                    </div>
                                    <div className="col-lg-12 col-xl-12 px-0 for-headings-custom-tours" style={{textAlign:'left'}}>
                                        <h6>Hotels Tour</h6>                       
                                            <div className="col-xl-12 col-lg-12 col-md-12 px-1">
                                                <div className="for-flexing">
                                                    <a href="https://massinteract.com/the-phoenician-resort/" target="_blank">
                                                        <div className="img-size-mega-menu">
                                                            <Image className="next-image" placeholder='blur' src={PCL}/>
                                                        </div>
                                                        <div className="text-mega-menu-links">
                                                            <p>The Phoenician Resort</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>: null
                        }
                    </li>
                </div>
                <li className="menu-item ">
                        <ActiveLink activeClassName="active" href="/college-campus-virtual-tours">
                                <a className="nav-link header-heading">Campus Virtual Tour</a>
                        </ActiveLink>
                </li>
                <li className="menu-item ">
                        <ActiveLink activeClassName="active" href="/career">
                                <a className="nav-link header-heading">Careers</a>
                        </ActiveLink>
                </li>
                <li className="menu-item ">
                        <ActiveLink activeClassName="active" href="/blog">
                                <a className="nav-link header-heading">Blog</a>
                        </ActiveLink>
                </li>
                <li className="menu-item d-gayab-small">
                        <ActiveLink activeClassName="active" href="/contact">
                            <a className="nav__link order"  id="hover_link">
                                <button>GET STARTED</button>
                            </a>
                        </ActiveLink>
                </li>
                </Nav>
            </div>
    </Navbar>
    )
}

export default Header
