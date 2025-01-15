import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice'
import notificationReducer from './notificationSlice'
import changeInStageReducer from './stageChange'

const store = configureStore({
    reducer:{
        user:userReducer,
        notification: notificationReducer,
        stage: changeInStageReducer
    }
})

export default store;