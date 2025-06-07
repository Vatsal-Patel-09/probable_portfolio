import Link from "next/link";
import React from "react";

const NavBlog = () => {
    return (
        <nav className="bg-gray-900 shadow-md">
            <div className="container py-2 flex items-center justify-between">
                <Link href="/blog" className="text-xl font-bold">
                    Clark's Blog
                </Link>
                <Link href="/" className="underline">
                    Back to Portfolio
                </Link>
            </div>
        </nav>
    );
};

export default NavBlog;
