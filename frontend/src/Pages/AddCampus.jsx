import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from '../api/InternalApi.js'
import { ToastContainer, toast } from 'react-toastify';

function AddCampus() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await api.post('/admin/addcampus', formData);

      setTimeout(()=>{
        navigate('/admin/')
      },500)
      toast.success(result.data.message)
      console.log(result.data.message)
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    }
   console.log(formData)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
   <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center text-purple-500 mb-6">
          Add New Campus
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campus Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Campus Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter campus name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
          >
            Add Campus
          </button>
          
          <div>
<Link to="/admin/" className="relative group">
    Dashboard-&gt;
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
     </Link>
          </div>
        
        </form>
      </div>
    </div>
  );
}

export default AddCampus;
