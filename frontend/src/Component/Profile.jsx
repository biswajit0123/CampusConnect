import React from 'react';
import profileimg  from '../images/pfimg.jpeg'
function Profile() {
  return (
    <div className="w-1/4 p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Cover Image */}
        <div className="h-20 bg-purple-300"></div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-8">
          <img
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
            src={profileimg}
            alt="Profile"
          />
        </div>

        {/* Profile Info */}
        <div className="text-center p-4">
          <h2 className="text-lg font-semibold">Gyan</h2>
          <p className="text-sm text-gray-500">MCA, ITER</p>
          <p className="text-sm text-gray-500">Computer Application</p>
          <p className="text-sm text-gray-500">India</p>
        </div>
       
      </div>
    </div>
  );
}

export default Profile;
