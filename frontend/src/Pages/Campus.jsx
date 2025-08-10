import React, { useEffect, useState } from "react";
import api from "../api/InternalApi";

function Campus() {
  const [campuses, setCampuses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [posts, setPosts] = useState([]);

  // Fetch all campuses
  useEffect(() => {
    const getCampus = async () => {
      try {
        const result = await api.get("/campus");
        setCampuses(result.data);
      } catch (error) {
        console.error("Error fetching campuses", error);
      }
    };
    getCampus();
  }, []);

  // Fetch posts for selected campus
  useEffect(() => {
    if (!selectedCampus) return;
    const getPosts = async () => {
      try {
        const result = await api.get(`/posts/${selectedCampus._id}`);
        setPosts(result.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };
    getPosts();
  }, [selectedCampus]);

  // Filter campuses by search text
  const filteredCampuses = campuses.filter((campus) =>
    campus.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Browse Campuses</h1>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search college..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Campus list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredCampuses.map((campus) => (
          <div
            key={campus._id}
            onClick={() => setSelectedCampus(campus)}
            className={`border p-4 rounded shadow cursor-pointer hover:bg-purple-100 transition ${
              selectedCampus?._id === campus._id ? "bg-purple-200" : ""
            }`}
          >
            <h2 className="font-semibold">{campus.name}</h2>
            <p className="text-xs text-gray-600">{campus.location}</p>
          </div>
        ))}
      </div>

      {/* Posts for selected campus */}
      {selectedCampus && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">
            Posts from {selectedCampus.name}
          </h2>
          {posts.length === 0 ? (
            <p className="text-gray-500 text-sm">No posts yet.</p>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="border p-3 rounded shadow-sm bg-white"
                >
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-700">{post.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Campus;
