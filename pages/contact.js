import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContactUsSection from '../Components/ContactSection'
import Banner from '../Components/Banner'
// our-domain.com/Home
export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Mass Interact</title>
      <meta name="title" content="Mass Interact"/>
      <meta name="description" content="Want to hire the best people around to shoot, edit, and create your Google Business View 360º Virtual Tour? Call us today at (312) 257-2228"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="Contact Us" />
        <ContactUsSection/>
      </main>
    
    </div>
  )
}
