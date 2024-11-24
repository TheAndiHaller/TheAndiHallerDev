import Bio from "@/app/ui/bio";
import WorkingOn from "./ui/working-on";
import Socials from "./ui/socials";
import MiniGame from "./ui/miniGame";

export default function Home() {
  return (
    <main className="sm:px-0 px-4">
      <MiniGame />
      <Bio />
      <Socials />
      <WorkingOn />
    </main>
  );
}
