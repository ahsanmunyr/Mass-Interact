import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Banner from '../../../Components/Banner'
import axios from 'axios'
import { useRouter } from "next/router"
// import Education from '../Components/OurWork/Education'
import Testimonials from '../../../Components/Testimonial'
import { useEffect, useState } from 'react'
import OurWorkSection from '../../../Components/OurWorkSection'
// our-domain.com/Home
export default function DynamicComponent({test,json}) {
  const [array, onChangeArray] = useState([])
  //  a("SADSADSADSAD")
  var router = useRouter()
  const { id,name } = router.query
  useEffect(() => {
    axios.get(`https://webprojectmockup.com/custom/mass_interact/public/api/our_work/${id}`)
    .then((response) => {
     //  a(Id, "AHSAN")
       if(response.data.success){
        // console.log(response.data.data, "GGG")
        onChangeArray(response.data.data)
        //  a(response.data.data)
       }
    
    })
    .catch((error)=>{
       console.log(error);
    });
  },[id])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        {
          json.length > 0 ?
          <>
                  {console.log("WORKING")}
          <meta property="og:url" content={json[0].url} key="ogurl" />
          <meta property="og:site_name" content='Mass-Interact' key="ogsitename" />
          <meta name="title" content={json[0].title}/>
          <meta property="og:title" content={json[0].title} key="ogtitle" />
          <meta property="og:description" content={json[0].description} key="ogdesc" />
          <meta name="description" content={json[0].description}/>
          <meta name="url" content={json[0].url}/>
          <meta name="auther" content={json[0].author}/>
          <meta name="keywords" content={json[0].keywords}/>
          </>: null
        }
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      {/* <h1>A</h1> */}
        <Banner heading={name} />
          {/* <Banner heading="Education" />
          <Education/>
        
          <Testimonials data={test}  /> */}
   
          <OurWorkSection data={array} />
        
       
        <Testimonials data={test}  /> 
      </main>
    
    </div>
  )
}

export async function getServerSideProps (context) {

  const response = await axios.post(`https://webprojectmockup.com/custom/mass_interact/public/api/get_metatags`,{
  url: context.req.url
    });
  // console.log(response.data.data, "ABOUT PAGE")
  const json = response.data.data
 
    return {
      props: {
        json,
      },
    }
  
}