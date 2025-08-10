
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id:"",
    fullName:"",
    email:"",
    auth:false
}


const userSlice = createSlice({
    name:"admin",
    initialState:initialState,
    reducers:{
        setAdmin: ( state, action ) =>{

            const {_id, fullName, email }= action.payload;

            state._id = _id;
            state.fullName = fullName;
            state.email  = email;
            state.auth = true;
          

        },

        resetAdmin :(state) => {
              state._id = "";
            state.fullName = "";
            state.email  = "";
            state.auth = false;
        }


    }
})

export const { setAdmin, resetAdmin } = userSlice.actions;
export default userSlice.reducer;