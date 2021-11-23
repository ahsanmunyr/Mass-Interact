import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Testimonials from '../Components/Testimonial'
import Brands from '../Components/Brands'
import HomeSection from '../Components/HomeScreen'
import axios from 'axios'


import { ParallaxProvider } from 'react-scroll-parallax';
// our-domain.com/Home


export default function Home({brands, test, json}) {
  // console.log(json.length, '---------------------')
  return (
    <div className={styles.container}>
      <Head>
        <title>Mass Interact</title>

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
      


        {/* <meta name="title" content="Mass Interact"/>
        <meta name="description" content="Massinteract is the global leader and preferred Google Agency in creating custom virtual tours online!"/>
        <meta name="Virtual Tour Company | Virtual Tour Provider | Mass Interact" content="Mass Interact is Google trusted Virtual Tour Company Provides 360 Virtual Tour Solution for small to large size business. Schedule a Live Demo Today!" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ParallaxProvider>
            <HomeSection />
        </ParallaxProvider>
      </main>
        <Brands data={brands} />
        <Testimonials data={test}/>
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

// export async function getStaticProps () {

//   // const formData = new FormData();
//   // formData.append('url', 'massinteract');
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_metatags', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: {
//       url: 'massinteract'
//     },
//   });
//   const json = await res.json()
//   console.log(json, 'meta')
//   return {
//     props: {
//       json,
//     },
//   }
// }
