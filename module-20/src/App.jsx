import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice'

const App = () => {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()
	return (
		<div>
			<div className='counter_container'>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span className='counter_span'>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default App
