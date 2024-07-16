'use client'
// import React, { useState } from 'react'

// import {Toaster} from 'react-hot-toast'
// const ContactForm = () => {

//     const [formData,setFormData]=useState(
//         {
//             name:String,
//             email:String,
//             message:String,
//         }
//     )

//     const[errors,setErrors]=useState({
//         name: String,
//         email: String,
//         message: String,

//     });
//     const[isSending,setIsSending]=useState(false)

//     const handelChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
//         const{name,value}=e.target;
//         setFormData({
//             ...formData,
//             [name]:value,
//         })
//     }

    // const validate = ()=>{
    //     let errors = {};
    //     if(!formData.name) errors.name = "Name is required!!";
    //     if(!formData.email){
    //         errors.email = "Email is required"
    //     }
    //     else if(!/\S+@S+\.\S+/.test(formData.email)){
    //         errors.email = "Email is invalid";
    //     }
    //     if(!formData.message) errors.message = "Message is required ";
    //     return errors;
    // }

    // const handelSubmit = (e)=>{
    //     e.preventDefault();
    //     const validateErrors = validate();
    //     if(Object.keys(validateErrors).length>0){
    //         setErrors(validateErrors);
    //     }
    //     else{
    //         setErrors({});
    //         setIsSending(true);


    //         emailjs
    //             .send(

    //             )
    //     }
    // }


//   return (
//     <div className='mx-auto max-w-xl p-4'>
//         <Toaster/>
//         <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100'>
//             Get in touch
//         </h2>
//         <form action="">
//             <div className='mb-4'>
//                 <input type="text" 
//                         id='name'
//                         name="name"
//                         value={formData.name}
//                         placeholder='Name'
//                         onChange={handelChange}
//                         className='w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none'
                      
//                         />
//                         {errors.name && (
//                             <p className='text-sm text-pink-700'>{errors.name}</p>
//                         )}
                        
//             </div>
//         </form>
//     </div>
//   )
// }

// export default ContactForm



import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import formCss from './ContactForm.module.css'
// Define types for form data and errors
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Uncomment and implement validate function if needed
  // const validate = (): Errors => {
  //   let errors: Errors = {};
  //   if (!formData.name) errors.name = "Name is required!";
  //   if (!formData.email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     errors.email = "Email is invalid";
  //   }
  //   if (!formData.message) errors.message = "Message is required";
  //   return errors;
  // };

//   Uncomment and implement handleSubmit function if needed
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validateErrors = validate();
//     if (Object.keys(validateErrors).length > 0) {
//       setErrors(validateErrors);
//     } else {
//       setErrors({});
//       setIsSending(true);

//       // Send email using emailjs or another service
//       emailjs.send(/* ... */);
//     }
//   };

  return (
    <div className={`${formCss.formContainer} mx-auto max-w-xl p-4 `}>
      <Toaster />
      <h2 className='my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100'>
        Get in touch
      </h2>
      <form action="" >
        <div className={formCss.form}>
        <div >
          <input
            type="text"
            id='name'
            name="name"
            value={formData.name}
            placeholder='Name'
            onChange={handleChange}
            className=''
          />
          {errors.name && (
            <p className='text-sm text-pink-700'>{errors.name}</p>
          )}
        </div>
        <div className=''>
          <input
            type="email"
            id='email'
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            className=''
          />
          {errors.email && (
            <p className='text-sm text-pink-700'>{errors.email}</p>
          )}
        </div>
        <div className='mb-4'>
          <textarea
            id='message'
            name="message"
            value={formData.message}
            placeholder='Message'
            onChange={handleChange}
            className=''
            rows={4}
          />
          {errors.message && (
            <p className='text-sm text-pink-700'>{errors.message}</p>
          )}
        </div>
        <button >
          Submit
        </button>
        </div>
        {/* Uncomment the button and handleSubmit function to enable form submission */}
       
      </form>
    </div>
  );
}

export default ContactForm;
