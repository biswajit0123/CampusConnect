import React, { useState, useEffect } from "react";
import Sidebar from "../Component/AdminSidebar";
import { useLocation } from "react-router-dom";

const UserList = () => {
  const { state } = useLocation();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (state?.user) {
      setUsers(state.user);
    }
  }, [state]);

  // Filter users based on search term
  const filteredUsers = users.filter((u) =>
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full sm:flex-row min-h-screen bg-gray-100">
      <Sidebar post={state.post} user={state.user} comment={state.comment} />
      <div className="flex-1 p-3">
        <h1 className="text-2xl font-bold mb-3">All Users</h1>

        {/* Search Input */}
        <div className="mb-4 w-full">
          <input
            className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Enter email to find user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-b p-2">Name</th>
                <th className="border-b p-2">Email</th>
                <th className="border-b p-2">Campus</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u) => (
                  <tr key={u._id} className="relative  hover:bg-gray-100  ">
                    <td className="border-b p-2">{u.fullName}</td>
                    <td className="border-b p-2">{u.email}</td>
                    <td className="border-b p-2">{u.collegeName}</td>
                    <button className="absolute right-4  text-xs p-1 rounded-3xl bottom-0">remove</button>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="text-center text-gray-500 p-4"
                  >
                    No users found.
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

export default UserList;
