import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Navbar from "./Component/Navbar.jsx";
import Protected from "./Component/Protected.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import { useSelector } from "react-redux";
import ExplorePage from "./Pages/ExplorePage.jsx";

function App() {

const isAuth = useSelector((state) => state.user.auth);

  return (
    <BrowserRouter>
     
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
              <Route path="/" element={
                 <Protected isAuth={isAuth}> 
                       <ExplorePage />
                 </Protected>
              } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            
             <Route path="/createpost" element={
              <Protected isAuth={isAuth}> 
              <CreatePost />
              </Protected>
              } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
