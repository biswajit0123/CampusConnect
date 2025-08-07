import React from 'react'
import { useState } from 'react';

function CreatePost() {
  
  const [postData , setPostData] = useState({});

  //to change btn collor
const [click, setClick] = useState(false);
const changebgbtn = () =>{
  setClick(true);

  setTimeout(() => {
    setClick(false)
  },1000);
}
  const handlePost = async (e) =>{
 e.preventDefault();
 console.log("submit")
  }
  return (
    <>

      <div className='w-full p-2 flex justify-center'>
          
          <form action=""  className=' border w-3/4 p-5 rounded-xl' onSubmit={handlePost}>
            <h3 className='my-3 text-center'>Create A new Post</h3>
             <div className='mb-3'>
              
                <label htmlFor="title">Title :</label> <br /> 
                <input type="text" id='title' placeholder='Enter your title'  className='w-full outline-none border-b mt-3'/> 
             </div>

            <div >
                <label htmlFor="desc">Description :</label> <br />
                <input type="text" id='desc' placeholder='Enter your title' className='w-full outline-none border-b mt-3' /> 
             </div>

             <button className={`transition duration-300 ease-linear  border py-1 px-3 mt-3 rounded-xl ${click ? "bg-white border border-purple-400": "bg-purple-400"}`} onClick={changebgbtn} type='submit'>Create</button>
          </form>
      </div>
    </>
  )
}

export default CreatePost