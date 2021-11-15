// import { useRouter } from "next/router"
// import React , {useEffect,useState} from 'react'
// import 'aos/dist/aos.css'; 
// import AOS from 'aos';
// import Image from 'next/image'
// import Link from 'next/link'
// // import ActiveLink from './ActiveLink';
// import blogs from './Modal/blogs'
// import 'react-lazy-load-image-component/src/effects/blur.css';


// function DetailBlog() {
//     const [filteredData,setFilteredData] = useState([
//         {
//            id: 1,
//            date: 'July 13, 2021',
//            file: 'Virtual Tours',
//            auther: 'Justwords Consultants',
//            img: require('./../Assets/blog/blog0.jpg'),                                                          
//            title: "5 Digital Ways to Boost Student Enrollment at Your High School",
//            topDescription: `There was a time when school-going students depended solely on their parents’ discretion and decision when it was a matter of choosing the right institution. However, today, tech-savvy students, especially those who are ready for high school, explore their options as much as their parents. So, if you are wondering how to boost student enrollment at your high school this year, digital marketing is the way to go. From your website to social media pages to emails, everything needs to be aligned with what your prospective students like and need. Here are 5 tips that will help.`,
//            points: [
//                {no: 1, heading: 'Remember that content will always be the king', des: 'These days, students as well as their parents know the importance of making informed decisions. And good content can help with that. So, your website, blog, and even social media pages should have engaging, useful, original and updated content. And that doesn’t just mean plain text. Experiment with different content formats like images, videos, virtual tours, infographics, and even memes to attract students. School virtual tours are especially a good idea as they are immersive, super realistic and help students imagine what their actual experience will be like.'},
//                {no: 2, heading: 'SEO is the key to ranking high', des: 'Did you know that 75% of those who look for something on the internet don’t even go to the second page of the search results? This means that your school website must appear on the first page, to get maximum clicks. And search engine optimization or SEO is one of the best tips to boost student enrollment this way. Make sure your website loads fast, is well-formatted, and the content is easy to read (use headings and subheadings). Apart from creating high quality content regularly, also include the right keywords. But make sure you don’t stuff your site with keywords as it will defeat your purpose. Weave keywords into image descriptions, captions and alt texts too. Your website should be mobile-friendly as students or busy parents will want to check up on you on the go. Your contact information and social media buttons should be clearly featured on your site too.'},
//                {no: 3, heading: 'Make the most of social media', des: 'If you are wondering how to boost student enrollment through your Facebook, Twitter or Instagram pages, stay aware of the latest trends. Use visuals generously and introduce a fun element wherever possible. For example, user generated content clicks with potential students amazingly well, as they are honest. So, you can share videos where your current students talk about why they love your school. Or create videos of graduation ceremonies, reunions, sports events, and orientation days. To share updates in real time, go “live” on Twitter or Facebook. You can also create different groups on Facebook based on different study streams, sports, and extracurricular clubs. Since every student has a unique preference, this will give them a chance to find out if your school will suit them.'},
//                {no: 4, heading: 'Tell a story they want to hear', des: ' Storytelling is one of the top marketing strategies to increase student enrollment. This means, potential students or their parents don’t just want to know about your state-of-the-art facilities, stylish classrooms, or bright green grounds. They want to know about your vision and goals, how you pay attention to every student, whether they can pursue their future goals through your curriculum, how they can develop their social skills, and so on. Students want to find out if they will enjoy studying at your school, if you offer scholarships or financial aid, if the commute will be easy and if the neighborhood is safe. So, tell a story that covers how you started, how far you have come, how your past students have succeeded in life, and what you do to prepare students for the real world. A virtual tour can be particularly effective, if it shows how students at your school study, play and interact.'},
//                {no: 5, heading: 'Keep communication crisp and effective', des: 'One of the best ways to boost student enrollment is by keeping the communication channel easy and crisp. Apart from incorporating a chatbot on your site, you can communicate through emails, WhatsApp messages, and texts. Make sure students and parents can get in touch with someone from admissions or a student counselor. Keep messages or emails readable and subject lines easy to understand. Personalize the greeting and stick to the point. If you are sending marketing emails, don’t do it every day. And always add a call to action at the end of your message or email, so that students know what the next step is.'},
//            ],
//            endDescription: 'It is possible to boost student enrollment despite stiff competition when you have a smart strategy and can put the above tips to good use. And since digital marketing is so much about visual marketing, contact us at info@massinteract.com for amazing images, videos and virtual tours.',
//            tag: [
//              'Boost Student EnrollmentSchools', 'Virtual Tours', 'Student Enrollment'
//            ]
//          },
//          {
//              id: 2,
//              date: 'June 22, 2021',
//              file: 'Virtual Tours',
//              auther: 'Justwords Consultants',
//              img: require('./../Assets/blog/blog1.jpg'),                                                      
//              title: "5 Reasons Why 360 Virtual Tours are a Must for Campus Marketing",
       
