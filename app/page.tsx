import LeftContent from "@/components/LeftContent";
import RightContent from "@/components/RightContent";

export const metadata = {
  title: "Jerry Clark Ian Cabuntucan",
  description: "Portfolio website",
}
export default function Home() {
  return (
    <main className=" lg:px-[5rem] grid grid-cols-12 gap-0">
      <div className="col-span-12 lg:col-span-5">
        <LeftContent />
      </div>
      <div className="col-span-12 lg:col-span-7 p-4 lg:p-[4rem]">
        <RightContent />
      </div>
    </main>
  );
}
