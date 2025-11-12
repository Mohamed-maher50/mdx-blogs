import { defineDocumentType, makeSource } from "@contentlayer/source-files";
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    desc: { type: "string", required: true },
    readingTime: { type: "string", required: true },
  },
  contentType: "mdx",
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => {
        return `/${doc._raw.flattenedPath}`;
      },
    },
  },
}));
export const Doc = defineDocumentType(() => ({
  name: "Doc",
  fields: {
    title: { type: "string", required: true },
    desc: { type: "string", required: true },
  },
  contentType: "mdx",
  filePathPattern: "docs/**/*.mdx",
  computedFields: {
    url: {
      type: "string",
      resolve(doc) {
        return "/" + doc._raw.flattenedPath;
      },
    },
  },
}));
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Doc],
  mdx: {
    remarkPlugins: [],
  },
});
