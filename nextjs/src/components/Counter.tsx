'use client'

import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div className='flex flex-row-reverse justify-center gap-5 items-center min-h-screen'>
            <button
                onClick={() => setCounter(counter + 1)}
                className='text-2xl bg-green-500 w-10 h-10 rounded-md'
            >
                +
            </button>
            <span className='text-2xl'>{counter}</span>
            <button
                onClick={() => setCounter(counter - 1)}
                className='text-2xl bg-green-500 w-10 h-10 rounded-md'
            >
                -
            </button>
        </div>
    )
}

export default Counter
