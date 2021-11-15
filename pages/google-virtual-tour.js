import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import OurSampleWork from '../Components/OurSampleWork'
import GoogleVirtualTourSection from '../Components/GoogleVirtualTour'
// our-domain.com/Home
export default function GoogleVirtualTour() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Google Virtual Tour</title>
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
