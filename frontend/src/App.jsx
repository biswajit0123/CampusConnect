import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage.jsx';
import styles from './App.module.css';
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";


function App() {
  
  return (
   
    <>

    <div className="container">
  <BrowserRouter>
        <div className="layout">

           <Routes >
           
           <Route
              path="/login"
              exact
              element={
                <div className={styles.main}>
                  <Login />
                </div>
              }
            />

            <Route
              path="/signup"
              exact
              element={
                <div className={styles.main}>
                  <Signup />
                </div>
              }
            />

           <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <HomePage />
                </div>
              }
            />

             {/* <Route
              path="/signup"
              exact
              element={
                <div className={styles.main}>
                  <Signup />
                </div>
              }
            /> */}
            
             {/* <Route
              path="/login"
              exact
              element={
                <div className={styles.main}>
                  <Login />
                </div>
              }
            /> */}



       </Routes>
        </div>
      
     </BrowserRouter>
    </div>
   
      
    </>
  )
}

export default App
