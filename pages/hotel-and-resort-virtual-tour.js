import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import HotelVirtualTourSection from '../Components/HotelVirtualTours'
import OurSampleWork from './../Components/OurSampleWork'
// our-domain.com/Home
export default function HotelAndResortVirtualTour() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hotel And Resort Virtual Tour</title>
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
