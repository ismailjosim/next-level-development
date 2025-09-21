"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
    const handleNavigation = () => {
        router.push('/dashboard')
    }
    return (
        <div className="space-x-5 py-5">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/counter" className="hover:text-gray-200">Counter</Link>
            <button onClick={handleNavigation} className="hover:text-gray-200">Dashboard</button>
        </div>
    );
};

export default Navbar;
