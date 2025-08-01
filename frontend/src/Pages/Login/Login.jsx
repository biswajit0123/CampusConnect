import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [activeForm, setActiveForm] = useState('login');

  const showForm = (formId) => {
    setActiveForm(formId);
  };
  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Add actual login/auth logic here

    // Redirect to homepage after login
    navigate('/HomePage');
  };

  return (
    <>
      

      <div className={styles.container}>
      <div className={`${styles.formBox} ${activeForm === 'login' ? styles.active : ''}`} id="login-form">
        <form>
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" name="login">Login</button>
          <p>
            Don't have any account?{' '}
            <a href='/Signup' style={{ cursor: 'pointer' }}>Sign up</a>
          </p>
        </form>
      </div>
      {/* <div className={`${styles.formBox} ${activeForm === 'signup' ? styles.active : ''}`} id="signup-form">
        <form>
          <h2>Register</h2>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" name="register">Register</button>
          <p>
            Already have any account?{' '}
            <a onClick={() => showForm('login')} style={{ cursor: 'pointer' }}>Login</a>
          </p>
        </form>
      </div> */}
    </div>
    </>
  );
};

export default Login;
