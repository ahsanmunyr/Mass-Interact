import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import OurSampleWork from '../Components/OurSampleWork'
import GoogleVirtualTourSection from '../Components/GoogleVirtualTour'
import axios from 'axios'
// our-domain.com/Home
export default function GoogleVirtualTour({json}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Google Virtual Tour</title>
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
        <meta name="Google Virtual Tour | Google 360 Virtual Tour – Mass Interact" content="Attract more customers, generate more leads through high-quality Google 360-degree virtual tours. Show your business virtual tour on Google map." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="Google Virtual Tour" />
        <GoogleVirtualTourSection/>
        <OurSampleWork name="GVTS" />
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