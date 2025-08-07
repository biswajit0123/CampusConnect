import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from './imgback.avif';
import api from '../api/InternalApi';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {setUser} from '../store/userSlice.js'
const Signup = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleForm = async () => {
    const formData = {
      email,
      password
    }
    try {
        const response = await api.post('/auth/login', formData);
        toast.success(response.data.message)
       const user = response.data.user;
       console.log(user)
       dispatch(setUser(user));
        setTimeout(()=>{
          navigate('/')
        },1000)
        console.log(response.data.message)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log(error.response.data.message)
    }
  
  }

  return (
    <>
      <div>
        <ToastContainer/>
        <div className="h-screen flex items-center justify-center  " style={{ backgroundImage: `url(${heroImage})` }}>
           
        <div className="m-2 w-80 flex flex-col items-center justify-center border rounded-lg backdrop-blur " >
         
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
                 className="p-1 w-full text-xs outline-none border rounded-lg"
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
                    className="p-1 w-full text-xs outline-none border rounded-lg"
                    />
           </div>
           
          

           

         

            <div className="w-full flex justify-center">
              <button onClick={handleForm} type='button' className="py-1 px-4 text-xs transition duration-500 ease-linear hover:bg-slate-500 bg-slate-400 rounded-2xl border-none cursor-pointer">Log in</button>
           </div>
         </form>

          <p className='text-xs'>
           Don't have an account? &nbsp;
           <Link to="/signup" className='group relative'>Sign up <span className="absolute bg-purple-400 left-0 bottom-0 h-[2px] w-0  transition-all duration-300 group-hover:w-full"></span></Link> 
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
