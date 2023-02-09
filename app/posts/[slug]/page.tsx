import { getPostBySlug } from "../../../lib/api";
import mdToHtml from "../../../lib/mdToHtml";
import markdownStyles from "./markdown-styles.module.css";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";

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
      <div className="w-full overflow-none bg-dark relative flex flex-col md:flex-row px-4 py-2">
        <div className="w-full aspect-square md:aspect-auto overflow-hidden flex flex-col items-center justify-start px-8 py-4">
          <div className="relative w-full max-w-lg flex justify-center">
            <Image
              alt={`cover image for ${post.title}`}
              src={post.coverImage}
              width={400}
              height={400}
            />
            <div className="absolute inset-0 blurry-edge z-10"></div>
          </div>
          <div className="w-full flex flex-col bg-dark text-light">
            <div className="flex gap-2 justify-between">
              <p className="text-md">{`${post.rating}/5`}</p>
              <p className="text-md">{`${post.venue}`}</p>
              <p className="text-md">{post.price}</p>
            </div>
          </div>
        </div>
        <div
          className={clsx(markdownStyles["markdown"], "bg-dark text-light")}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  );
}
