import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer2/hooks";
function PostCard(post: Post) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`${post.url}`}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <MDXContent />
    </div>
  );
}
export default PostCard;
