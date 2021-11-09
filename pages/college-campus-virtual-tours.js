import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CampusVirtualTourSection from '../Components/CampusVirtualTour'
import Banner from '../Components/Banner'
import OurSampleWork from '../Components/OurSampleWork'
// our-domain.com/Home
export default function CollegeCampusVirtualTours() {
  return (
    <div>
      <Head>
        <title>College Campus Virtual Tours</title>
        <meta name="University and College Campus Virtual Tours | Mass Interact" content="Give a digital visual experience to your students with College Campus Virtual Tours. We provide 360 panoramic views and Virtual Tour for your University." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Banner heading="Campus Virtual Tour" />
        <CampusVirtualTourSection />
        <OurSampleWork name="CVTS" />
  
    </div>
  )
}
