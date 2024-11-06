import Bio from "@/app/ui/bio";
import WorkingOn from "./ui/working-on";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[600px] mx-auto">
        <Bio />
        <WorkingOn />
      </main>
    </div>
  );
}
