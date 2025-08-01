import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';


const Login = () => {
 
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
      
      <div className={styles.container}>

        
         <h1>Create A new account</h1>

         <form action="" className={styles.frm}>
           

            <div className={styles.feild}>
            <label htmlFor="fullname">Full Name::</label>
           <input 
               type="text" 
               placeholder='biswajit'
               value={fullName}
               id='fullname'
               onChange={(e) => setFullName( e.target.value)}
                
               />
           </div>

           <div className={styles.feild}>
            <label htmlFor="username">Username:</label>
             <input 
               type="text" 
               placeholder='biswajit_04_'
               value={userName}
               id='username'
               onChange={(e) => setUserName( e.target.value)}
                
               />
           </div>

           <div className={styles.feild}>
            <label htmlFor="email">Email:</label>
           <input 
               id='email'
               type="text" 
               placeholder='example@gmail.com'
               value={email}
               onChange={(e) => setEmail( e.target.value)}
                
               />
           </div>

           <div className={styles.feild}>
              <label htmlFor="password">Password:</label>
              <input 
                   
                  id='password'
                  type="text" 
                  placeholder='******'
                  value={password}
                  onChange={(e) => setPassword( e.target.value)}
                  
                  />
           </div>
           

           <div className={styles.feild}>
              <label htmlFor="collegename">College Name:</label>
              <input 
                  id='collegename'
                  type="text" 
                  placeholder='******'
                  value={CollegeName}
                  onChange={(e) => setCollegeName( e.target.value)}
                  
                  />
           </div>


           <div className={styles.feild}>
              <label htmlFor="course">Course:</label>
              <input 
                  id='course'
                  type="text" 
                  placeholder='MCA'
                   value={course}
                  onChange={(e) => setCourse( e.target.value)}
                  
                  />
           </div>

             <div className={styles.feild}>
              <div className={styles.inwp}>
                <div>
                 <label htmlFor="branch">Branch:</label>
                   <input 
                   id='branch'
                  type="text" 
                  placeholder='Computer Application'
                   value={branch}
                  onChange={(e) => setBranch( e.target.value)}
                  
                  />
                </div>
                 
               <div>
                 <label htmlFor="country">Country    :</label>
                   <input 
                   id='country'
                  type="text" 
                  placeholder='india'
                   value={country}
                  onChange={(e) => setCountry( e.target.value)}
                  
                  />
                </div>
       

             


              </div>
             
           </div>

            <div className={styles.feild}>
                       <button onClick={handleForm} type='button' className={styles.btn}>Sign up</button>

           </div>
         </form>

          <p >
            Already have any account? &nbsp;
           <Link to="/signup">Sign up</Link> 
          </p>
      </div>

    </>
  );
};

export default Login;
