import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/InternalApi.js'
import { ToastContainer, toast } from 'react-toastify';

function Post({post , refreshPosts}) {
  let user = post.owner;
  const [liked, setLiked] = useState(post.likes.includes(user._id));

  const toggleLike = async () => {

    try {
       await api.put(`/post/${post._id}`)
       refreshPosts();
       setLiked(prev => !prev)
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    }
    
  }
  return (
    <>
        <div className=' bg-white mb-1 rounded-xl p-2'>
          <ToastContainer />
          {console.log(user.userName)}
          <p><span>@</span><i>{user.userName}</i> </p>
          <h5><b>{post.title}</b></h5>
          <p>{post.content}</p>

          <div className='flex gap-4 mt-3'>
              <Link to="/your-path" className="relative group inline-block">
                 view
                <span className="absolute left-0 bottom-0.5 h-[1px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
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
