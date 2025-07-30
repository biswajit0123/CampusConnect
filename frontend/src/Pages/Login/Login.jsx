import React from 'react'

function Login() {
  return (
    <>
    
    <div className="container">
      <h2>Welcome back to CampusConnect</h2>
       <div className="formWrapper">
           <form action="">
            <label htmlFor="email">Email : </label>
            <input type="text" placeholder='biswajitmuduli0544@gmail.com' />

             <label htmlFor="email">Password : </label>
            <input type="password" placeholder='******' />


           </form>
       </div>
    </div>
    </>
  )
}

export default Login