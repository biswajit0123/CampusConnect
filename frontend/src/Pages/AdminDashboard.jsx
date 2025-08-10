import React, { useState, useEffect } from "react";
import AdminSidebar from "../Component/AdminSidebar.jsx";
import api from "../api/InternalApi.js";

const AdminDashboard = () => {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await api.get("/admin", { withCredentials: true });
        setComment(result.data.comments);
        setUser(result.data.users);
        setPost(result.data.posts);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar post={post} user={user} comment={comment}/>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-gray-500 text-sm">Total Users</h2>
            <p className="text-2xl font-bold">{user?.length}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-gray-500 text-sm">Total Posts</h2>
            <p className="text-2xl font-bold">{post?.length}</p>
          </div>
          <div className="bg-white shadow p-4 rounded-lg">
            <h2 className="text-gray-500 text-sm">Total Comments</h2>
            <p className="text-2xl font-bold">{comment?.length}</p>
          </div>
        </div>

        {/* Recent Posts Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Author</th>
                <th className="border-b p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {post.map((p) => (
                <tr key={p._id}>
                  <td className="border-b p-2">{p.title}</td>
                  <td className="border-b p-2">{p.owner?.fullName || "Unknown"}</td>
                  <td className="border-b p-2">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {post.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center text-gray-500 p-4">
                    No recent posts found.
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

export default AdminDashboard;
