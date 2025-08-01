// src/Component/Navbar/Navbar.jsx
import React from 'react';
import styles from './HomePage.module.css'; // Optional: if using CSS modules
import { FaConnectdevelop } from 'react-icons/fa'; // Using react-icons instead of font-awesome CDN

const HomePage = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <FaConnectdevelop />
      </div>
      <div className={styles.head}>
        <h2>CC</h2>
      </div>
      <div className={styles.navlink}>
        <a href="#explore" style={styles.link}>Explore</a>
        <a href="#campuses" style={styles.link}>Campuses</a>
        <a href="#popular" style={styles.link}>Popular</a>
        <a href="#type" style={styles.link}>Type</a>
        <a href="/login" style={styles.link}>Login</a>
        <a href="/signup" style={styles.link}>Signup</a>
      </div>
    </nav>
  );
};

export default HomePage;
