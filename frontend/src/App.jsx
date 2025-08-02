import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from   './Pages/HomePage/HomePage.jsx';
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
     
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
