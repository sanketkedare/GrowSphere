import { createSlice } from '@reduxjs/toolkit'

const changeInStage = createSlice({
    name: 'stage',
    initialState: false,
    reducers:{
        setChangeStage: (state, action)=>{
            state = action.payload
        },

    }
})

export const {setChangeStage} = changeInStage.actions;

export default changeInStage.reducer;