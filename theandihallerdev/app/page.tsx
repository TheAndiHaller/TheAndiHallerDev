import Socials from "./ui/socials";

export default function Home() {
  return (
    <main className="sm:px-0 px-4">
      <div className="mb-8 md:mb-10">
        <h1 className="text-lg md:text-xl font-bold pb-3 md:pb-4">
          {"Hi! I'm Andi"}
        </h1>
        <div>
          <p className="mb-4 md:mb-5 text-sm md:text-base">
            I&apos;m a <strong> programmer, maker, and designer </strong> with
            over six years of experience building projects, both for myself and
            as a freelancer. I thrive on learning and experimenting across
            various fields—embracing the idea of being a &quot;Jack of all
            trades, master of none.&quot;
          </p>
          <p className="text-sm md:text-base">
            Currently, I&apos;m on a journey to make programming my full-time
            career, seeking to carve out my place in the tech world.
          </p>
        </div>
      </div>
      {<Socials />}
      { /*  
      <div className="pb-10">
        <h1 className="text-xl font-bold pb-4">
          {"Working on "}
          <a
            className="font-bold text-underline"
            href="https://trackeen.cl/"
            target="_blank"
            rel="noopener"
          >
            Trackeen
          </a>
        </h1>
        <p className="mb-4">
          <span>
            Trackeen is a device designed to help you monitor your habits and
            track your personal growth through insightful data.
          </span>
          <br />
        </p>
        <a
          className="font-bold text-underline"
          href="https://trackeen.cl/"
          target="_blank"
          rel="noopener"
        >
          Visit Trackeen
        </a>
      </div>*/}
    </main>
  );
}
