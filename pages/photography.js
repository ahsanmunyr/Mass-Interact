import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import PhotographySection from '../Components/PhotographySection'
import OurSampleWork from '../Components/OurSampleWork'
import axios from 'axios'
// our-domain.com/Home
export default function GolfCourseVirtualTour() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photography</title>
        <meta name="360 Degree Photography | Professional Photography - Mass Interact" content="Our renowned photographers are experts in professional photography, still photography, 360 panoramas and aerial photography in United States." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="PHOTOGRAHY" />
        <PhotographySection />
        <OurSampleWork name="PGS" />
      </main>
    </div>
  )
}
