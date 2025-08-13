import React, { useState, useEffect } from "react";
import Sidebar from "../Component/AdminSidebar";
import { Link, useLocation } from "react-router-dom";

const PostList = () => {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (state?.post) {
      setPosts(state.post);
    }
  }, [state]);

  // Filter posts based on search term (by title or author)
  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.owner?.fullName || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      <Sidebar post={state.post} user={state.user} comment={state.comment} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">All Posts</h1>

        {/* Search Input */}
        <div className="mb-4 w-full">
          <input
            className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Author</th>
                <th className="border-b p-2">Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((p) => (
                  <tr key={p._id} className="hover:bg-gray-100 relative h-20">
                    <td className="border-b p-2">{p.title}</td>
                    <td className="border-b p-2">{p.owner?.fullName || "Unknown"}</td>
                    <td className="border-b p-2">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </td>
                    <button className="absolute  right-4  text-xs p-1 rounded-3xl bottom-0">remove</button>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-gray-500 p-4">
                    No posts found.
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

export default PostList;
