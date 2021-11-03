import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Image from 'next/image'
import Link from 'next/link'
// import ActiveLink from './ActiveLink';
// import blogs from './../Modal/blogs'
import 'react-lazy-load-image-component/src/effects/blur.css';


function DetailBlog() {
    const [filteredData, setFilteredData] = useState([])
    var router = useRouter()
    const { id } = router.query
    // console.log("sdfsdf",router.query, "----------------------------------------------------------------------------------------", id)



    // const func = () =>{

    //     var blogData = []
    //     for(var i = 0; i < filteredData.length; i++ ){
    //         // alert("ASD")
    //        var obj = filteredData[i];
    //        if(obj.id == id ){
    //           console.log(obj)
    //         //   alert(id)
    //           blogData.push(obj)
    //        }else{
    //           setFilteredData("No Data Found")
    //        }
    //     }
    //     // console.log(blogData)
    //     setFilteredData(blogData)
    //  }

    useEffect(() => {
        var blogData = []
        for(var i = 0; i < blogs.length; i++ ){
            // alert("ASD")
           var obj = blogs[i];
           if(obj.id == id ){
              console.log(obj)
            //   alert(id)
              blogData.push(obj)
           }else{
              setFilteredData("No Data Found")
           }
        }
        // console.log(blogData)
        setFilteredData(blogData)
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
    }, []);

    return (
        <div key={id}>{id}</div>

    )
}

export default DetailBlog;