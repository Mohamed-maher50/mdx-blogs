import { allBlogs } from "@/.contentlayer/generated";
import Mdx from "@/components/Mdx";
import React from "react";
export const generateStaticParams = () => {
  return allBlogs.map((blog) => ({
    slug: blog._raw.sourceFileName,
  }));
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog._raw.sourceFileName == slug);

  if (!blog) return null;
  return (
    <>
      {/* <PostCard {...post} /> */}
      <Mdx code={blog.body.code} />
    </>
  );
};

export default page;
