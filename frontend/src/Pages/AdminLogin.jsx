import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/InternalApi.js';
import { ToastContainer, toast } from 'react-toastify';



export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    try {
     const adminData = {
        email,
        password
     }

     const result = await api.post('/admin/login', adminData);
     toast.success(result.data.message);
     setTimeout(()=>{
     navigate('/admin')
     },300)
     console.log(result.data.message)
    } catch (err) {
      setError(err.response.data.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <ToastContainer />
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* left: marketing / brand panel - hidden on small */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-sky-500 text-white rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-3">CampusConnect Admin</h1>
          <p className="opacity-90">Manage site users, posts, and moderation from a secure admin console.</p>

          <ul className="mt-6 space-y-3 text-sm opacity-95">
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Moderation tools and analytics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>Post & comment management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <span>User verification & reports</span>
            </li>
          </ul>

          <p className="mt-6 text-xs opacity-85">Designed responsive — works great on mobile and desktop.</p>
        </div>

        {/* right: form */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Admin Sign In</h2>
            <p className="text-sm text-gray-500">Enter your admin credentials to continue</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 p-2"
                placeholder="admin@college.edu"
                autoComplete="email"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Password</span>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 p-2 pr-10"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded" />
                <span>Remember me</span>
              </label>

              <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white py-2 rounded-md font-medium transition"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-xs text-center text-gray-400">
            Only authorized admins can access this panel.
          </div>
        </div>
      </div>
    </div>
  );
}
