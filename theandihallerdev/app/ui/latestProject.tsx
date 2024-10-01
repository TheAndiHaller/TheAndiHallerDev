import { getLatestPosts } from "@/app/lib/actions";

export default async function LatestProjects() {
  const posts = await getLatestPosts("project");
  return (
    <div>
      <h1 className="text-xl font-bold">More Projects:</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
