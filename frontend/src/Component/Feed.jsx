import Post from './Post.jsx'
import api from '../api/InternalApi.js'
import { useEffect } from 'react'
import { useState,useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Feed() {
  
  const [allPost , setAllPost] = useState([]);

const getPosts = useCallback(async () => {
    try {
      const result = await api.get('/post');
      setAllPost(result.data.posts);
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);
  
// useEffect(() => {
//   console.log("Updated allPost:", allPost);
// }, [allPost]);

  return (
         <div className='w-full  sm:w-3/4 sm:p-4 px-2 mb-10'>
          <ToastContainer/>
          {
            allPost.length > 0 ? (
                    allPost.map((post) =>  (
                     <Post key={post._id} post={post} refreshPosts={getPosts} />
                    ))
               ) : (
                   <p className='text-center'>No posts yet</p> 
            )
          }
       
        
        </div>
  )
}

export default Feed