//              topDescription: `Anyone dabbling with modern-age marketing knows that ‘seeing is believing’ for customers. So, if you are looking for brilliant campus marketing ideas, know that this proverb holds true here as well. This is the reason why so many institutions have started using 360 virtual tours to bring in more students or boost enrolment. These are way more effective than still images or the usual videos you knew about till now. Reason? Well, they are super realistic, immersive, interactive, and engaging. So, if you are still not sure whether you should go for these tours to market your campus, here are 5 reasons that will convince you.`,
//              points: [
//                  {no: 1, heading: 'Better visibility', des: 'The biggest benefit of virtual tour campus marketing is that it improves your brand awareness significantly. Why? By incorporating a virtual tour on your website and business listings, you stand a good chance of ranking higher on Google. That is because, more people will find your content relevant and useful, and the click-through rate will shoot up. Plus, when prospective students spend more time on your site while taking the tour, Google will consider your site to be rich in information. Gradually, your local search rank will go up.'},
//                  {no: 2, heading: 'Easy to share', des: 'After creating a virtual college tour, you can not only share it on your website, but also on your social media pages and even marketing emails. It is also easy to circulate the link to your tour through messaging apps. Plus, when students like what they see, they can easily re-share the tour with their peers or parents. This leads to better visibility, brand awareness and even recall.'},
//                  {no: 3, heading: 'Smarter decision-making', des: 'The thing about virtual tours is that they help give potential applicants a clear picture about your college, be it about the aesthetics, design, programs, faculty, extracurricular activities, or facilities. You can highlight the best aspects of your institution through college virtual tour marketing, be it a swanky library, beautifully manicured lawns, spotless residence halls, state of the art lecture rooms or something else. Plus, you can include snippets of past students talking about why they love your college and how it has helped them bag a great job offer or a famous sports scholarship. All these nuggets of information can help a prospective student make a decision or pick you over others.'},
//                  {no: 4, heading: 'Saves money and time', des: 'There is no doubt about the fact that the current pandemic has made it almost impossible to make in-person visits even if students want to explore their dream colleges up close. Safety is at a huge risk here. Luckily, 360 virtual tours make up amazingly well for physical visits and make the experience as normal as possible for applicants. However, even if the pandemic was not in the picture, it can be challenging for many students to spend a lot of money or time to visit multiple colleges individually and compare them. Virtual tours address these pain points effectively and let them find out all about your college from the comfort of their home, for free.'},
//                  {no: 5, heading: 'Lends competitive edge', des: ' 360 virtual tours campus marketing is also a wonderful way to stay ahead of your competition, especially if they are not yet doing it. When you offer potential students something so exciting and visual, they won’t have to consume and process a lot of plain text or mundane information. And this will help them when they are on the go too. By inserting powerful calls to action buttons like “Apply Now”, “Contact a Student Guide”, “Schedule a visit” and such, you can drive more conversions too and make sure that more students try your college rather than others. Also, 360 tours are a great way to connect with Gen Z and show them that you are aware of their preferences and can meet their needs perfectly.'},
//              ],
//              endDescription: 'So, what are you waiting for? Get ready to put together an information-rich and super engaging college virtual tour that attracts and converts. Email us at info@massinteract.com if you need some guidance or a professional touch.',
//              tag: [
//                'Boost Student EnrollmentSchools', 'Virtual Tours', 'Student Enrollment'
//              ]
//            },
//            {
//              id: 3,
//              date: 'June 19, 2021',
//              file: 'Virtual Tours',
//              auther: 'Justwords Consultants',
//              img: require('./../Assets/blog/blog2.jpg'),                                                         
//              title: "6 Tips To Hire the Perfect Virtual Tour Photographer",
       
