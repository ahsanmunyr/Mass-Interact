import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutSection from '../Components/AboutSection'
import Banner from '../Components/Banner'
import Brands from '../Components/Brands'
import axios from 'axios'
// our-domain.com/Home
export default function About({brands, json,Abouts}) {
  // console.log(json.length, '------------------------')
  return (
    <div className={styles.container}>
      <Head>
      <title>About</title>
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
      {/* <meta name="title" content="Mass Interact"/>
      <meta name="description" content="Mass Interact is a Google-trusted agency that creates virtual and interactive tours. We help you optimize, differentiate, and convey your business through an immersive, one-of-a-kind experience. "/> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Banner heading="About Us"/>
          <AboutSection aboutss={Abouts} />
          <Brands data={brands} />
      </main>
    </div>
  )
}

// export async function getStaticProps () {
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/about')
//   const about = await res.json()
//   // const ress = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/latest_blogs')
//   // const jsons = await ress.json()
//   // console.log(json)
//   return {
//     props: {
//       about
//     },
//   }
// }

export async function getServerSideProps (context) {

  // console.log(context.req.url, "SA")
  const response = await axios.post(`https://webprojectmockup.com/custom/mass_interact/public/api/get_metatags`,{
  url: context.req.url
    });
  // console.log(response.data.data, "ABOUT PAGE")
  const json = response.data.data
 
    return {
      props: {
        json,
      },
    }
  

  // const json = response.data.data[0]
  // return {
  //   props: {
  //     json,
  //   },
  // }

}


