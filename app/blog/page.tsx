import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/PostPreview";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="text-light flex flex-col gap-4 items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 gap-4">
        {posts.map((post, i) => (
          <div key={i}>
            <PostPreview post={post} />
          </div>
        ))}
      </div>
    </main>
  );
}
