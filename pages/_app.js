import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style.css';
import 'aos/dist/aos.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Head from "next/head";
import Image from "next/image"
import "nprogress/nprogress.css";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
// import PreLoader from './../Assets/preloader.gif'
import 'next-pagination/dist/index.css'
import PreLoader from './../Assets/preloader.gif'
// import Loading from './Loading'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above




const delay = 1;
function MyApp({ Component, pageProps, data, testimonial, latestBlogs,tags,categories }) {
  // console.log(latestBlogs)
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();
  const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const updateLoadingStatus = () => setIsLoading(!isLoading);

  //   Router.events.on("routeChangeStart", updateLoadingStatus);
  //   Router.events.on("routeChangeComplete", updateLoadingStatus);

  //   return () => {
  //     Router.events.off("routeChangeStart", updateLoadingStatus);
  //     Router.events.off("routeChangeComplete", updateLoadingStatus);
  //   };
  // }, [isLoading]);
  // useEffect(() => {
  //   const handleStart = (url) => {
  //     url !== Router.pathname ? setIsLoading(true) : setIsLoading(false);
  //   };
  //   const handleComplete = (url) => setIsLoading(false);

  //   Router.events.on("routeChangeStart", handleStart);
  //   Router.events.on("routeChangeComplete", handleComplete);
  //   Router.events.on("routeChangeError", handleComplete);
  // }, [Router]);

  // useEffect(() => {
  //   const handleRouteChangeError = (err, url) => {
  //     if (err.cancelled) {
  //       console.log(`Route to ${url} was cancelled!`)
  //     }
  //   }

  //   router.events.on('routeChangeError', handleRouteChangeError)

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeError', handleRouteChangeError)
  //   }
  // }, [])

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 380);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    // "homepage": "https://www.massinteract.com/",
    // "homepage": "https://webprojectmockup.com/mass/",
    []
  );



  return      <> 
                    <Head>
                            <title>Mass Interact</title>
                            <meta name="title" content="Mass Interact"/>
                            <meta name="description" content="Massinteract is the global leader preferred Google Agency in creating virtual tours online!"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <link
                              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                              integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                              crossOrigin="anonymous" 
                            />
                    </Head>
                    {
                      !show ?
                      <div style={{ display:'flex', justifyContent:'center', marginTop: 300}}><Image  src={PreLoader} /></div>
                      :
                      <>
                      <Header/>
                      <Component brands={data} test={testimonial} lBlog={latestBlogs} Tag={tags} Category={categories} {...pageProps} />
                      <Footer/>
                      </>
                    }
              </>
}

MyApp.getInitialProps = async () => {
  const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_clients');
  const json = await res.json();
  const ress = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_testinomials');
  const jsonn = await ress.json();
  const resss = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/latest_blogs')
  const jsonss = await resss.json()
  const ressss = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_tags')
  const jsonsss = await ressss.json()
  const resssss = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_category')
  const jsonssss = await resssss.json()
  // console.log(json)
  return { data: json.data, testimonial: jsonn, latestBlogs: jsonss, tags: jsonsss, categories: jsonssss }
}



// MyApp.getInitialProps = async () => {
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_testinomials')
//   const json = await res.json()
//   return { testim: json.data }
// }

export default MyApp

