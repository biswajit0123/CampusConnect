import React from 'react'
import { useState } from 'react';
import api from  '../api/InternalApi.js'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function CreatePost() {
  const navigate = useNavigate()

   const [image, setImage] = useState(null);
     const [preview, setPreview] = useState(null); // For preview

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file)); // Temporary preview URL
    }
  };
  const [postData , setPostData] = useState({
    title:"",
    content:"",

  });

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
        console.log("clicked  ")
        try {
            const formData = new FormData();
    formData.append("title", postData.title);
    formData.append("content", postData.content);
            if (image) {
    formData.append("image", image);
            }

            const result = await api.post('/post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              });
            console.log(result.data.message);
            toast.success(result.data.message)
            setTimeout(() => {
              navigate('/');
            },700);
        } catch (error) {
          toast.error(error.response.data.message)
          console.log(error.response.data)
        }
     
      }

      // onchange event in input tag
      function onchg(e){
            const {name, value} = e.target;
       setPostData( (prev) => ({
        ...prev, [name]:value
       }));
      }

  return (
    <>
    <ToastContainer/>
      <div className='w-full p-2 flex justify-center'>
          
          <form action=""  className=' border w-3/4 p-5 rounded-xl' onSubmit={handlePost}>
            <h3 className='my-3 text-center'>Create A new Post</h3>
             <div className='mb-3'>
              
                <label htmlFor="title">Title :</label> <br /> 
                <input 
                  type="text" 
                  id='title' 
                  name='title'
                  placeholder='Enter your title'  
                  className='w-full outline-none border-b mt-3'
                  value={postData.title}
                  onChange={onchg}
                  /> 
             </div>
            
            <div className='mb-3'>
              
                <label htmlFor="image">Image :</label>
                <input 
                  type="file" 
                  id='image' 
                  name='image'
                  accept="image/*"
                  className='w-full outline-none border-b mt-3'
                  onChange={handleFileChange}
                  /> 
                     {preview && (
        <div>
          <p>Image Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-md border"
          />
        </div>
      )}
             </div>
            <div >
                <label htmlFor="desc">Description :</label> <br />
                <input 
                    type="text" 
                    id='desc' 
                    placeholder='Enter your title'
                    name='content'
                    onChange={onchg} 
                    value={postData.content}
                    className='w-full outline-none border-b mt-3' /> 
             </div>

             <button className={`transition duration-300 ease-linear  border py-1 px-3 mt-3 rounded-xl ${click ? "bg-white border border-purple-400": "bg-purple-400"}`} onClick={changebgbtn} type='submit'>Create</button>
          </form>
      </div>
    </>
  )
}

export default CreatePost