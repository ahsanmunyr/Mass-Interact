import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogSection from '../Components/Blogs'
import Banner from '../Components/Banner'
import axios from 'axios'

function Blogs({lBlog, Tag, Category, json}) {
  // console.log("ASDA", lBlog)
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
      <meta name="description" content="Tip, Tricks, and Industry Best Practices"/>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner heading="Blog" />
        <BlogSection  array1={lBlog} array2={Tag} array3={Category} />
      </main>

    </div>
  )
}

// Blogs.getInitialProps = async () => {
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/blog')
//   const json = await res.json()
//   return { data: json.data }
// }
export async function getServerSideProps (context) {

  // console.log(context.req.url, "SA")
  const response = await axios.post(`https://webprojectmockup.com/custom/mass_interact/public/api/get_metatags`,{
  url: context.req.url
    });
  // console.log(response.data.data[0])
  const json = response.data.data
  return {
    props: {
      json,
    },
  }

}
// export async function getStaticProps () {
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/blog')
//   const json = await res.json()
//   // const ress = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/latest_blogs')
//   // const jsons = await ress.json()
//   // console.log(json)
//   return {
//     props: {
//       json
//     },
//   }
// }
export default Blogs;
// export async function getStaticPropss () {
//   const res = await fetch('webprojectmockup.com/custom/mass_interact/public/api/latest_blogs')
//   const jsons = await res.json()
 
//   return {
//     props: {
//       jsons,
//     },
//   }
// }

