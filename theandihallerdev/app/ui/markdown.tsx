import { useEffect, useState } from 'react';
import { marked } from 'marked';

const MarkdownRenderer = ({ filePath }: { filePath: string }) => {


  const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');


  return (
    <div
      dangerouslySetInnerHTML={{ __html: html}}
      className="prose"
    />
  );
};

export default MarkdownRenderer;
