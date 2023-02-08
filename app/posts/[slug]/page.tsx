import { getPostBySlug } from "../../../lib/api";
import mdToHtml from "../../../lib/mdToHtml";
import markdownStyles from "./markdown-styles.module.css";
import Image from "next/image";
import clsx from "clsx";

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
      <div className="w-full aspect-square overflow-hidden bg-dark">
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={400}
          height={400}
        />
      </div>
      <div className="w-full flex flex-col bg-dark text-light">
        <h2 className="text-2xl text-center px-4">{post.title}</h2>
        <div className="flex gap-2 justify-between px-4">
          <p className="text-md">{`${post.rating}/5`}</p>
          <p className="text-md">{`${post.venue}`}</p>
          <p className="text-md">{post.price}</p>
        </div>
      </div>
      <div
        className={clsx(markdownStyles["markdown"], "bg-dark text-light px-4")}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
