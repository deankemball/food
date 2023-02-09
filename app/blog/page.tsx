import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/PostPreview";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="text-light flex flex-col items-center pb-20">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 divide-y-[2px] md:divide-y-0 divide-light">
        {posts.map((post, i) => (
          <div key={i}>
            <PostPreview post={post} />
          </div>
        ))}
      </div>
    </main>
  );
}
