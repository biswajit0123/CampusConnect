import React, { useState, useEffect } from "react";
import Sidebar from "../Component/AdminSidebar";
import { useLocation } from "react-router-dom";

const UserList = () => {
  const { state } = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (state?.user) {
      setUsers(state.user);
    }
  }, [state]);

  return (
    <div className="flex flex-col w-full sm:flex-row min-h-screen bg-gray-100">
      <Sidebar  post={state.post} user={state.user} comment={state.comment}/>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">All Users</h1>
        <div className="bg-white shadow rounded-lg p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Name</th>
                <th className="border-b p-2">Email</th>
                <th className="border-b p-2">Campus</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((u) => (
                  <tr key={u._id}>
                    <td className="border-b p-2">{u.fullName}</td>
                    <td className="border-b p-2">{u.email}</td>
                     <td className="border-b p-2">{u.collegeName}</td>
                   
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
