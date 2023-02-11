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
    <main className="flex justify-end align-start h-[calc(100vh-120px)]">
      <div className="fixed inset-0 w-1/2 flex flex-col justify-center px-8 py-4">
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={400}
          height={400}
          className="w-full"
        />
        <div className="w-full flex flex-col bg-dark text-light">
          <div className="flex gap-2 justify-between">
            <p className="text-md">{`${post.rating}/5`}</p>
            <p className="text-md">{`${post.venue}`}</p>
            <p className="text-md">{post.price}</p>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          markdownStyles["markdown"],
          "flex flex-col text-light w-1/2 px-8 py-4"
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
