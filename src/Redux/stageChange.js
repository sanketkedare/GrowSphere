import { createSlice } from '@reduxjs/toolkit'

const changeInStage = createSlice({
    name: 'stage',
    initialState: false,
    reducers:{
        setChangeStage: (state, action)=>{
            return !state
        },

    }
})

export const {setChangeStage} = changeInStage.actions;

export default changeInStage.reducer;