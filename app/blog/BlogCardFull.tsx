import Image from "next/image";
import React from "react";

interface BlogProp {
    title: string;
    description: string;
    thumbnail: string;
    date: string;
}

const BlogCardFull = ({ title, description, thumbnail, date }: BlogProp) => {
    return (
        <div className="p-4 mb-5 rounded-xl hover:bg-primary hover:bg-opacity-10 transition duration-300 ease-in-out border border-amber-500 min-h-full">
            <div className="text-sm text-primary flex items-center justify-center mb-4">
                <Image
                    src={thumbnail}
                    alt="blog image"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            </div>
            <div className="">
                <h1 className="text-lg font-bold mb-2">{title}</h1>
                <p className="text-gray-500 text-sm mb-5 ">{new Date(date).toDateString()}</p>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default BlogCardFull;
