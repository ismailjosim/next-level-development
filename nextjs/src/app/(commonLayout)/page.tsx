"use client"

import { useRouter } from "next/navigation";



const HomePage = () => {
  const router = useRouter()
  const handleNavigation = () => {
    router.push('/dashboard')
  }
  return (
    <div className="text-center space-y-2">
      <p>this is homepage</p>
      <button onClick={handleNavigation} className="bg-amber-600 px-10 py-2 rounded-4xl">Dashboard</button>
    </div>
  );
};

export default HomePage;
