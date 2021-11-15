import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../Components/Banner'
import CustomVirtualTourSection from '../Components/CustomVirtualTour'
import OurSampleWork from '../Components/OurSampleWork'
// our-domain.com/Home
export default function CustomVirtualTour() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Virtual Tour</title>
        <meta name="Custom Virtual Tours for Businesses | Mass Interact" content="Allow your customers to explore your business with custom virtual tour. Mass Interact creates 360 customized virtual tours for your all kind of business." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="Campus Virtual Tour" />
        <CustomVirtualTourSection />
        <OurSampleWork name="CustomVTS" />
      </main>
    </div>
  )
}
