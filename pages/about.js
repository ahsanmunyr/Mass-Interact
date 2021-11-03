import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutSection from '../Components/AboutSection'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
// our-domain.com/Home
export default function About({brands}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Banner heading="About Us" />
          <AboutSection/>
          <Brands data={brands} />
      </main>
    </div>
  )
}

