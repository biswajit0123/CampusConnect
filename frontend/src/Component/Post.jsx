import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/InternalApi.js'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";

function Post({post , refreshPosts}) {

  const logeduser = useSelector((state) => state.user._id)
  let user = post.owner;
  
  const [liked, setLiked] = useState(post.likes.includes(logeduser));
 const isYou = post.owner?._id == logeduser? "you" : post.owner?.userName;
  const toggleLike = async () => {
    try {
       await api.put(`/post/${post._id}`)
       setLiked(prev => !prev)
       refreshPosts();
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    }
    
  }
  return (
    <>
        <div className=' bg-white mb-1 rounded-xl p-2'>
          <ToastContainer />
          <p><span>@</span><i>{isYou}</i> </p>
          <h5><b>{post.title}</b></h5>
          <p>{post.content}</p>

          <div className='flex gap-4 mt-3 items-center'>
              <Link to={`/${post._id}`} className="text-[0.65rem] font-extralight text-gray-500 relative group">
            view detail <i className="fa-solid fa-arrow-right text-[0.65rem] opacity-0 group-hover:opacity-60"></i>
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
            <p> <i
                className={`fa-heart cursor-pointer ${liked ? "fa-solid text-black" : "fa-regular"}`}
              onClick={toggleLike}
                 ></i> {post.likes.length}</p>
            <p>comments : {post.comment.length}</p>
          </div>
        </div>
    </>
  );
}

export default Post;
