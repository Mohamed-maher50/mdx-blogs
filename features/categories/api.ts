import { client } from "@/lib/contentful";
import type { CategoriesQueryResponse, Category } from "./types";
import { GET_CATEGORIES, GET_CATEGORY_BY_SLUG } from "./queries";

export async function getCategories(): Promise<Category[]> {
  const res = await client.request<CategoriesQueryResponse>(GET_CATEGORIES);
  return res.categoriesCollection.items;
}
export async function getCategoryBySlug(slug: string) {
  const data = await client.request<CategoriesQueryResponse, { slug: string }>(
    GET_CATEGORY_BY_SLUG,
    {
      slug,
    }
  );

  return data.categoriesCollection.items[0] ?? null;
}
