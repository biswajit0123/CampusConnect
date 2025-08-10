import { configureStore } from '@reduxjs/toolkit'

import user from './userSlice.js'
import admin from './adminSlice.js'
const store = configureStore({
    reducer:{user,admin}
})

export default store;