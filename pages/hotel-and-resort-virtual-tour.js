import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import HotelVirtualTourSection from '../Components/HotelVirtualTours'
import OurSampleWork from './../Components/OurSampleWork'
import axios from 'axios'
// our-domain.com/Home
export default function HotelAndResortVirtualTour({json}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hotel And Resort Virtual Tour</title>
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
        <meta name="Hotel and Resort Virtual Tours | Mass Interact" content="Mass Interact provides best virtual tours for hotels and resorts. Allows your clients to take a tour of your hotel or resort before making a reservation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="Hotel & Resort Virtual Tour" />
        <HotelVirtualTourSection />
        <OurSampleWork name="SS" />
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