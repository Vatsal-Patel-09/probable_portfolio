import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";
import dynamic from 'next/dynamic'

// To disable SSR for CursorEffectComponent
const CursorEffectComponent = dynamic(() => import('@/components/CursorEffectComponent'), { ssr: false })

export const metadata = {
  title: "Jerry Clark Ian Cabuntucan",
  description: "Portfolio website",
}

export default function Home() {
  return (
    <>
    <CursorEffectComponent />
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
