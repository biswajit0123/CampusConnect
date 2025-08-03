import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [CollegeName, setCollegeName] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [country, setCountry] = useState("");

  const handleForm = async () => {
    const formData = {
      fullName,
      userName,
      email,
      password,
      CollegeName,
      course,
      branch,
      country
    }
    console.log(formData)
  }

  return (
    <>
      <div className="m-2 flex flex-col items-center justify-center ">
        
         <h1 className='text-xl'>Create A new account</h1>

         <form action="" className="mt-4 w-3/5 flex flex-col justify-center items-start gap-4 ">
           
            <div className="w-full  ">
              <label htmlFor="fullname" className='text-xs'>Full Name:</label>
              <input 
                 type="text" 
                 placeholder='biswajit'
                 value={fullName}
                 id='fullname'
                 onChange={(e) => setFullName( e.target.value)}
                 className="p-1 w-full text-xs outline-none border"
                 />
           </div>

           <div className="w-full">
              <label htmlFor="username" className='text-xs'>Username:</label>
               <input 
                 type="text" 
                 placeholder='biswajit_04_'
                 value={userName}
                 id='username'
                 onChange={(e) => setUserName( e.target.value)}
                 className="p-1.5 w-full text-xs outline-none border  "
                 />
           </div>

           <div className="w-full">
              <label htmlFor="email" className='text-xs'>Email:</label>
             <input 
                 id='email'
                 type="text" 
                 placeholder='biswajitmuduli0544@gmail.com'
                 value={email}
                 onChange={(e) => setEmail( e.target.value)}
                 className="p-1 w-full text-xs outline-none border"
                 />
           </div>

           <div className="w-full">
                <label htmlFor="password" className='text-xs'>Password:</label>
                <input 
                     id='password'
                    type="text" 
                    placeholder='******'
                    value={password}
                    onChange={(e) => setPassword( e.target.value)}
                    className="p-1 w-full text-xs outline-none border"
                    />
           </div>
           
           <div className="w-full">
                <label htmlFor="collegename" className='text-xs'>College Name:</label>
                <input 
                    id='collegename'
                    type="text" 
                    placeholder="Siksha 'O' Anusandhan"
                    value={CollegeName}
                    onChange={(e) => setCollegeName( e.target.value)}
                    className="p-1 w-full text-xs outline-none border"
                    />
           </div>

           <div className="w-full">
                <label htmlFor="course" className='text-xs'>Course:</label>
                <input 
                    id='course'
                    type="text" 
                    placeholder='MCA'
                     value={course}
                    onChange={(e) => setCourse( e.target.value)}
                    className="p-1 w-full text-xs outline-none border"
                    />
           </div>

             <div className="w-full">
                <div className="flex justify-between  flex-wrap">

                  <div className=' xs:w-1/2 w-full '>
                   <label htmlFor="branch" className='text-xs'>Branch:</label>
                     <input 
                     id='branch'
                    type="text" 
                    placeholder='Computer Application'
                     value={branch}
                    onChange={(e) => setBranch( e.target.value)}
                    className="p-1 w-full text-xs outline-none border"
                    />
                  </div>
                   
                   <div className=' xs:w-1/2 w-full'>
                   <label htmlFor="country" className='text-xs'>Country :</label>
                     <input 
                     id='country'
                    type="text" 
                    placeholder='india'
                     value={country}
                    onChange={(e) => setCountry( e.target.value)}
                    className="p-1 w-full text-xs outline-none border-none"
                    />
                  </div>
                </div>
           </div>

            <div className="w-full">
              <button onClick={handleForm} type='button' className="py-1 px-4 text-xs transition duration-500 ease-linear hover:bg-slate-500 bg-slate-400 rounded-2xl border-none cursor-pointer">Sign up</button>
           </div>
         </form>

        <p className='text-xs'>
                   already have an account? &nbsp;
                   <Link to="/login" className='group relative'>Log in<span className="absolute bg-purple-400 left-0 bottom-0 h-[2px] w-0  transition-all duration-300 group-hover:w-full"></span></Link> 
                  </p>
      </div>
    </>
  );
};

export default Signup;
