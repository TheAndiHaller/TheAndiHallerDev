import { getLatestPosts } from "@/app/lib/actions";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/LanguageContext";
import { Post } from '@prisma/client'

export default function LatestProjects() {
  const { language } = useLanguage(); // Access the language from context
  const [posts, setPosts] = useState<Post[]>([]); // State to hold posts data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const result = await getLatestPosts("project");

        setPosts(result);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [language]); // Re-fetch posts whenever the language changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">{language === "En" ? "Other projects:" : "Otros proyectos:"}</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-lg font-bold py-2">{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
