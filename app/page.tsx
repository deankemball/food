import { getAllPosts } from "../lib/api";
import PostPreview from "../components/PostPreview";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const recentPosts = posts.slice(0, 2);

  return (
    <div className="flex flex-col h-full w-full bg-dark text-light">
      <div className="flex flex-col items-between h-full">
        <Image
          src={"/logo.png"}
          width="1080"
          height="1080"
          alt={"logo"}
          className="flex flex-1 h-full"
        />
        <h2 className="text-center flex flex-col flex-1 justify-center text-lg">
          sup with food
          <br />
          in this city
        </h2>
      </div>
    </div>
  );
}
