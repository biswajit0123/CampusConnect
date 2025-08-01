import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';


const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const handleForm = async () => {
    console.log("clicked")
  }

  return (
    <>
      
      <div className={styles.container}>

        
         <h1>Login With Credentials</h1>

         <form action="" className={styles.frm}>
           
           <div className={styles.feild}>
            <label htmlFor="email">Email:</label>
           <input 
               type="text" 
               placeholder='example@gmail.com'
               value={email}
               onChange={(e) => e.target.value}
                
               />
           </div>

           <div className={styles.feild}>
              <label htmlFor="password">Password:</label>
              <input type="text" placeholder='******'/>
           </div>
           
           <button onClick={handleForm} type='button' className={styles.btn}>Login</button>
         </form>

          <p>
            Already have any account?
           <Link to="/signup">Sign up</Link> 
          </p>
      </div>

    </>
  );
};

export default Login;
