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
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Banner heading="Campus Virtual Tour" />
        <CampusVirtualTourSection />
        <OurSampleWork name="CVTS" />
  
    </div>
  )
}
