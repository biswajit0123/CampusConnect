
import Detail from '../Component/Detail.jsx'
import Commentfeed from '../Component/Commentfeed.jsx'
import { useCallback, useEffect, useState } from 'react'
import api from '../api/InternalApi.js';
import { useParams } from "react-router-dom";

function PostDetail() {

  const [post, setPost] = useState({});
  const {id:postId} = useParams();

 const getPost = useCallback(async ()=>{
  try {
        const result = await api.get(`/post/${postId}`);
        setPost(result.data.post)
        // console.log(result.data.post);
       } catch (error) {
        console.log("error is ", error.response.data.message)
       }
 },[])

  useEffect(()=>{
   getPost();
  },[getPost])



  return (
    <>
    <div className='flex flex-col  md:flex-row p-3 gap-2 bg-gray-50 items-start min-h-screen'>
       <Detail  post={post} refreshPostDetail={getPost}/>
       {post?.comment?.length > 0 ?   <Commentfeed comment={post.comment} postId={post?._id} refreshPostDetail={getPost}/> : <p>Become first Commenter on this post </p> }
     
    </div>
    
    </>
  )
}

export default PostDetail