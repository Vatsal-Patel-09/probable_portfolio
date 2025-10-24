export const dynamic = 'force-dynamic';

import SideSection from "@/app/SideSection";
import MainSection from "@/app/MainSection";


export const metadata = {
    title: "Vatsal Patel",
    description: "Portfolio website - Software Developer",
};

export default function Home() {
    return (
        <>
            <div className="container flex flex-col md:flex-row lg:flex-row gap-10">
                <div className="w-full md:w-1/2 lg:w-5/12">
                    <SideSection />
                </div>
                <div className="w-full md:w-1/2 lg:w-7/12 py-4 lg:py-[4rem]">
                    <MainSection />
                </div>
            </div>
        </>
    );
}
