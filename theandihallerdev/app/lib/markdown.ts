import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export async function getPost(lang: "en" | "es", slug: string): Promise<Post> {
  const filePath = path.join(process.cwd(), "content", "blog", lang, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: data.slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
  };
}

export function getAllPosts(lang: "en" | "es"): Post[] {
  const dirPath = path.join(process.cwd(), "content", "blog", lang);
  const files = fs.readdirSync(dirPath);
  const posts = files
    .map((file) => {
      const filePath = path.join(dirPath, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        content: "",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}