import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaFileAlt, FaComments, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetAdmin } from "../store/adminSlice.js";

const AdminSidebar = ({post, user, comment}) => {
  const navigate = useNavigate();
   const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(resetAdmin());
    navigate('/admin/login');
  };

  return (
    <div className="sm:w-64 bg-white shadow-md sm:h-screen w-full p-4  sticky top-0">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link state={{user,post,comment}} className="flex items-center gap-2 hover:text-blue-500" to="/admin/userlist">
          <FaUsers /> Users
        </Link>
        <Link state={{user,post,comment}} className="flex items-center gap-2 hover:text-blue-500" to="/admin/postlist">
          <FaFileAlt /> Posts
        </Link>
        <Link state={{user,post,comment}} className="flex items-center gap-2 hover:text-blue-500" to="/admin/commentlist">
          <FaComments /> Comments
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 mt-4"
        >
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
