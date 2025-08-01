import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		// feature 01: increment value
		increment: (state) => {
			state.value += 1
		},
		// feature 02: Decrement value
		decrement: (state) => {
			state.value -= 1
		},
		// feature 03: increment by payload
		incrementByPayload: (state, action) => {
			console.log(action)
			state.value += action.payload
		},
	},
})

export const { increment, decrement, incrementByPayload } = counterSlice.actions
export default counterSlice.reducer
