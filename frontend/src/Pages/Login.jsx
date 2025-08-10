import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from './imgback.avif';
import api from '../api/InternalApi';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setUser } from '../store/userSlice.js';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForm = async () => {
    const formData = { email, password };
    try {
      const response = await api.post('/auth/login', formData);
      toast.success(response.data.message);
      const user = response.data.user;
      dispatch(setUser(user));
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
        <div
          className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="m-2 w-80 flex flex-col items-center justify-center border rounded-lg backdrop-blur p-6">
            <h1 className='text-xl font-semibold'>Log in to your account</h1>

            <form
              className="mt-4 w-full flex flex-col justify-center items-start gap-4"
            >
              {/* Email Field */}
              <div className="w-full">
                <label htmlFor="email" className='text-xs block mb-1'>Email:</label>
                <input
                  id='email'
                  type="text"
                  placeholder='biswajitmuduli0544@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-1 w-full text-xs outline-none border rounded-lg"
                />
              </div>

              {/* Password Field */}
              <div className="w-full">
                <label htmlFor="password" className='text-xs block mb-1'>Password:</label>
                <div className="relative flex items-center">
                  <input
                    id='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='******'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-1 pr-8 w-full text-xs outline-none border rounded-lg"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 cursor-pointer text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full flex justify-center">
                <button
                  onClick={handleForm}
                  type='button'
                  className="py-1 px-4 text-xs transition duration-300 hover:bg-slate-500 bg-slate-400 rounded-2xl border-none cursor-pointer"
                >
                  Log in
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <p className='text-xs mt-3'>
              Don't have an account? &nbsp;
              <Link to="/signup" className='group relative'>
                Sign up
                <span className="absolute bg-purple-400 left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </p>

             <Link to="/admin/login" className='group relative'>
                Admin go here <i className="fa-solid fa-arrow-right"></i>
                <span className="absolute bg-purple-400 left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></span>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
