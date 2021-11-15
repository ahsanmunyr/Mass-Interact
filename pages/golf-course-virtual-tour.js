import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import GolfVirtualTourSection from '../Components/GolfVirtualTour'
import OurSampleWork from '../Components/OurSampleWork'
// our-domain.com/Home
export default function GolfCourseVirtualTour() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Golf Course Virtual Tour</title>
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
