import { getResume } from "../../lib/markdown";

export default async function ResumePage() {
  const resume = await getResume("en");

  return (
    <div>         
       <h1 className="text-xl font-bold">
            <a href="/files/Andreas Haller Full Stack Web Developer resume.pdf" download>
              Download PDF
            </a>
          </h1>
      <div className="my-8 prose" dangerouslySetInnerHTML={{ __html: resume }} />
    </div>
  );
}

export const dynamic = "force-static";
