import { getAllPosts } from "../lib/api";
import PostPreview from "../components/PostPreview";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 2);

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col">
        <h1 className="text-center text-5xl">food blog</h1>
        <p className="text-center text-xl">real food talk</p>
      </div>
      <div className="flex items-center justify-center h-full">
        <p>placeholder welcome text / animation</p>
      </div>
    </div>
  );
}
