import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Head from "next/head";
import Image from "next/image"
import "nprogress/nprogress.css";
import { useEffect, useState } from 'react'
import Router from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import PreLoader from './../Assets/preloader.gif'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above





function MyApp({ Component, pageProps, data, testimonial }) {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const updateLoadingStatus = () => setIsLoading(!isLoading);

    Router.events.on("routeChangeStart", updateLoadingStatus);
    Router.events.on("routeChangeComplete", updateLoadingStatus);

    return () => {
      Router.events.off("routeChangeStart", updateLoadingStatus);
      Router.events.off("routeChangeComplete", updateLoadingStatus);
    };
  }, [isLoading]);

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


  return <> 
  <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous" 
          />
          {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"></script> */}
          </Head>
          {/* <TopProgressBar /> */}
         
             <Header/>
             <Component brands={data} test={testimonial} {...pageProps} />
             <Footer/>
           
         
        </>
}

MyApp.getInitialProps = async () => {
  const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_clients');
  const json = await res.json();
  const ress = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_testinomials');
  const jsonn = await ress.json();
  // console.log(json)
  return { data: json.data, testimonial: jsonn }
}



// MyApp.getInitialProps = async () => {
//   const res = await fetch('https://webprojectmockup.com/custom/mass_interact/public/api/get_testinomials')
//   const json = await res.json()
//   return { testim: json.data }
// }

export default MyApp

