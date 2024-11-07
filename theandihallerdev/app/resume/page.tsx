import MarkdownRenderer from '@/app/ui/markdown';

export default function Page() {
  return (
    <main>
      <h1 className="text-xl font-bold">My resume</h1>
      <a href="/files/resume_en.pdf" download>
        Download PDF
      </a>
      <MarkdownRenderer filePath="/path/to/yourfile.md"/>
    </main>
  );
}
