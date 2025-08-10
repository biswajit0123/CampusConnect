import React, { useState, useEffect } from "react";
import Sidebar from "../Component/AdminSidebar";
import { useLocation } from "react-router-dom";

const CommentList = () => {
  const { state } = useLocation();
  const [comments, setComments] = useState([]);
console.log(comments)
  useEffect(() => {
    if (state?.comment) {
      setComments(state.comment);
    }
  }, [state]);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      <Sidebar  post={state.post} user={state.user} comment={state.comment}/>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">All Comments</h1>
        <div className="bg-white shadow rounded-lg p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Comment</th>
                <th className="border-b p-2">Author_id</th>
              </tr>
            </thead>
            <tbody>
              {comments.length > 0 ? (
                comments.map((c) => (
                  <tr key={c._id}>
                    <td className="border-b p-2">{c.content}</td>
                    <td className="border-b p-2">{c.owner }</td>
                 
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-500 p-4">
                    No comments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
