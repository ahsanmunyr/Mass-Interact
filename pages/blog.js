import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlogSection from '../Components/Blogs'
import Banner from '../Components/Banner'

function Blogs({lBlog, Tag, Category}) {
  // console.log("ASDA", lBlog)
  return (
    <div className={styles.container}>
      <Head>
      <title>Mass Interact</title>
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

