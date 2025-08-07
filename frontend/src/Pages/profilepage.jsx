import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from './imgback.avif'


const Profile = () => {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
        </div>

        <div className="text-center mt-4">
          <h1 className="text-xl font-bold" id="userName">Biswajit Muduli</h1>
          <p className="text-gray-500" id="userHandle">@biswajit</p>
        </div>

        <div className="mt-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="button">Follow</button>
        </div>

        <p className="text-center text-sm text-gray-700 mt-4" id="userBio">
          Frontend Developer | Building awesome web experiences with ReactJs, HTML and CSS. Love open source and clean code!
        </p>

        <p className="text-gray-400 text-sm mt-2">Joined: 2020-01-01</p>

        <div className="flex justify-center space-x-6 mt-4">
          <p><b>56</b> Following</p>
          <p><b>43</b> Followers</p>
        </div>

        <div className="flex justify-around w-full mt-6 border-b border-gray-200">
          <div className="py-2 border-b-2 border-blue-500">Posts</div>
          <div className="py-2 text-gray-500">Media</div>
          <div className="py-2 text-gray-500">Likes</div>
        </div>

        <div className="mt-6 w-full">
          <Post
            avatar="https://via.placeholder.com/50"
            name="Jane Doe"
            handle="@janedoe"
            time="1h"
            content="Just finished building my new portfolio website! 🚀"
          />
          <Post
            avatar="https://via.placeholder.com/50"
            name="DevGuy"
            handle="@devguy"
            time="2h"
            content="React + Tailwind is such a powerful combo. 💻🔥"
          />
          <Post
            avatar="https://via.placeholder.com/50"
            name="TravelBug"
            handle="@travelbug"
            time="3h"
            content="Exploring the mountains this weekend. 🏞 Any tips?"
          />
        </div>
      </div>
    </div>
  );
};

const Post = ({ avatar, name, handle, time, content }) => (
  <div className="flex space-x-4 mb-6">
    <img src={avatar} className="w-12 h-12 rounded-full" alt="User Avatar" />
    <div>
      <div className="text-sm text-gray-700">
        <strong>{name}</strong> <span className="text-gray-500">{handle} · {time}</span>
      </div>
      <p className="text-sm mt-1 text-gray-800">{content}</p>
    </div>
  </div>
);

export default Profile;
