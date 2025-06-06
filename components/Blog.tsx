import React, { cache } from "react";
import BlogCard from "./BlogCard";
import { createDirectus, rest, readItems } from "@directus/sdk";
import Link from "next/link";

const client = createDirectus("https://test-directus.jcic.online").with(rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  }));

export const dynamic = 'force-dynamic';

const Blog = async () => {

    // query to Directus
    const query_object = {
        fields: ["id", "Title", "preview_text", "banner_image", "slug", "status"],
    };
    const blogs = await client.request(readItems("Portfolio_Blog", query_object));

    console.log(blogs);

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
                
                return <Link href={`/blog/${blog.slug}`} key={blog.id}>
                    <BlogCard
                        title={blog.Title}
                        description={createPreview(blog.preview_text)}
                        thumbnail={
                            blog.banner_image ?
                            "https://test-directus.jcic.online/assets/" + blog.banner_image :
                            "https://placehold.co/600x400/070e2b/dca54c?font=lora&text=" + blog.Title
                        }
                    />
                </Link>
            })}
        </>
    );
};

export default Blog;
