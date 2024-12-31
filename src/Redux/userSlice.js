import { createSlice } from '@reduxjs/toolkit'

const userReducer = createSlice({
    name: 'user',
    initialState: {user: null},
    reducers:{
        setUser: (state, action)=>{
            state.user = action.payload;
        },
        deleteUser : (state) =>{
            state.user = null;
        }

    }
})

export const {setUser, deleteUser} = userReducer.actions;

export default userReducer.reducer;