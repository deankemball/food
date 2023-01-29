import { getPostBySlug } from "../../../lib/api";
import mdToHtml from "../../../lib/mdToHtml";
import markdownStyles from "./markdown-styles.module.css";
import Image from "next/image";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "venue",
    "content",
    "coverImage",
    "price",
    "rating",
  ]);

  const content = await mdToHtml(post.content || "");

  return (
    <main>
      <div className="w-full aspect-square overflow-hidden">
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={400}
          height={400}
        />
      </div>
      <div className="w-full grid grid-cols-2 px-2">
        <p className="text-2xl span-1">{post.title}</p>
        <p className="text-2xl span-1 text-right">{`${post.rating}/5`}</p>
        <p className="span-1">{`location: ${post.venue}`}</p>
        <p className="text-2xl span-1 text-right">{post.price}</p>
      </div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
