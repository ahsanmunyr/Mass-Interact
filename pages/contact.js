import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContactUsSection from '../Components/ContactSection'
import Banner from '../Components/Banner'
import axios from 'axios'
// our-domain.com/Home
export default function Contact({json}) {
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



export async function getServerSideProps (context) {

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
  
}
