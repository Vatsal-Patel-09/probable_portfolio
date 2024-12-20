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
    <main className="container grid grid-cols-12 gap-[4rem]">

      <CursorEffectComponent />

      <div className="col-span-12 lg:col-span-5 w-full">
        <LeftContent />
      </div>
      <div className="col-span-12 lg:col-span-7 py-4 lg:py-[4rem] w-full">
        <RightContent />
      </div>
    </main>
  );
}
