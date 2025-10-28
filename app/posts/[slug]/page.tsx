import { allPosts } from "@/.contentlayer/generated";
import Mdx from "@/components/Mdx";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);
  if (!post) return null;

  return (
    <>
      {/* <PostCard {...post} /> */}
      <Mdx code={post.body.code} />
    </>
  );
};

export default page;
