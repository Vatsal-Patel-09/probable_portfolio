import Image from "next/image";
import React from "react";


interface BlogProp {
    title: string;
    description: string;
    thumbnail: string;
}

const BlogCard = ({ title, description, thumbnail}: BlogProp) => {
    return (
        <div className="grid grid-cols-12 gap-2 p-4 md:p-8 rounded-xl hover:bg-primary hover:bg-opacity-10 transition duration-300 ease-in-out border border-amber-500 mb-5">
            <div className="col-span-12 md:col-span-6">
                <h1 className="text-lg font-bold mb-5 ">{title}</h1>
                <p className="text-sm">{description}</p>
            </div>

            <div className="col-span-12 md:col-span-6 text-sm text-primary flex items-center justify-center">
                <Image
                    src={thumbnail}
                    alt="blog image"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                />
            
            
            </div>
        </div>
    );
};

export default BlogCard;
