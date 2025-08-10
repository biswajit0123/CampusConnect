import React, { useState, useEffect } from "react";
import Sidebar from "../Component/AdminSidebar";
import { useLocation } from "react-router-dom";

const PostList = () => {
  const { state } = useLocation();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (state?.post) {
      setPosts(state.post);
    }
  }, [state]);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      <Sidebar post={state.post} user={state.user} comment={state.comment} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">All Posts</h1>
        <div className="bg-white shadow rounded-lg p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Author</th>
                <th className="border-b p-2">Created</th>
              </tr>
            </thead>
            <tbody>
              {posts.length > 0 ? (
                posts.map((p) => (
                  <tr key={p._id}>
                    <td className="border-b p-2">{p.title}</td>
                    <td className="border-b p-2">{p.owner?.fullName || "Unknown"}</td>
                    <td className="border-b p-2">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </td>
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
