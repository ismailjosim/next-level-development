import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ITask } from '../../../types'
import type { RootState } from '../../store'
import { v4 as uuidv4 } from 'uuid'
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
			state.tasks.push({
				...action.payload,
				id: uuidv4(),
				isCompleted: false,
			})
		},
		toggleCompleteState: (state, action: PayloadAction<string>) => {
			console.log(action.payload)
			state.tasks.forEach((task) =>
				task.id === action.payload // if id match
					? (task.isCompleted = !task.isCompleted)
					: task,
			)
		},
		deleteTask: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload)
		},
	},
})

export const selectTasks = (state: RootState) => {
	return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
	return state.todo.filter
}
export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions
export default taskSlice.reducer
