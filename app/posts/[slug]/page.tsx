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
    <main className="flex flex-col md:flex-row md:justify-end align-start h-[calc(100vh-120px)]">
      <div className="md:fixed md:inset-0 md:w-1/2 h-full flex flex-col justify-start md:justify-center items-center px-8 py-4">
        <Image
          alt={`cover image for ${post.title}`}
          src={post.coverImage}
          width={400}
          height={400}
          className="w-full max-w-sm md:max-w-lg"
        />
        <div className="w-full max-w-sm flex flex-col bg-dark text-light">
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
          "flex flex-col text-light w-full h-full md:w-1/2 px-8 py-4"
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="h-16 md:h-32 shrink-0"></div>
    </main>
  );
}
