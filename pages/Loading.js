import React from "react";
import styles from "../styles/Loading.module.css";
import Image from 'next/image';
import PreLoader from './../Assets/preloader.gif'
function Loading(props) {
  return (
    <div style={{  display:'flex', background:'red', justifyContent:'center' }}>
      
         <Image
            src={PreLoader}
            // placeholder='blur'
            // height="700px"
            // width='3000px'
            // className='trust'
             />
  
    </div>
  );
}

export default Loading;