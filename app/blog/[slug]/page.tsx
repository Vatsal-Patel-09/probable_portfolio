export const dynamic = "force-dynamic";

import { createDirectus, rest, readItems } from "@directus/sdk";
import React from "react";
import BlockParser from "./BlockParser";
import Image from "next/image";
import Link from "next/link";

const client = createDirectus("https://test-directus.jcic.online").with(
    rest({
        onRequest: (options) => ({ ...options, cache: "no-store" }),
    })
);

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    // query to Directus
    const query_object = {
        filter: {
            slug: {
                _eq: slug,
            },
        },
    };
    const result = await client.request(readItems("Portfolio_Blog", query_object));

    console.log(result[0].body.blocks);
    return (
        <>
            <div className="container py-10">
                <div className="mb-5 py-5 bg-primary bg-opacity-10 transition duration-300 ease-in-out">
                    <h1 className="text-3xl font-bold mb-3 text-center">{result[0].Title}</h1>
                    <div className="text-center">
                        <p>
                            Published Date: {new Date(result[0].date_created).toDateString()}
                        </p>
                        <p className="text-sm text-gray-500">Last updated: {new Date(result[0].date_updated).toDateString()}</p>
                    </div>
                </div>

                <div className="flex justify-center mb-10">
                    <Image
                        src={
                            result[0].banner_image
                                ? "https://test-directus.jcic.online/assets/" +
                                  result[0].banner_image
                                : "https://placehold.co/600x400/070e2b/dca54c?font=lora&text=" +
                                  result[0].Title
                        }
                        alt="blog image"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-md"
                    />
                </div>

                <BlockParser blocks={result[0].body.blocks} />
                <div className="mt-10 flex justify-end">
                    <a href="#" className="underline">
                        Back to Top
                    </a>
                </div>
            </div>
        </>
    );
};

export default page;
