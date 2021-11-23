
import React , {useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useForm } from "react-hook-form";
import { default as NumberFormat } from 'react-number-format';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function CareerForm({data}) {

   const [value, setValue] = useState(324234)
   const [isPopoverOpen, setIsPopoverOpen] = useState(false)
   const closeModal = () => setIsPopoverOpen(false);
   const [token, onChangeToken] = useState(null)
   const [category, onChangeCategory] = useState([])
   const [message, onChangeMessage] = useState('Loading...')
   const [messageTitle, onChangeMessageTitle] = useState('')
   const [file, onChangeFile] = useState(null)
   const [fileName, onChangeFileName] = useState('Attach Resume')
   const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
   const options = [
      { value: 'Sales Executive', label: 'Sales Executive' },
      { value: 'Tour Specialist', label: 'Tour Specialis' },
      { value: '360 Photographer', label: '360 Photographer' },
      { value: 'F/W Social Media Internship', label: 'F/W Social Media Internship' },
      { value: 'F/W 360° Editor Internship', label: 'F/W 360° Editor Internship' }
    ]

  useEffect(() => {
   // axios.get(`https://webprojectmockup.com/custom/mass_interact/public/api/career_openings`)
   // .then((response) => {
   //    if(response.data.success){
   //       onChangeCategory(response.data.data)
   //    }
   // })
   // .catch((rrr)=> console.log(rrr))
   if(data.success){
      onChangeCategory(data.data);
   }
   AOS.init({
         disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
         startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
         initClassName: 'aos-init', // class applied after initialization
         animatedClassName: 'aos-animate', // class applied on animation
         useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
         disableMutationObserver: false, // disables automatic mutations' detections (advanced)
         debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
         throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
         // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
         offset: 120, // offset (in px) from the original trigger point
         delay: 100, // values from 0 to 3000, with step 50ms
         duration: 300, // values from 0 to 3000, with step 50ms
         easing: 'ease', // default easing for AOS animations
         once: false, // whether animation should happen only once - while scrolling down
         mirror: false, // whether elements should animate out while scrolling past them
         anchorPlacement: 'top-bottom', 
      });
});
//   webprojectmockup.com/custom/mass_interact/public/api/career_openings


const onSubmit =  (data) => {

   
    var bodyFormData = new FormData();

    bodyFormData.append('first_name', data.fname);
    bodyFormData.append('last_name', data.lname);
    bodyFormData.append('email', data.email);
    bodyFormData.append('number', value.value);
    bodyFormData.append('sales_executive', data.DP);
    bodyFormData.append('resume_path', file);
    bodyFormData.append('description', data.details);

   //  console.log(obj)


 if(value.value &&  data.email && data.fname && data.DP && file){

 
    if(!token){
      // setIsPopoverOpen(true)
      reset()
      axios({
         method: "post",
         url: `https://webprojectmockup.com/custom/mass_interact/public/api/career_form`,
         data: bodyFormData,
         headers: { "Content-Type": "x-www-form-urlencoded" },
       })
      //  axios.post(`https://www.massinteract.com/send_email.php?ver=${n}`, obj)
       .then(response => {
         //  console.log("Status: ", response.status);
         //  console.log("Data: ", response.data);
         //  setIsPopoverOpen(true)
         if(response.data.success){
            setIsPopoverOpen(true)
            //  a("YES")
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
            }
       }).catch(error => {
         setIsPopoverOpen(true)
         onChangeMessage("Network Error")
         onChangeMessageTitle('ERROR, Please Try Again')
          // console.error('Something went wrong!', error);
         //  toast.error('Something went wrong!', {
         //     position: "top-right",
         //     autoClose: 5000,
         //     hideProgressBar: false,
         //     closeOnClick: true,
         //     pauseOnHover: true,
         //     draggable: true,
         //     progress: undefined,
         //     });
            //  setIsPopoverOpen(false)
       });
    }
    else{
      setIsPopoverOpen(true)
      onChangeMessage("Error")
      onChangeMessageTitle('Recaptcha Error')
      //  toast.error('Recaptcha Error', {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     });
    }
 }else{
   setIsPopoverOpen(true)
   onChangeMessage("Warning")
   onChangeMessageTitle('Please fill out the following form.')
   //  toast.warning('Please fill out the following form.', {
   //     position: "top-right",
   //     autoClose: 5000,
   //     hideProgressBar: false,
   //     closeOnClick: true,
   //     pauseOnHover: true,
   //     draggable: true,
   //     progress: undefined,
   //     });
 }

   };
   function recaptchaVal(value) {
      onChangeToken(value)
      // console.log("Captcha value:", value);
    }

    const _handleUploadImage = (event) => {
      if (event?.target?.files.length > 0) {
      const file = event.target.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
      onChangeFile(file);
      onChangeFileName(file.name)
            // setSelectedBgImage(reader.result);
          };
          reader.readAsDataURL(file);
        
      }
    };
  return (
    <section className="gubbare">
    <div className="container ">
       <div className="row">
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
                     style={{
                        position:'absolute',
                        zIndex: 99999,
                        marginTop: 0
            }}
            />
          <div  className="col-lg-6 m-auto">
             <div className="about-mass careers-head">
               <br/>
               <br/>
               <br/>
                <hr/>
                
                <h1>We are always looking <br/> for talented people to <br/> join our growing team.</h1>

                <p>Benefits include Flexible Work Hours, No Commission Caps, Unlimited Vacation, Coffee/Stocked Fridge, Fun & Friendly Work Environment and much more!</p>

                <h4>Current Openings:<span> Chicago </span></h4>

                <ul className="careers-info-list">
                   {
                      category.map((item, index)=>(
                        <li key={index} >{item.title}</li>
                      ))
                   }
                   {/* <li>Sales Executive</li>
                   <li>Tour Specialist</li>
                   <li>360 Photographer</li>
                   <li>F/W Social Media Internship</li>
                   <li>F/W 360° Editor Internship</li> */}
                </ul>
                
             </div>
          </div>
          <div className="col-lg-6 my-auto">
             {/* <div className="careers-form"> */}
             <form onSubmit={handleSubmit(onSubmit)}   className="form-inputs">
                <div className="row">
                   <div className="col-lg-6 col-sm-6 col-12" style={{display:'flex', flexDirection:'row'}}>
                   <span style={{color:'red'}}>*&nbsp;</span>
                       <input type="text" name="name" placeholder="First Name" {...register("fname")} />
                   </div>
                   <div className="col-lg-6 col-sm-6 col-12" style={{display:'flex', flexDirection:'row'}}>
                   <span style={{color:'red'}}>&nbsp;&nbsp;</span>
                         <input type="text" name="name" placeholder="Last Name" {...register("lname")} />
                   </div>
                   <div className="col-lg-6 col-sm-6 col-12" style={{display:'flex', flexDirection:'row'}}>
                   <span style={{color:'red'}}>*&nbsp;</span>
                   <input type="email"  name="email" placeholder="Email Address" {...register("email")} />
                   </div>
                   <div className="col-lg-6 col-sm-6 col-12" style={{display:'flex', flexDirection:'row'}}>
                   <span style={{color:'red'}}>*&nbsp;</span>
                  <select type="text"  placeholder="Desired Position" {...register("DP")}  className="controlllll p-2" >
                     {
                        category.map((item, index)=>(
                           <option key={index} value={item.title}>{item.title}</option>
                        ))
                     }
                        {/* <option value="Sales Executive">Sales Executive</option>
                        <option value="Tour Specialist">Tour Specialist</option>
                        <option value="360 Photographer">360 Photographer</option>
                        <option value="F/W Social Media Internship">F/W Social Media Internship</option>
                        <option value="F/W 360° Editor Internship">F/W 360° Editor Internship</option> */}
                  </select>
                   </div>
                   <div className="col-lg-6 col-sm-6 col-12" style={{display:'flex', flexDirection:'row'}}>
                   <span style={{color:'red'}}>*&nbsp;</span>
                   <NumberFormat color="grey" style={{color:'grey'}} format="(###) ###-####" onValueChange={(e)=> setValue(e)}  required name="number" allowEmptyFormatting mask="_" />
                   </div>
                   <div className="col-lg-6 col-sm-6 col-12" style={{display:'flex', flexDirection:'row'}}>
                   <span style={{color:'red'}}>*&nbsp;</span>
                      <label className="upload-label" htmlFor="filetn">
                        <input 
                         type="file"
                         className="custom-file-input-form"
                         id="filetn"
                         accept="application/pdf,application/msword,
                         application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                         onChange={_handleUploadImage}
                        //  accept={acceptTypeFile}
                         />
                        <div className="controlllll p-2">
                            <p style={{fontSize:'small'}} >{fileName}</p>
                            {/* <i className="fa fa-folder"></i> */}
                        </div>
           
                      </label>
                   </div>

                   <div className="col-lg-12 col-12 ml-1">
                   <textarea  type="text"  name="details" placeholder="Details" {...register("details")}></textarea>
                   </div>
                   <div className="col-lg-12 ml-1">
                   <input className="my-input" name="Request A Quote" type="submit" />
                   <div style={{ }}  className="recaptcha-csss">
                              <ReCAPTCHA
                                 size='normal'
                                 onChange={recaptchaVal}
                                 sitekey="6LdzjpocAAAAAI_h98i0kQihQYk9MZTSQK5bJTnI"
                              />
                              </div>
                           
                     </div>
                </div>
                </form>
             {/* </div> */}
          </div>
       </div>
       <Modal
            toggle={closeModal}
            isOpen={isPopoverOpen}
            className="modal-danger"
            contentClassName="bg-gradient-danger"
            >
                   <div className=" modal-header">
                     <h3 className=" modal-title" id="modal-title-notification">
                        {messageTitle}
                     </h3>
                  </div>
                  <div className=" modal-body">
                     <div className=" py-3 text-center">
                        <i className=" ni ni-bell-55 ni-3x"></i>                       
                        <p>
                           {message}
                        </p>
                     </div>
                  </div>
                  <div className="modal-footer">
                     <Button
                        className=" text-white ml-auto"
                        // color="link"
                        onClick={closeModal}
                        type="button"
                     >
                        Close
                     </Button>
                     </div>
                  </Modal>
    </div>
    <br/>
    {/* <br/> */}
 </section>
  );
}

export default CareerForm;

