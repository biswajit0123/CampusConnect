import React, { useState, useEffect } from "react";
import Sidebar from "../Component/AdminSidebar";
import { useLocation } from "react-router-dom";

const CommentList = () => {
  const { state } = useLocation();
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (state?.comment) {
      setComments(state.comment);
    }
  }, [state]);

  // Filter comments by content only (case-insensitive)
  const filteredComments = comments.filter((c) =>
    (c.content || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      <Sidebar post={state.post} user={state.user} comment={state.comment} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">All Comments</h1>

        {/* Search input */}
        <div className="mb-4 w-full">
          <input
            className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Search by comment content"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-b p-2">Comment</th>
                <th className="border-b p-2">Author ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.length > 0 ? (
                filteredComments.map((c) => (
                  <tr key={c._id} className="hover:bg-gray-100 relative">
                    <td className="border-b p-2">{c.content}</td>
                    <td className="border-b p-2">{c.owner}</td>
                   <button className="absolute  right-4  text-xs p-1 rounded-3xl bottom-0">remove</button>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center text-gray-500 p-4">
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
