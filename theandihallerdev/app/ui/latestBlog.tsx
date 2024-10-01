import { getLatestPosts } from "@/app/lib/actions";

export default async function LatestBlog() {
  const posts = await getLatestPosts("blog");

  return (
    <div>
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
