import { getResume } from "../../../lib/markdown";

export default async function ResumePage() {
  const resume = await getResume("es");

  return (
    <div>
      <h1 className="text-xl font-bold">
        <a href="/files/Andreas Haller Full Stack Web Developer CV.pdf" download>
          Descargar PDF
        </a>
      </h1>
      <div className="my-8 prose" dangerouslySetInnerHTML={{ __html: resume }} />
    </div>
  );
}

export const dynamic = "force-static";
