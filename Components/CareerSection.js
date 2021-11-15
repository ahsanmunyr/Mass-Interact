
import image from './../Assets/people.jpg'
import React , {useEffect, useState} from 'react'
import Image from 'next/image'
import ActiveLink from './ActiveLink';
function CareerSection() {
  useEffect(() => {

  },[]);
  return (
    <section>
        <div className="row pt-5">
            <div className="col-lg-8 mx-auto">
              <div className="join-team">
                <h3>JOIN <span> our Team </span></h3>
                <p>
                    Do you have a strong grip on the camera and have the skills to convert a local business or holistic campus site into appealing visuals? 
                    <br/>
                    We are looking for you! 
                    <br/>
                    Join our team to showcase your talent.
                </p>
              </div>
            </div>
            <Image
              placeholder='blur'
              src={image}
              className="our-team"
              width='3000'
              alt='some value'
              height='1500'
            />
            {/* <div className="container4">
                <div className="centered-button">
                    <ActiveLink activeClassName="active" href="/career">
                            <a onClick={()=> window.scrollTo(0, 1500)}   style={{color: 'white'}}> Join Now </a>
                    </ActiveLink>
                </div>
            </div> */}
        </div>
    </section>
  );
}

export default CareerSection;

