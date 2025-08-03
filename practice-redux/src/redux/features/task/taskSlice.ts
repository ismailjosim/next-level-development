import { createSlice } from '@reduxjs/toolkit'
import type { ITask } from '../../../types'
import type { RootState } from '../../store'

interface InitialState {
	tasks: ITask[]
	filter: 'All' | 'High' | 'Low'
}

const initialState: InitialState = {
	tasks: [
		{
			id: 'name123',
			title: 'title',
			description: 'des',
			dueDate: '23-25',
			isCompleted: false,
			priority: 'High',
		},
	],
	filter: 'All',
}

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {},
})

export const selectTasks = (state: RootState) => {
	return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
	return state.todo.filter
}

export default taskSlice.reducer
