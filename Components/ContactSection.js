import React , {useEffect, useState} from 'react'
import { useForm } from "react-hook-form";
import { default as NumberFormat } from 'react-number-format';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function ContactUsSection() {
   const [value, setValue] = useState(324234)
   const [isPopoverOpen, setIsPopoverOpen] = useState(false)
   const closeModal = () => setIsPopoverOpen(false);
   const [token, onChangeToken] = useState(null)
   const [message, onChangeMessage] = useState('Loading...')
   const [messageTitle, onChangeMessageTitle] = useState('')
   const { register, handleSubmit, watch, formState: { errors } } = useForm();

  useEffect(() => {

  },[]);

  const onSubmit =  (data) => {
  
   // this.props.onSubmit(recaptchaValue);

     const obj = { 
        name: data.name , 
        email: data.email,
        number: value.value,
        business: data.business,
        address: data.address,
        details: data.details
      };
      console.log(obj)

      var bodyFormData = new FormData();

      bodyFormData.append('name', data.name);
      bodyFormData.append('email', data.email);
      bodyFormData.append('number', value.value);
      bodyFormData.append('business', data.business);
      bodyFormData.append('address', data.address);
      bodyFormData.append('details', data.details);

      var d = new Date();
      var n = d.getTime();
   if(value.value &&  data.email && data.name && data.details){

   
      if(token){
         setIsPopoverOpen(true)
         // axios.post(`https://www.massinteract.com/send_email.php?ver=${n}`, obj)
         axios({
            method: "post",
            url: `https://www.massinteract.com/send_email.php?ver=${n}`,
            data: bodyFormData,
            headers: { "Content-Type": "x-www-form-urlencoded" },
          })
         .then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
            // setIsPopoverOpen(true)
            onChangeMessage('Your submission has been received and we will contact you soon.')
            onChangeMessageTitle('Thank You')
            toast.success('Message sent successfully', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               });
         }).catch(error => {
            onChangeMessage("Network Error")
            onChangeMessageTitle('ERROR, Please Try Again')
            // console.error('Something went wrong!', error);
            toast.error('Something went wrong!', {
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               });
               // setIsPopoverOpen(false)
         });
      }else{
         toast.error('Recaptcha Error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
   }else{
      toast.warning('Please fill out the following form.', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         });
   }
   };
   function recaptchaVal(value) {
      onChangeToken(value)
      console.log("Captcha value:", value);
    }
  return (
     <section>
            
            <section>
         <div className="container pt-5 pb-2">
            <div className="row">
               
               <div className="col-lg-12 m-auto">
         
            
                  <div className="cont-hz">
                     
                     <h1>Ready to Get Started?</h1>

                     {/* <p>Want to hire the best people around to shoot, edit and create your Google Business View 360° Virtual Tour. Call us today at (312) 257-2228 to speak with a Tour Specialist or drop us a line below!</p> */}
                     <p>   Want to hire the best people around to shoot, edit, and create your 
                           Google Business View 360º Virtual Tour? Call us today at (312) 
                           257-2228 or drop us a line below and one of our Tour Specialists will contact you.
                        </p>
                     <p><b>Schedule Your Google Business View 360° Virtual Tour Today!</b></p>
                     <p>Just fill in the form below and one of our Tour Specialists will contact you.</p>
                  </div>
            
               </div>
            </div>
         </div>
      </section>
      <ToastContainer
                     position="top-right"
                     autoClose={5000}
                     hideProgressBar={false}
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
            />
      <section>
      
         <div className="container pt-2 pb-3">
            <div className="row">
               <div className="col-lg-6 m-auto hz-form p-2" 
               style={{
                  // borderStyle: 'solid',
                  // borderWidth:'1px',
                  // borderColor: '#e8e8e8',
                  // borderRadius: '12px',
               }}>
               <form onSubmit={handleSubmit(onSubmit)} className="form-inputs">
                           <div className="row">
                              <div className="col-lg-12" style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>*&nbsp;</span>
                                 <input type="text" name="name" placeholder="Full name" {...register("name")} />
                              </div>
                              <div className="col-lg-6 col-md-6 pr-1"  style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>*&nbsp;</span>
                                 <input type="email"  name="email" placeholder="Email Address" {...register("email")} />
                              </div>
                              <div className="col-lg-6 col-md-6 pl-1"  style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>*&nbsp;</span>
                                 {/* <input type="number" name="" placeholder="Number"/> */}
                                 <NumberFormat color="grey" style={{color:'grey'}} format="(###) ###-####" onValueChange={(e)=> setValue(e)}  required name="number" allowEmptyFormatting mask="_" />
                                          
                              </div>
                              <div className="col-lg-6 col-md-6 pr-1"  style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}} >&nbsp; &nbsp;</span>
                                 <input  type="text" name="business" placeholder="Business Name" {...register("business")}/>
                              </div>
                              <div className="col-lg-6 col-md-6 pl-1"  style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>&nbsp; &nbsp;</span>
                                 <input type="text" name="address" placeholder=" Location" {...register("address")}/>
                              </div>
                              <div className="col-lg-12" style={{display:'flex', flexDirection:'row'}}>
                              <span style={{color:'red'}}>*&nbsp;</span>
                                 <textarea  type="text"  name="details" placeholder="Details" {...register("details")}></textarea>
                              </div>
                              <div className="col-lg-12">
                              
                              <input className="my-input" name="Request A Quote" type="submit" />
                              <div style={{ }}  className="recaptcha-csss">
                              <ReCAPTCHA
                                 onChange={recaptchaVal}
                                 sitekey="6LdzjpocAAAAAI_h98i0kQihQYk9MZTSQK5bJTnI"
                              />
                              </div>
                              <Popup
                                 open={isPopoverOpen} closeOnDocumentClick onClose={closeModal}
                                    contentStyle={
                                       {
                                          position: 'relative',
                                          margin: 'auto',
                                          pointerEvents: 'auto',
                                          maxWidth: '500px',
                                          borderRadius: 10
                                       }
                                    }
                                 >
                                    {close => (
                                       <div className="modalsss">
                                       <a className="close" onClick={closeModal}>
                                             &times;
                                       </a>
                                       <div id="pop-content">
                                          {messageTitle}
                                         <br/>
                                         {message}
                                       </div>
                                       </div>
                                       )}
                                    </Popup>
                              </div>
                           </div>
                  </form>
            </div>
      </div>
         </div>
     
      </section>
      <br/>
    </section>
  );
}

export default ContactUsSection;
