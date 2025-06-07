export const dynamic = 'force-dynamic';

import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";


export const metadata = {
    title: "Jerry Clark Ian Cabuntucan",
    description: "Portfolio website - Fullstack Developer",
};

export default function Home() {
    return (
        <>
            <div className="container flex flex-col md:flex-row lg:flex-row gap-10">
                <div className="w-full md:w-1/2 lg:w-5/12">
                    <LeftContent />
                </div>
                <div className="w-full md:w-1/2 lg:w-7/12 py-4 lg:py-[4rem]">
                    <RightContent />
                </div>
            </div>
        </>
    );
}
