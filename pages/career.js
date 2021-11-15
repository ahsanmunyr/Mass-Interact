import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CareerSection from '../Components/CareerSection'
import CareerForm from '../Components/CareerForm'
import Banner from '../Components/Banner'
// our-domain.com/Home
export default function Career({json}) {
  return (
    <div className={styles.container}>
      <Head>
      <title>Mass Interact</title>
      <meta name="title" content="Mass Interact"/>
      <meta name="description" content="JOIN OUR TEAM
      Do you have a strong grip on the camera and have the skills to convert a local business or holistic campus site into appealing visuals?
      We are looking for you!
      Join our team to showcase your talent."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="Career" />
        <CareerSection  />
        <CareerForm data={json} />
      </main>
   
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/career_openings')
  const json = await res.json()
  return {
    props: {
      json
    },
  }
}