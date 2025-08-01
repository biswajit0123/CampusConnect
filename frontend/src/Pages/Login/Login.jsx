import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
 

  return (
    <>
      
      <div className={styles.container}>
         <h1>Login With Credentials</h1>

         <form action="" className={styles.frm}>
           
           <div className={styles.feild}>
           <input type="text" placeholder='example@gmail.com'/>
           </div>

           <div className={styles.feild}>
              <input type="text" placeholder='******'/>
           </div>
           
           <button type='button' className={styles.btn}>Login</button>
         </form>

          <p>
            Already have any account?
            <a href='/login'>Login</a>
          </p>
      </div>

    </>
  );
};

export default Login;
