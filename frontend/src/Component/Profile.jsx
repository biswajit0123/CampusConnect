import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Profile() {

  const user = useSelector( (state) => state.user);
  const gender = user.gender;
  return (
    <div className="w-full sm:w-1/4 p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Cover Image */}
        <div className="h-20 bg-purple-300"></div>

        {/* Profile Image */}
        <div className="flex ml-5 -mt-8">
          <img
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
            src={
      (user?.gender || "").toLowerCase() === "male"
        ? "https://avatar.iran.liara.run/public/boy"
        : "https://avatar.iran.liara.run/public/girl"
    }
            alt="Profile"
          />
        </div>

        {/* Profile Info */}
        <div className=" p-4">
          <h2 className="text-lg font-semibold">@{user.userName}</h2>
          <p className="text-sm text-gray-500">{user.collegeName}</p>
        <Link className="text-[0.65rem] font-extralight text-gray-500 relative group" to="/profilepage">
            view detail <i className="fa-solid fa-arrow-right text-[0.65rem] opacity-0 group-hover:opacity-60"></i>
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>
      
      </div>
    </div>
  );
}

export default Profile;
