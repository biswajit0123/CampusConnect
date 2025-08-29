
👉 **Live Demo:** [CampusConnect ->](https://campusconnect-endu.onrender.com)
👉 **GitHub Repository:** [CampusConnect Repo](https://github.com/biswajit0123/CampusConnect.git)


# CampusConnect 🎓

CampusConnect is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to connect students, teachers, and admins across campuses.  
It provides a platform to share posts, interact through comments, manage campuses, and handle admin functionalities.

---

## 🚀 Features

### 👥 User Features
- User authentication (signup/login/logout)
- Create, edit, and delete posts
- Comment on posts
- Explore campuses and posts
- Search and filter by campus or content
- Profile management

### 🛠️ Admin Features
- Admin dashboard with statistics (total users, posts, comments)
- Manage users (add/delete/block)
- Manage posts and comments
- Add new campuses (college info)
- View and moderate campus-related content

---

## 🏗️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT-based auth with cookies  
- **Others:** REST APIs, React Toastify, Icons (FontAwesome / React Icons)

---

## 📂 Project Structure

CampusConnect/
│
├── backend/
│ ├── model/ # Mongoose models (User, Post, Comment, Campus)
│ ├── controller/ # Controllers for business logic
│ ├── router/ # Express routes
│ └── server.js # Backend entry point
│
├── frontend/
│ ├── src/ # React source code (pages, components, API calls)
│ └── package.json # Frontend dependencies
│
└── README.md



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/biswajit0123/CampusConnect.git
cd CampusConnect


---

## ⚙️ Backend Setup

cd backend
npm install


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


#run
node server.js
##🎨 Frontend Setup

cd frontend
npm install
npm run dev