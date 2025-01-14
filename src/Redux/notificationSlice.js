import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: [],
    reducers:{
        setAllNotification: (state, action)=>{
            state = action.payload;
        },
        deleteAllNotifications : (state) =>{
            state.user = null;
        }

    }
})

export const {setAllNotification, deleteAllNotifications} = notificationSlice.actions;

export default notificationSlice.reducer;