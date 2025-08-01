import { decrement, increment, incrementByPayload } from './redux/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

const App = () => {
	const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()
	return (
		<div>
			<h3>Counter Application</h3>
			<section className='flex justify-center items-center gap-5'>
				<button
					className='bg-amber-700 cursor-pointer px-5 pb-5 pt-3 rounded-2xl text-2xl'
					onClick={() => dispatch(incrementByPayload(5))}
				>
					+
				</button>
				<button
					className='bg-amber-700 cursor-pointer px-5 pb-5 pt-3 rounded-2xl text-2xl'
					onClick={() => dispatch(increment())}
				>
					+
				</button>
				<p className='text-2xl font-bold'>{count}</p>
				<button
					className='bg-amber-700 cursor-pointer px-5 pb-5 pt-3 rounded-2xl text-2xl'
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
			</section>
		</div>
	)
}

export default App
