import { useMDXComponent } from "next-contentlayer2/hooks";
import type { MDXComponents } from "mdx/types";
import React from "react";
const components: MDXComponents = {
  h1: (props) => {
    return (
      <h1
        {...props}
        className="text-5xl text-center   font-bold tracking-tight"
      >
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    return (
      <h1
        {...props}
        className="text-xl text-gray-600  font-semibold tracking-tight"
      >
        {props.children}
      </h1>
    );
  },
};
const Mdx = ({ code }: { code: string }) => {
  const MdxComponent = useMDXComponent(code);
  return (
    <div className="prose lg:prose-xl mx-auto">
      <MdxComponent components={components} />
    </div>
  );
};

export default Mdx;
