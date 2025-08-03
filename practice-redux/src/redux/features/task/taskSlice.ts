import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ITask } from '../../../types'
import type { RootState } from '../../store'

interface InitialState {
	tasks: ITask[]
	filter: 'All' | 'High' | 'Low'
}

const initialState: InitialState = {
	tasks: [],
	filter: 'All',
}

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<ITask>) => {
			const id = initialState.filter.length + 1
			state.tasks.push({ ...action.payload, id, isCompleted: false })
		},
	},
})

export const selectTasks = (state: RootState) => {
	return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
	return state.todo.filter
}
export const { addTask } = taskSlice.actions
export default taskSlice.reducer
