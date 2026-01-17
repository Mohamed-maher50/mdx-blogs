import { getBlogBySlug } from "@/features/blogs/api";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
// TypeScript
import { BookOpenText } from "lucide-react";
import Code from "@/components/Code";
const components: Readonly<MDXComponents> = {
  code: async (props) => {
    const { children } = props;
    const code = children;
    return <code>{code}</code>;
  },
  pre: (props) => {
    const codeString = props?.children?.props?.children || "";
    const { children } = { ...props };
    const language = children?.props?.className?.split("-")[1];
    return (
      <>
        <Code preview={props.preview} code={codeString} language={language} />
        {/* <ScrollArea type="hover" className=" w-full ">
          <pre
            {...props}
            className="w-full!  bg-blue-500/2! border-blue-500/20  inset-shadow-blue-500/20  inset-shadow-sm border-2"
          >
            {props.children}
          </pre>
          <ScrollBar orientation="horizontal" />
        </ScrollArea> */}
      </>
    );
  },
};
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const Blog = await getBlogBySlug(slug);
  return (
    <div
      style={{
        unicodeBidi: "embed",
      }}
      className="prose  flex flex-col gap-28 max-w-full  w-full max-sm:prose-sm lg:prose-xl prose-invert"
    >
      <div className="text-center">
        <h1 className=" mb-0!  text-center flex flex-col  items-center gap-1.5">
          <BookOpenText className="size-16 text-primary" />
          {Blog.title}
        </h1>
        <p className="text-sm md:text-lg">{Blog.desc}</p>
      </div>
      <div>
        <MDXRemote
          source={Blog.content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeMdxCodeProps],
            },
          }}
        />
      </div>
    </div>
  );
};
export default page;
