import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Navbar from "./Component/Navbar.jsx";
import Protected from "./Component/Protected.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import { useSelector } from "react-redux";
import ExplorePage from "./Pages/ExplorePage.jsx";
import PostDetail from "./Pages/PostDetail.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import ProtectedAdmin from "./Component/ProtectedAdmin.jsx";
import UserList from "./Pages/UserList.jsx";
import PostList from "./Pages/PostList.jsx";
import CommentList from "./Pages/CommentList.jsx";
import AddCampus from "./Pages/AddCampus.jsx";
import Campus from "./Pages/Campus.jsx";
import ProfilePage from "./Pages/profilepage.jsx";
import Footer from "./Component/Footer.jsx";
import HomePage from "./Pages/home.jsx";
function App() {

const isAuth = useSelector((state) => state.user.auth);
const isAdmin = useSelector((state) => state.admin.auth)
console.log(isAdmin)
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
            <Route path="/home" element={<HomePage />} />


            
             <Route path="/createpost" element={
              <Protected isAuth={isAuth}> 
              <CreatePost />
              </Protected>
              } />
             <Route path="/campus" element={
              <Protected isAuth={isAuth}> 
              <Campus />
              </Protected>
              } />
               <Route path="/profilepage" element={
              <Protected isAuth={isAuth}> 
              <ProfilePage />
              </Protected>
              } />
             <Route path="/:id" element={
              <Protected isAuth={isAuth}> 
              <PostDetail />
              </Protected>
              } />

              <Route path="/admin/login" element={
                <AdminLogin />
              } />

               <Route path="/admin" element={
                <ProtectedAdmin isAdmin={isAdmin}>
                <AdminDashboard />
                </ProtectedAdmin>
              } />
               <Route path="/admin/userlist" element={
                <ProtectedAdmin isAdmin={isAdmin}>
                <UserList />
                </ProtectedAdmin>
              } />

              <Route path="/admin/postlist" element={
                <ProtectedAdmin isAdmin={isAdmin}>
                <PostList />
                </ProtectedAdmin>
              } />

               <Route path="/admin/commentlist" element={
                <ProtectedAdmin isAdmin={isAdmin}>
                <CommentList />
                </ProtectedAdmin>
              } />
              <Route path="/admin/addcampus" element={
                <ProtectedAdmin isAdmin={isAdmin}>
                <AddCampus />
                </ProtectedAdmin>
              } />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
