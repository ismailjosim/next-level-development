import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/task/taskSlice'

export const store = configureStore({
	reducer: {
		// ... all reducer goes here
		todo: taskReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
