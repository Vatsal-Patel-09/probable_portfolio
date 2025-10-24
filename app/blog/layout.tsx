import { Metadata } from "next";
import React from "react";
import NavBlog from "./NavBlog";

export const metadata: Metadata = {
    title: "Blogs | Vatsal Patel",
    description: "Stuff that I like to share!",
    icons: {
        icon: "/favicon/favicon-32x32.png",
    },
};

const BlogLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <NavBlog />
            <div className="container py-10">
                {children}
            </div>
        </div>
    );
};

export default BlogLayout;
