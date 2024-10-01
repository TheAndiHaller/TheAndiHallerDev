import { getAllPosts } from '@/app/lib/actions';
import Footer from '@/app/ui/footer';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Projects</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}