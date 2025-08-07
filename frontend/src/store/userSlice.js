
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id:"",
    userName:"",
    fullName:"",
    email:"",
    collegeName:"",
    course:"",
    branch:"",
    country:"",
    auth:false
}


const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUser: ( state, action ) =>{

            const {_id, fullName, userName, email, branch, country, course, collegeName }= action.payload;

            state._id = _id;
            state.userName = userName;
            state.fullName = fullName;
            state.email  = email;
            state.collegeName = collegeName;
            state.course = course;
            state.country  = country;
            state.branch = branch;
            state.auth = true;

        },

        resetUser :(state) => {
              state._id = "";
            state.userName = "";
            state.fullName = "";
            state.email  = "";
            state.collegeName = "";
            state.course = "";
            state.country  = "";
            state.branch = "";
            state.auth = false;
        }


    }
})

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;