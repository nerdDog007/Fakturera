import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/Auth'
import DashSlice from './slices/Dash'

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    dash: DashSlice
  },
})