//              topDescription: `Though virtual tour photography is a relatively new concept in the world of digital marketing, compared to images, videos, or illustrations, it is catching on fast. 360 virtual tours of any business with a physical presence, be it a bar, café, golf course, hotel, school, or college, can offer potential customers a unique, engaging, and immersive experience. These tours can drive decision-making, keep you ahead of competitors, and even boost your ranking on Google’s search results page. Google, in fact, loves virtual tours, or it wouldn’t offer its Google Street View feature to help businesses create tours quickly and easily. Now, since many businesses are jumping on the virtual tour bandwagon these days, you must do your best to survive and thrive. And for that, an amateur photographer who has just started dabbling with virtual tours, won’t do the trick. So, how do a hire a virtual tour photographer who is a professional and knows exactly what they are doing? Here are some tips.`,
//              points: [
//                  {no: 1, heading: 'Check whether they understand your objective', des: 'The virtual tour photographer you pick should ideally have been in business for quite some time. While a newbie might have the technical knowhow and creativity needed for a good job, they will probably lack sufficient industry experience. So, based on your business and need, you need to take a call. Remember that someone who knows exactly what works for your industry or what kind of tour will beat your competitors, can give you better results. Also, request for a portfolio of projects they have done before and decide if you like what you see.'},
//                  {no: 2, heading: 'Check if their technical skills are adequate', des: 'Creating a smashing virtual tour requires the photographer to be technically sound. They should have thorough knowledge about camera settings, composition, exposure and lenses. Expert Google virtual tour photographers know when to use what, and can easily decide on aspects like vantage point, staging of the location, time of day for the shoot, duration of the shoot, and delivery timeline of the final tour. They will know how to process and weave a compelling story with the images they shoot, so that your business looks super attractive and credible. They should also have ample knowledge about different kinds of software and editing tools to give you the best 360-degree tour possible.'},
//                  {no: 3, heading: 'Check their photography equipment', des: 'You will come across many photographers who claim to shoot amazing images and create realistic tours with basic 360 cameras. But it’s best not to compromise on the kind or quality of equipment, as it might affect the look and finish of your tour. Professional and experienced virtual tour photographers will always use a DSLR camera and one that at least has 16 megapixels. It will come with wide angle lenses, both off and on flashes and superior resolution. So, check the kind of equipment the photographer will use before you say yes to them.'},
//                  {no: 4, heading: 'Check the reviews', des: 'Go online to check both positive and negative reviews shared by past customers of the photographer you are planning to go with. If the negative reviews outweigh the positive ones, try someone else. From the reviews, try to get an idea about how professional they are, whether they are efficient and punctual, whether they communicate well, have decent work ethics, and are smart enough to give you what you want. Don’t just go by the testimonials on the photographer’s website as they will be all-positive for obvious reasons.'},
//                  {no: 5, heading: 'Check their rates', des: 'Try to find a virtual tour photographer who will be worth the money you spend. Compare the rates they quote with other photographers in the market for the same kind of service, before you take a call. Avoid those who quote unbelievably low rates as it usually indicates shoddy quality. But of course, it doesn’t make sense to go with someone who charges the earth for a simple virtual tour. So, talk to a few photographers, discuss your ideas, assess the complexity of the tour, and then take a decision.'},
//              ],
//              endDescription: 'Now that you know about the best way to hire a virtual tour photographer, get started and give your business the marketing boost it deserves. Or if you want to play safe and go with a brand that is innovative, established and trusted, simply shoot an email to info@massinteract.com.',
//              tag: [
//                'Boost Student EnrollmentSchools', 'Virtual Tours', 'Student Enrollment'
//              ]
//            },
//            {
//              id: 4,
//              date: 'June 16, 2021',
//              file: 'Virtual Tours',
//              auther: 'Justwords Consultants',
//              img: require('./../Assets/blog/blog3.jpg'),                                                           
//              title: "6 Things that Make a College Virtual Tour Smashing",
//              topDescription: `If you are reading this, you are not the only one. There are countless colleges out there trying to woo students with visual marketing strategies, especially by way of virtual tours. So, if you are wondering how to make a college virtual tour engaging, remember that honesty, genuineness, and storytelling are certain key elements that go a long way. Of course, you might need professional guidance too, more so if you are new to virtual tours. But the best part is that no matter how much time, energy, or money (it won’t cost an arm and a leg) you invest in it, the pay-off will be impressive. So, read on to know about what makes a virtual tour engaging.`,
//              points: [
//                  {no: 1, heading: 'Getting the basics right', des: 'These days, students as well as their parents know the importance of making informed decisions. And good content can help with that. So, your website, blog, and even social media pages should have engaging, useful, original and updated content. And that doesn’t just mean plain text. Experiment with different content formats like images, videos, virtual tours, infographics, and even memes to attract students. School virtual tours are especially a good idea as they are immersive, super realistic and help students imagine what their actual experience will be like.'},
//                  {no: 2, heading: 'Targeting both students and parents', des: 'Did you know that 75% of those who look for something on the internet don’t even go to the second page of the search results? This means that your school website must appear on the first page, to get maximum clicks. And search engine optimization or SEO is one of the best tips to boost student enrollment this way. Make sure your website loads fast, is well-formatted, and the content is easy to read (use headings and subheadings). Apart from creating high quality content regularly, also include the right keywords. But make sure you don’t stuff your site with keywords as it will defeat your purpose. Weave keywords into image descriptions, captions and alt texts too. Your website should be mobile-friendly as students or busy parents will want to check up on you on the go. Your contact information and social media buttons should be clearly featured on your site too.'},
//                  {no: 3, heading: 'Storytelling', des: 'These days, students as well as their parents know the importance of making informed decisions. And good content can help with that. So, your website, blog, and even social media pages should have engaging, useful, original and updated content. And that doesn’t just mean plain text. Experiment with different content formats like images, videos, virtual tours, infographics, and even memes to attract students. School virtual tours are especially a good idea as they are immersive, super realistic and help students imagine what their actual experience will be like.'},
//                  {no: 4, heading: 'Giving VR due importance', des: 'These days, students as well as their parents know the importance of making informed decisions. And good content can help with that. So, your website, blog, and even social media pages should have engaging, useful, original and updated content. And that doesn’t just mean plain text. Experiment with different content formats like images, videos, virtual tours, infographics, and even memes to attract students. School virtual tours are especially a good idea as they are immersive, super realistic and help students imagine what their actual experience will be like.'},
//                  {no: 5, heading: 'Making communication easy', des: 'Another way to make a college virtual smashing is by including buttons for calling, messaging or chatting with the right people in your institution. Potential applicants might want to get in touch with a faculty member, someone in the admissions department or a student counsellor before making a decision. You can also let them schedule video calls for more credibility and to forge a bond. Or let them leave their contact info, so you can get back via text, call or email.'},
//                  {no: 6, heading: 'Increasing visibility of the tour', des: 'Once you create a virtual tour, upload it on your website’s landing page, admissions page, contact page, and pages for majors and facilities. This way, site visitors will have little chance to miss it. Also share the tour on your social media pages, brochure and marketing emails. Since your target audience is Gen Z, you have a better chance of reeling them in on platforms that they frequent, like Facebook, Instagram or LinkedIn. Make sure you communicate promptly through all these channels, to get maximum applications.'},
//              ],
//              endDescription: 'Now that you have a fair idea about how to make a college virtual tour smashing, get started. Check out what your competitors are doing and gather a few ideas that you like the most. And then, to make the process absolutely stress-free, get in touch with us at info@massinteract.com. We will design your dream tour in no time.',
//              tag: [
//                'Boost Student EnrollmentSchools', 'Virtual Tours', 'Student Enrollment'
//              ]
//            },
//            {
//              id: 5,
//              date: 'June 7, 2021',
//              file: 'Virtual Tours',
//              auther: 'Justwords Consultants',
//              img: require('./../Assets/blog/blog4.jpg'),                                                         
//              title: "5 Ways To Improve Your College’s Student Retention",
       
