import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";

type PostPreviewProps = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: PostPreviewProps }) {
  return (
    <div className="w-full bg-dark px-8 py-4">
      <Link href={`/posts/${post.slug}`}>
        {post?.coverImage && (
          <div className="w-full aspect-square overflow-hidden relative">
            <Image
              alt={`cover image for ${post.title}`}
              src={post.coverImage}
              width={400}
              height={400}
            />
            <div className="absolute inset-0 blurry-edge z-10 md:mr-8 md:mb-8"></div>
          </div>
        )}
        <div className="flex flex-col">
          <p className="font-semibold text-xl self-start">{post.title}</p>
          <DateFormatter dateString={post.date} />
          {/* <p>{post.excerpt}</p> */}
        </div>
      </Link>
    </div>
  );
}
