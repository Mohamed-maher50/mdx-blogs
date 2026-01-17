import { client } from "@/lib/contentful";
import {
  GET_BLOG_BY_SLUG,
  GET_BLOGS,
  GET_BLOGS_BY_CATEGORIES,
} from "./queries";
import { cache } from "react";
import { Blog, GetBlogsByCategoriesResponse } from "./types";

export async function getBlogsByCategory(slug: string): Promise<Blog[]> {
  const res = await client.request<GetBlogsByCategoriesResponse>(
    GET_BLOGS_BY_CATEGORIES,
    {
      slug,
    },
  );
  return res.bloghubCollection.items;
}
export const getBlogs = cache(async function getBlogs(): Promise<Blog[]> {
  const res = await client.request<GetBlogsByCategoriesResponse>(GET_BLOGS);
  return res.bloghubCollection.items;
});
export const getBlogBySlug = cache(async (slug: string): Promise<Blog> => {
  const res = await client.request<GetBlogsByCategoriesResponse>(
    GET_BLOG_BY_SLUG,
    {
      slug,
    },
  );
  return res.bloghubCollection.items[0];
});
