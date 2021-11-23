import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CareerSection from '../Components/CareerSection'
import CareerForm from '../Components/CareerForm'
import Banner from '../Components/Banner'
import axios from 'axios'
// our-domain.com/Home
export default function Career({jsons,json}) {
  return (
    <div className={styles.container}>
      <Head>
      <title>Mass Interact</title>
      {
          json.length > 0 ?
          <>
                  {console.log("WORKING")}
          <meta property="og:url" content={json[0].url} key="ogurl" />
          <meta property="og:site_name" content='Mass-Interact' key="ogsitename" />
          <meta name="title" content={json[0].title}/>
          <meta property="og:title" content={json[0].title} key="ogtitle" />
          <meta property="og:description" content={json[0].description} key="ogdesc" />
          <meta name="description" content={json[0].description}/>
          <meta name="url" content={json[0].url}/>
          <meta name="auther" content={json[0].author}/>
          <meta name="keywords" content={json[0].keywords}/>
          </>: null
      }
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
        <CareerForm data={jsons} />
      </main>
   
    </div>
  )
}

// export async function getStaticProps () {

//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/career_openings')
//   const json = await res.json()
//   return {
//     props: {
//       json
//     },
//   }
// }

export async function getServerSideProps (context) {

  // console.log(context.req.url, "SA")
  const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/career_openings')
  const jsons = await res.json()
  const response = await axios.post(`https://webprojectmockup.com/custom/mass_interact/public/api/get_metatags`,{
  url: context.req.url
    });
  // console.log(response.data.data[0])
  const json = response.data.data
  return {
    props: {
      jsons,json
    },
  }

}