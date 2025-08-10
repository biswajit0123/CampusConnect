import React, { useEffect, useState } from "react";
import api from "../api/InternalApi";
import { Link } from 'react-router-dom';
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

  

  // Filter campuses by search text
  const filteredCampuses = campuses.filter((campus) =>
    campus.name.toLowerCase().includes(search.toLowerCase())
  );


  //show post by campus
  const showCampusPost = async (name) =>{
    setSelectedCampus(true);
try {
  const result = await api.get(`/campus/${name}`);
  console.log(result.data);
  setPosts(result.data);
} catch (error) {
  console.log(error.response.data)
}
    
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Browse Campuses</h1>

      {/* Search box */}
    { !selectedCampus && <input
        type="text"
        placeholder="Search college..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      }
      {/* Campus list */}
      {!selectedCampus && <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredCampuses.map((campus) => (
          <div
            key={campus._id}
            onClick={() => showCampusPost(campus.name)}
            className={`border p-4 rounded shadow cursor-pointer hover:bg-purple-100 transition`}
          >
            <h2 className="font-semibold">{campus.name}</h2>
            <p className="text-xs text-gray-600">{campus.location}</p>
          </div>
        ))}
      </div>}

   {selectedCampus && <button onClick={() => setSelectedCampus(false)}>{"<-go back"}</button>
}   {selectedCampus && <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             
       {posts.map((post) => {
        return <div className="border p-2"> 
              
                  <h4>{post.title}</h4>
                  <p>{post.content}</p>
                   <Link to={`/${post._id}`} className="text-[0.65rem] font-extralight text-gray-500 relative group">
            view detail <i className="fa-solid fa-arrow-right text-[0.65rem] opacity-0 group-hover:opacity-60"></i>
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
              </div>
       })}

                 </div> 
   }
    
    </div>
  );
}

export default Campus;
