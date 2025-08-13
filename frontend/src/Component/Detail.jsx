import React, { useState, useEffect } from 'react';
import api from '../api/InternalApi.js';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Detail({ post, refreshPostDetail }) {
  const user = useSelector((state) => state.user._id);
const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);
  
  const isYou = post.owner?._id == user ? "you" : post.owner?.userName;
  // Sync liked state when post.likes or user changes
  useEffect(() => {
    if (post.likes && Array.isArray(post.likes)) {
      setLiked(post.likes.includes(user));
    } else {
      setLiked(false);
    }
  }, [post.likes, user]);

  // Toggle like
  const togglelike = async () => {
    try {
      await api.put(`/post/${post._id}`);
      refreshPostDetail(); // this updates the post and triggers the useEffect above
    } catch (error) {
      console.log(error.response?.data?.message);
      // Optional: handle error toast here
    }
  };

  // Create comment
  const createComment = async () => {
    try {
      const result = await api.post(`/comment/${post?._id}`, { content: newComment });
      console.log("re", result.data.message);
      refreshPostDetail();
      setNewComment("");
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };


  const deletePost = async ()=>{

    try {
      const result = await api.delete(`/post/${post._id}`)
   toast.success(result.data.message)
      setTimeout(()=>{
         navigate('/');
      },500);
      console.log(result.data.message)
      
    } catch (error) {
      console.log(error.response.data.message)
       toast.error(error.response.data.message)
    }
  }
  return (
    <div className="border w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
      <ToastContainer />
      {/* Post Title */}
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

      {/* Post Meta Info */}
      <p className="text-sm text-gray-500 mb-4">
        By <span className="font-medium">@{isYou || "loading"}</span> • {post.createdAt?.split("T")[0]}
      </p>
      <div>
        <img src={post.image} alt="" />
      </div>
      {/* Post Content */}
      <div className="text-gray-700 leading-relaxed mb-4">
        {!post.content ? <h5>Loading...</h5> : <p>{post.content}</p>}
      </div>

      {/* Like & Comment Info */}
      <div className="flex items-center gap-4 text-sm text-gray-600">
          <p><i
          className={`fa-heart cursor-pointer  ${liked ? "fa-solid text-black" : "fa-regular"}`}
          onClick={togglelike}
        ></i>
       <i className='ml-0'> {post.likes?.length || 0} Likes</i> </p>
        <p><i class="fa-solid fa-comment"></i> <i> {post.comment?.length || 0} Comments </i></p>
      </div>

      <hr className="border-t-1 border-gray-500 my-2" />

      {/* Comment Input */}
      <div className='flex gap-2'>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='Write your comment here....'
          className='w-3/4 border-b border-gray-600 outline-none'
        />
        <button onClick={createComment}>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
        <button className={`border bg-red-400 rounded-xl px-3 text-xs text-white hover:bg-red-500 ${post.owner?._id == user ? "block" : "hidden"}`} onClick={deletePost}>delete</button>
      </div>
    </div>
  );
}

export default Detail;
