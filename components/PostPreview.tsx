import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";

type PostPreviewProps = {
  [key: string]: string;
};

export default function PostPreview({ post }: { post: PostPreviewProps }) {
  return (
    <div className="flex justify-center w-full bg-dark">
      <Link href={`/posts/${post.slug}`}>
        {post?.coverImage && (
          <div className="flex justify-center w-full aspect-square overflow-hidden">
            <Image
              alt={`cover image for ${post.title}`}
              src={post.coverImage}
              width={400}
              height={400}
              className="w-full"
            />
          </div>
        )}
        <div className="flex h-20 justify-between w-full">
          <p className="font-semibold text-lg flex-1 flex">{post.title}</p>
          <DateFormatter dateString={post.date} />
          {/* <p>{post.excerpt}</p> */}
        </div>
      </Link>
    </div>
  );
}
