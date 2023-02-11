import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/PostPreview";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="text-light flex flex-col items-center pb-12">
      <div className="grid md:grid-cols-3 grid-cols-1 divide-y-[2px] md:divide-y-0 divide-light md:gap-4 px-8 py-4">
        {posts.map((post, i) => (
          <div key={i}>
            <PostPreview post={post} />
          </div>
        ))}
      </div>
    </main>
  );
}
