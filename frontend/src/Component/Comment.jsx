import { useSelector } from "react-redux";
import api from "../api/InternalApi";

function Comment({ cmt,postId,refreshPostDetail }) {

  const userId = useSelector((state) => state.user._id);
 const deleteComment = async ()=>{
  
  try {
    const result = await api.delete(`/comment/${postId}/${cmt?._id}`);
    refreshPostDetail()
    console.log(result.data.message);
  } catch (error) {
     console.log(error.response.data.message);

  }
 }


  return (
    <div className="border-b last:border-none px-4 py-3 relative">
      {/* Username */}
      <p className="text-sm font-medium text-gray-700">@{cmt?.owner?.userName}</p>

      {/* Comment text */}
      <p className="text-gray-600 text-sm mt-1">{cmt?.content}</p>
     {  cmt.owner?._id == userId ?  <i class="fa-solid fa-trash absolute right-4 top-4 text-xs cursor-pointer" onClick={deleteComment}></i>:"" }
    </div>
  );
}

export default Comment;
