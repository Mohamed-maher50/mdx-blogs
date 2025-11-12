import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import React from "react";
const components: MDXComponents = {
  h1: (props) => {
    return (
      <h1
        {...props}
        className="text-5xl  border-primary  border-b-8 w-fit  inline-block tracking-tight      font-bold "
      >
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    return (
      <h1 {...props} className="text-xl  font-semibold tracking-tight">
        {props.children}
      </h1>
    );
  },
};
const Mdx = ({ code }: { code: string }) => {
  const MdxComponent = useMDXComponent(code);
  return (
    <div className="prose-pre:bg-accent prose-h1:no-underline prose-headings:underline prose-pre:text-accent-foreground lg:prose-xl prose-neutral mx-auto">
      <MdxComponent components={components} />
    </div>
  );
};

export default Mdx;