//              topDescription: `Any business needs customer loyalty and not just great traffic if it has to be truly successful. The same holds true for colleges as well. Attracting an impressive number of students or bagging tons of applications is not enough. You need to retain them as well. Often, students tend to drop out when they realize they have signed up for the wrong major, don’t have bright job prospects, are stuck with financial problems, are having a hard time fitting in, and so on. To address such issues, make students feel happy and confident, and boost student retention, there are a few things you can take seriously.`,
//              points: [
//                  {no: 1, heading: 'First impressions matter ', des: 'This means giving your website an extra edge (often, students start from there), incorporating chatbots that can handle question and inquiries during off-office hours too, sending heartfelt welcome emails when a student is accepted, and creating fun and informative videos and sharing them on social media pages, to name a few. The best strategies for improving student retention from the start is to make your website easy to navigate, include brilliantly shot images of your campus, lecture halls and facilities, and investing in a virtual tour to give potential students a realistic feel for your institution even before they step inside. Providing powerful call to action buttons that let them contact you, apply, or ask questions.'},
//                  {no: 2, heading: 'Show that you care', des: ' Monitoring the progress of your students from the first day is a great way to detect their strengths and weaknesses. This can help you draft personalized emails every week or month, which encourage them to do better or show them ways in which they can overcome challenges or improve their grades. It is a smart way to improve student retention rates. Make sure you provide clear and constructive feedback that tells them what resources to consult or how to prepare better for tests. Use fun and engaging visuals like memes or GIFs if need be, to forge a friendly bond.'},
//                  {no: 3, heading: 'Make lessons exciting', des: 'Wherever possible, include games or role play to make lessons interactive, interesting and easy to retain. Use visual aids like infographics, colorful graphs and charts, slides and videos to make tough concepts easier to process. Use virtual tours to allow students to explore things that would otherwise be difficult or super expensive, like exploring oceans, exotic national parks, industrial activities, sophisticated medical experiments and so on. Virtual reality is also perfect for letting students tinker with lifelike situations or problems and learn, without causing placing them in a dangerous situation with any real harm or side effect. These are effective tips to boost college student retention.'},
//                  {no: 4, heading: 'Use modern communication techniques', des: 'Prompt and seamless communication is the key to better student engagement. So, use texting or WhatsApp messaging to keep your students informed about lesson plans, quizzes, events, results and more. Let them get in touch with the faculty through these channels, so they can receive fast replies to doubts and queries. You can create an online forum as well, where students and faculty members can virtually meet, exchange ideas, learn and teach, and feel free. This way, even those who usually shy away from interaction in class might open up.'},
//                  {no: 5, heading: 'Go the extra mile ', des: 'Remember that your college is more than just a place for learning, it will become home for a student who decides to spend a few years in a new environment and prepare for an independent life. So, to improve student retention rates, try to focus on their mental and social wellbeing as well, by arranging counselling sessions, implementing a buddy system, setting up soft skill and networking workshops, or motivating them to participate in community events. Offer them a platform to speak their mind freely, without compromising privacy or inviting judgment. This can help them do better in academics too and feel safe and valued. Make sure you endorse diversity so that students from different regions or countries can feel at par.'},
//              ],
//              endDescription: 'Boosting your college’s student retention can be a piece of cake if you keep the above pointers in mind and keep an open mind. All you need is a bit of creativity, empathy and foresight, so that you can identify those at risk of leaving your institution early on and intervene. And if you are looking for ways to make your online presence or lectures more exciting and immersive with visuals, shoot us an email at info@massinteract.com.',
//              tag: [
//                'Boost Student EnrollmentSchools', 'Virtual Tours', 'Student Enrollment'
//              ]
//            },
//      ])
//      var router = useRouter()
//     var {
//       query: { id },
//     } = router


