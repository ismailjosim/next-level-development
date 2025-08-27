"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/counter", label: "Counter" },
    { href: "/products", label: "Products" },
];

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();

    return (
        <div className="py-5 flex items-center justify-between">
            <Link href="/" className="text-amber-500 text-2xl">
                Logo
            </Link>

            <div className="space-x-5">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={
                            pathName === href
                                ? "text-amber-500 underline font-semibold"
                                : "hover:text-gray-200"
                        }
                    >
                        {label}
                    </Link>
                ))}
                <button
                    onClick={() => router.push("/dashboard")}
                    className="hover:text-gray-200"
                >
                    Dashboard
                </button>
            </div>
        </div>
    );
};

export default Navbar;
