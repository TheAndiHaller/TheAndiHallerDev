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
  description: string;
  image: string;
}

export async function getPost(type: "blog" | "projects", lang: "en" | "es", slug: string): Promise<Post> {
  const filePath = path.join(process.cwd(), "content", type, lang, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: data.slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
    description: data.description,
    image: data.image,
  };
}

export function getAllPosts(type: "blog" | "projects", lang: "en" | "es"): Post[] {
  const dirPath = path.join(process.cwd(), "content", type, lang);
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
        description: data.description,
        image: data.image,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getAllPostSlugs(type: "blog" | "projects", lang: "en" | "es"): { params: { slug: string } }[] {
  const posts = getAllPosts(type, lang);
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export async function getResume( lang: "en" | "es"): Promise<string> {
  const filePath = path.join(process.cwd(), "content", "resume", lang, "resume.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return contentHtml;
}