//     const func = () =>{
       
//         var blogData = []
//         for(var i = 0; i < filteredData.length; i++ ){
//             //  a("ASD")
//            var obj = filteredData[i];
//            if(obj.id == id ){
//             //   console.log('Chal gaya')
//             //    a(id)
//               blogData.push(obj)
//            }else{
//               setFilteredData("No Data Found")
//            }
//         }
//         console.log(blogData)
//         setFilteredData(blogData)
//      }

//   useEffect(() => {
//     func()
//    AOS.init({
//       disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//       startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//       initclassNameName: 'aos-init', // className applied after initialization
//       animatedclassNameName: 'aos-animate', // className applied on animation
//       useclassNameNames: false, // if true, will add content of `data-aos` as classNamees on scroll
//       disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//       debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//       throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
//       // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//       offset: 120, // offset (in px) from the original trigger point
//       delay: 100, // values from 0 to 3000, with step 50ms
//       duration: 300, // values from 0 to 3000, with step 50ms
//       easing: 'ease', // default easing for AOS animations
//       once: false, // whether animation should happen only once - while scrolling down
//       mirror: false, // whether elements should animate out while scrolling past them
//       anchorPlacement: 'top-bottom', 
//      });
//   },[]);

//   return (
//     <section>
       
   
//     <div className="container-1200 py-5">
//        <div className="row">

