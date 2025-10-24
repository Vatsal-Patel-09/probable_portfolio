export const dynamic = 'force-dynamic';

import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Import JSON data
import blogsData from "@/data/blogs.json"

const Blog = async () => {

    // Get latest 6 blogs
    const blogs = blogsData
        .filter(blog => blog.status === "published")
        .sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime())
        .slice(0, 6);

    // console.log(blogs);

    function createPreview(text: string, maxLength = 100) {

        if (text.length <= maxLength) return text;

        return text.slice(0, maxLength).trim() + "...";
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-3 text-center md:text-start" id="blog-heading">
                Blogs
            </h1>
            <p className="mb-3 text-center md:text-start">
                Stuff that I like to share and write about.
            </p>
            {blogs.map((blog) => {

                if (blog.status !== "published") return
                
                return <Link href={`/blog/${blog.slug}`} key={blog.id} prefetch={false}>
                    <BlogCard
                        title={blog.Title}
                        description={createPreview(blog.preview_text)}
                        thumbnail={
                            blog.banner_image ?
                            blog.banner_image :
                            `https://placehold.co/600x400/070e2b/dca54c?font=lora&text=${blog.Title.split(" ")[0].slice(0, -1)}`
                        }
                    />
                </Link>
            })}
            <Link href="/blog" className="btn hover:scale-110 transition duration-300 ease-in-out">
                See All Blogs
                <FaArrowRight className="mr-1" />
            </Link>
        </>
    );
};

export default Blog;
