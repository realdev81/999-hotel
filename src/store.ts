import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'
import authReducer from './features/authSlice'

export const store = configureStore({
  reducer: {
    user: authReducer,
  },
})

export default store

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>