import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ITask } from '../../../types'
import type { RootState } from '../../store'
import { v4 as uuidv4 } from 'uuid'

interface InitialState {
	tasks: ITask[]
	filter: 'All' | 'High' | 'Medium' | 'Low'
}

const initialState: InitialState = {
	tasks: [
		{
			title: 'Qui aut voluptates a',
			description: 'Quis cupidatat dolor',
			priority: 'Low',
			dueDate: '2025-08-30T18:00:00.000Z',
			id: 'd1e0502e-f757-42b4-83b6-706747cfa9d8',
			isCompleted: false,
		},
		{
			title: 'Nulla qui velit con',
			description: 'Ipsam beatae debitis',
			priority: 'Low',
			dueDate: '2025-08-30T18:00:00.000Z',
			id: '64aa1576-aadb-4aa8-9d78-0d336b21873a',
			isCompleted: false,
		},
		{
			title: 'Consectetur inventor',
			description: 'Ut nihil dolore esse',
			priority: 'Medium',
			dueDate: '2025-08-30T18:00:00.000Z',
			id: '71d54fe6-aecb-41c6-9aa1-25a9e937e77d',
			isCompleted: false,
		},
		{
			title: 'Consectetur inventor',
			description: 'Ut nihil dolore esse',
			priority: 'High',
			dueDate: '2025-08-30T18:00:00.000Z',
			id: '80508508-4f11-4aed-b3a1-b5b460f685ad',
			isCompleted: false,
		},
	],
	filter: 'All',
}

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<ITask>) => {
			state.tasks.push({
				...action.payload,
				id: uuidv4(),
				isCompleted: false,
			})
		},
		toggleCompleteState: (state, action: PayloadAction<string>) => {
			state.tasks.forEach((task) =>
				task.id === action.payload // if id match
					? (task.isCompleted = !task.isCompleted)
					: task,
			)
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload)
		},
		updateFilter: (
			state,
			action: PayloadAction<'All' | 'Low' | 'Medium' | 'High'>,
		) => {
			state.filter = action.payload
		},
	},
})

export const selectTasks = (state: RootState) => {
	const filter = state.todo.filter
	if (filter === 'Low') {
		return state.todo.tasks.filter((task) => task.priority === 'Low')
	} else if (filter === 'Medium') {
		return state.todo.tasks.filter((task) => task.priority === 'Medium')
	} else if (filter === 'High') {
		return state.todo.tasks.filter((task) => task.priority === 'High')
	} else {
		return state.todo.tasks
	}
}
export const selectFilter = (state: RootState) => {
	return state.todo.filter
}
export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
	taskSlice.actions
export default taskSlice.reducer
