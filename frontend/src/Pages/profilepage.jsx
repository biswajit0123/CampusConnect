import React from 'react'
import { useSelector } from "react-redux";
import api from '../api/InternalApi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function profilepage() {

  const user = useSelector((state) => state.user)
   const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await api.get('/auth/userpost'); // adjust URL as needed
        setPosts(result.data);
        console.log(result.data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 
  return (
    <div className='bg-gray-50 p-6 flex flex-col gap-1 items-center'>
   
   <div className='border w-2/3 bg-white flex flex-col items-start p-3'>
     <img src="https://avatar.iran.liara.run/public/boy" alt="" className='w-14'/>
      <p>@{user.userName}</p>
      <p>Full Name : {user.fullName}</p>
      <p>Email : {user.email}</p>
      <p>College Name : {user.collgeName}</p>
      <p>Course : {user.course}</p>
      <p>Branch : {user.branch}</p>
      <p>Country : {user.country}</p>

   </div>
    
{posts && posts.map((p) => {
  return (
    <div
      key={p._id}
      className="border w-full rounded-md p-4 mb-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white"
    >
      <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
      <p className="text-gray-600 text-sm">{p.content || 'No description available'}</p>
      <p className="text-gray-400 text-xs mt-2">
        Posted on: {new Date(p.date || p.createdAt).toLocaleDateString()}
      </p>
       <Link to={`/${p._id}`} className="text-[0.65rem] font-extralight text-gray-500 relative group">
            view detail <i className="fa-solid fa-arrow-right text-[0.65rem] opacity-0 group-hover:opacity-60"></i>
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
    </div>
  );
})}

    </div>
  )
}

export default profilepage