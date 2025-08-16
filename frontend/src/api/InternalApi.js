import axios from 'axios';

const api = axios.create({
    baseURL:'https://campusconnect-backend-xz5q.onrender.com',
    // baseURL:'http://localhost:3000',

    withCredentials:true,
      headers: {
    "Content-Type": "application/json",
  },
});


// export const logout = async () => {
//     try {
//         let res = await api.get("/auth/logout");        
//     } catch (error) {
//         console.log(error)
//     }
// }


export default api;
