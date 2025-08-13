import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from './imgback.avif';
import api from '../api/InternalApi';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect } from 'react';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [country, setCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 new toggle state

  const navigate = useNavigate();

  const handleForm = async () => {
     // Validation
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }
    if (!/\d/.test(password)) {
      return toast.error("Password must contain at least one number");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return toast.error("Password must contain at least one special character");
    }


    const formData = {
      fullName,
      userName,
      email,
      gender,
      password,
      collegeName,
      course,
      branch,
      country
    }
    try {
      const res = await api.post('/auth/register', formData);
      const data = res.data.message;
      toast.success(data);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      const result = error.response.data.message;
      toast.error(result);
      console.log(result);
    }
  }

  const prevent = (e) => {
    e.preventDefault();
  }

  const [campuse, setCampuses] = useState([]);
  useEffect(()=>{
     const getCampus = async ()=>{
         const result = await api.get('/campus');
         setCampuses(result.data)
     };
     getCampus();
  },[])
const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center " style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="z-0 m-2 w-3/5 flex flex-col items-center justify-center border rounded-lg backdrop-blur mb-8">
          <h1 className='text-xl'>Create A new account</h1>

          <form
            className="mt-4 w-3/5 flex flex-col justify-center items-start gap-4"
            onSubmit={prevent}
          >
            <div className="w-full">
              <label htmlFor="fullname" className='text-xs'>Full Name:</label>
              <input
                type="text"
                placeholder='biswajit'
                value={fullName}
                id='fullname'
                onChange={(e) => setFullName(e.target.value)}
                className="p-1 w-full text-xs outline-none border rounded-lg"
              />
            </div>

            <div className="w-full">
              <label htmlFor="username" className='text-xs'>Username:</label>
              <input
                type="text"
                placeholder='biswajit_04_'
                value={userName}
                id='username'
                onChange={(e) => setUserName(e.target.value)}
                className="p-1.5 w-full text-xs outline-none border rounded-lg"
              />
            </div>
              <div className="w-full">
              <label htmlFor="gender" className='text-xs'>Gender:</label>
              <input
                type="text"
                placeholder='male | female'
                value={gender}
                id='gender'
                onChange={(e) => setGender(e.target.value)}
                className="p-1.5 w-full text-xs outline-none border rounded-lg"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className='text-xs'>Email:</label>
              <input
                id='email'
                type="text"
                placeholder='biswajitmuduli0544@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-1 w-full text-xs outline-none border rounded-lg"
              />
            </div>

            {/* Password Field with show/hide */}
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

    
         
           <div className="w-full relative">
  <label htmlFor="collegename" className='text-xs'>College Name:</label>
  <input
    id='collegename'
    type="text"
    placeholder="Siksha 'O' Anusandhan"
    value={collegeName}
    onChange={(e) => {
      const value = e.target.value;
      setCollegeName(value);

      if (value.trim() === '') {
        setFilteredSuggestions([]);
      } else {
        const filtered = campuse.filter(campus =>
          campus.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      }
    }}
    className="p-1 w-full text-xs outline-none border rounded-lg"
  />

      {/* Suggestions dropdown */}
      {filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border  shadow max-h-40 overflow-y-auto">
          {filteredSuggestions.map((campus) => (
            <li
              key={campus._id}
              className="p-2 text-xs cursor-pointer hover:bg-purple-100"
              onClick={() => {
                setCollegeName(campus.name);
                setFilteredSuggestions([]);
              }}
            >
              {campus.name} — {campus.location}
            </li>
          ))}
        </ul>
      )}
           </div>

            <div className="w-full">
              <label htmlFor="course" className='text-xs'>Course:</label>
              <input
                id='course'
                type="text"
                placeholder='MCA'
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="p-1 w-full text-xs outline-none border rounded-lg"
              />
            </div>

            <div className="w-full">
              <div className="flex justify-between flex-wrap">
                <div className='xs:w-1/2 w-full'>
                  <label htmlFor="branch" className='text-xs'>Branch:</label>
                  <input
                    id='branch'
                    type="text"
                    placeholder='Computer Application'
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="p-1 w-full text-xs outline-none border rounded-lg"
                  />
                </div>

                <div className='xs:w-1/2 w-full'>
                  <label htmlFor="country" className='text-xs'>Country :</label>
                  <input
                    id='country'
                    type="text"
                    placeholder='India'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="p-1 w-full text-xs outline-none border rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <button
                onClick={handleForm}
                type='button'
                className="py-1 px-4 text-xs transition duration-500 ease-linear hover:bg-slate-500 bg-slate-400 rounded-2xl border-none cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className='text-xs'>
            Already have an account? &nbsp;
            <Link to="/login" className='group relative'>
              Log in
              <span className="absolute bg-purple-400 left-0 bottom-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
