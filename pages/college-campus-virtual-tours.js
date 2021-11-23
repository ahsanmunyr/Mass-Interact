import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CampusVirtualTourSection from '../Components/CampusVirtualTour'
import Banner from '../Components/Banner'
import OurSampleWork from '../Components/OurSampleWork'
import axios from 'axios'
// our-domain.com/Home
export default function CollegeCampusVirtualTours({json}) {
  return (
    <div>
      <Head>
        <title>College Campus Virtual Tours</title>
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
        <meta name="University and College Campus Virtual Tours | Mass Interact" content="Give a digital visual experience to your students with College Campus Virtual Tours. We provide 360 panoramic views and Virtual Tour for your University." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Banner heading="Campus Virtual Tour" />
        <CampusVirtualTourSection />
        <OurSampleWork name="CVTS" />
  
    </div>
  )
}


export async function getServerSideProps (context) {

  // console.log(context.req.url, "SA")
  const response = await axios.post(`https://webprojectmockup.com/custom/mass_interact/public/api/get_metatags`,{
  url: context.req.url
    });
  // console.log(response.data.data[0])
  const json = response.data.data
  return {
    props: {
      json,
    },
  }

}