//           <div className="col-lg-9 px-2">

//           <div data-aos="fade-up"  className="img-item blogImage">
//           {
//                 filteredData.length > 0 ?
//                 <Image alt='some value' src={filteredData[0].img.default} placeholder='blur' />
//                 // <img src={filteredData[0].img.default}  />
//                 // <LazyLoadImage
//                 //    alt={filteredData[0].img.default}
//                 //    threshold={400}
//                 //    effect='blur'
//                 //    width="100%"
//                 //    className="img-item blogImage"
//                 //    src={filteredData[0].img.default} // use normal <img> attributes as props
//                 // />
                
//                 : null
//           }
//            </div>
//            {
//                 filteredData.length > 0 ?
//              <div data-aos="fade-up" className="head-text-blog">
            
//                 <h3>{filteredData[0].title}</h3>
             
   
//                 <span><i className="fa fa-user fa-fw ml-0"></i>{filteredData[0].auther}</span>
//                 <span><i className="fa fa-calendar fa-fw"></i>{filteredData[0].date}</span>
//                 <span><i className="fa fa-folder-o fa-fw"></i>{filteredData[0].file}</span>
             
//              </div>:null
//            }
//              <div  data-aos="fade-up"  className="text-blogs">
//              {
//                 filteredData.length > 0 ?
//                 <p>{filteredData[0].topDescription}</p>: null
//              }

//              {
//                 filteredData.length > 0 ?
//                 <ol>
//                    {
//                       filteredData[0].points.map((item, index)=>
                       
//                           <li  data-aos="fade-up"  key={index}><span>{item.heading} – </span>{item.des}</li>
                         
//                       )
//                    }
//                 </ol>:null
//              }
          

//                 {
//                 filteredData.length > 0 ?
//                 <p  data-aos="fade-up" >{filteredData[0].endDescription}</p>: null
//                  }


//              </div>
//              {
                
//                 filteredData.length > 0 ?
//                 <div data-aos="fade-up"  className="tags-blogs pt-5">
//                 {
//                       filteredData[0].tag.map((item, index)=> 
//                       <a key={index} href="#">{item}</a>
//                       )
//                 }
                  
//                    </div>
//                    : null
//              }
//              <div className="prev-blog-post" id="section-bottom">
//                 <p><a href="#"><i className="fa fa-chevron-left"></i> Back </a></p>
//              </div>

