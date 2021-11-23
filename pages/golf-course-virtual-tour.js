import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import GolfVirtualTourSection from '../Components/GolfVirtualTour'
import OurSampleWork from '../Components/OurSampleWork'
import axios from 'axios'
// our-domain.com/Home
export default function GolfCourseVirtualTour({json}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Golf Course Virtual Tour</title>
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
        <meta name="Golf Course Virtual Tours | Mass Interact" content="Influence your customers with Golf Course Virtual Tours and bring them to your golf club. We provide 360 photography and Virtual Tour for your Golf clubs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="Golf Virtual Tour" />
        <GolfVirtualTourSection />
        <OurSampleWork name="GolfVTS" />
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