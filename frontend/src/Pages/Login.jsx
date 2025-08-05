import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleForm = async () => {
    const formData = {
     
      email,
      password
    }
    console.log(formData)
  }

  return (
    <>
      <div className="m-2 flex flex-col items-center justify-center ">
        
         <h1 className='text-xl'>Create A new account</h1>

         <form action="" className="mt-4 w-3/5 flex flex-col justify-center items-start gap-4 ">

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
              <button onClick={handleForm} type='button' className="py-1 px-4 text-xs transition duration-500 ease-linear hover:bg-slate-500 bg-slate-400 rounded-2xl border-none cursor-pointer">Sign up</button>
           </div>
         </form>

          <p className='text-xs'>
           Don't have an account? &nbsp;
           <Link to="/signup" className='group relative'>create new  <span className="absolute bg-purple-400 left-0 bottom-0 h-[2px] w-0  transition-all duration-300 group-hover:w-full"></span></Link> 
          </p>
      </div>
    </>
  );
};

export default Signup;