//              <div data-aos="fade-up" className="blog-comments">
//                 <div className="row">
//                    <div className="col-lg-12 px-1">
//                       <h4>LEAVE A REPLY</h4>
//                       <p>Your email address will not be published. Required fields are marked *</p>
//                       <textarea placeholder="Message"></textarea>
//                    </div>
//                    <div className="col-lg-4 col-md-6 col-12 px-1">
//                       <input type="" name="" placeholder="Enter Name"/>
//                    </div>
//                    <div className="col-lg-4 col-md-6 col-12 px-1">
//                       <input type="" name="" placeholder="Enter Email"/>
//                    </div>
//                    <div className="col-lg-4 col-md-6 col-12 mx-auto px-1">
//                       <input type="" name="" placeholder="Enter Website"/>
//                    </div>
//                    <div className="col-lg-12 px-1 d-flex">
//                       <input type="checkbox" id="saveinfo"/>
//                       <label className="my-auto" htmlFor="saveinfo">Save my name, email, and website in this browser for the next time I comment.</label>
//                    </div>
//                    <div className="col-12 text-center my-3  px-1">
//                       <button className="post-comment">Post Comment</button>
//                    </div>
//                 </div>
//              </div>
//           </div>

//           <div className="col-lg-3 px-2">

//              <div className="row">

//                 {/* <div className="col-lg-12 col-md-12 px-2">
//                    <div className="search-wrapper">
//                       <input type="text" name="" placeholder="Search"/>
//                       <button><i className="fa fa-search fa-fw"></i></button>
//                    </div>
//                 </div> */}

//                 <div data-aos="fade-up" className="col-lg-12 col-md-6 px-2">
//                    <div  className="recent-posts recent">
//                       <h6>Recent-posts</h6>
//                       <ul>
//                          <li><a href="#">5 Reasons Why 360 Virtual Tours are a Must for Campus Marketing</a></li>
//                          <li><a href="#">6 Tips To Hire the Perfect Virtual Tour Photographer</a></li>
//                          <li><a href="#">6 Things that Make a College Virtual Tour Smashing</a></li>
//                          <li><a href="#">5 Ways To Improve Your College’s Student Retention</a></li>
//                          <li><a href="#">5 Creative Ways to Increase College Enrollment</a></li>
//                       </ul>
//                    </div>
//                    {/* <div className="recent-comments recent">
//                       <h6>Recent Comments</h6>
//                    </div> */}
//                 </div>

//                 <div data-aos="fade-up" className="col-lg-12 col-md-6 px-2">

//                    <div className="recent-archives recent">
//                       <h6>Archives</h6>
//                       <ul>
//                          <li><a href="#">June 2021</a></li>
//                          <li><a href="#">May 2021</a></li>
//                          <li><a href="#">April 2021</a></li>
//                          <li><a href="#">March 2021</a></li>
//                          <li><a href="#">February 2021</a></li>
//                          <li><a href="#">January 2021</a></li>
//                          <li><a href="#">December 2020</a></li>
//                          <li><a href="#">November 2020</a></li>
//                          <li><a href="#">October 2020</a></li>
//                          <li><a href="#">September 2020</a></li>
//                          <li><a href="#">August 2020</a></li>
//                          <li><a href="#">July 2020</a></li>
//                          <li><a href="#">June 2020</a></li>
//                          <li><a href="#">May 2020</a></li>
//                          <li><a href="#">April 2020</a></li>
//                       </ul>
//                    </div>
//                 </div>

//                 <div  data-aos="fade-up" className="col-lg-12 col-md-6 px-2">
//                    <div className="recent-categories recent">
//                       <h6>Categories</h6>
//                       <ul>
//                          <li><a href="#">3D Modeling</a></li>
//                          <li><a href="#">Golf Course</a></li>
//                          <li><a href="#">Google My Business</a></li>
//                          <li><a href="#">Marketing</a></li>
//                          <li><a href="#">Photography</a></li>
//                          <li><a href="#">Trending</a></li>
//                          <li><a href="#">Uncategorized</a></li>
//                          <li><a href="#">Virtual Tours</a></li>
//                       </ul>
//                    </div>
//                 </div>

   

//              </div>

//           </div>

//        </div>
//     </div>

//   </section>

//   )
// }

// export default DetailBlog;