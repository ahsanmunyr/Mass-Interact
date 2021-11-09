import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Testimonials from '../Components/Testimonial'
import Brands from '../Components/Brands'
import HomeSection from '../Components/HomeScreen'
import { ParallaxProvider } from 'react-scroll-parallax';
// our-domain.com/Home
export default function Home({brands, test}) {
  // console.log(json, 'data')
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="Virtual Tour Company | Virtual Tour Provider | Mass Interact" content="Mass Interact is Google trusted Virtual Tour Company Provides 360 Virtual Tour Solution for small to large size business. Schedule a Live Demo Today!" />
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

// export async function getStaticProps () {
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_testinomials')
//   const json = await res.json()
//   // console.log(json)
//   return {
//     props: {
//       json,
//     },
//   }
// }
