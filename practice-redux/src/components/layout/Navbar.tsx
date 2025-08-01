import { Link } from 'react-router'
import { ModeToggle } from '../mode-toggle'

export default function Navbar() {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 justify-between'>
            <div className='text-xl font-black uppercase'>
                <Link to={'/'}>Logo</Link>
            </div>
            <ul className='flex items-center gap-5'>
                <Link to={'/'}>Home</Link>
                <Link to={'/user'}>Users</Link>
                <Link to={'/task'}>Task</Link>
                <div>
                    <ModeToggle />
                </div>
            </ul>
        </nav>
    )
}
