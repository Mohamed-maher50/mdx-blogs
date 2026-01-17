export interface GetBlogsByCategoriesVariables {
  slug?: string | null;
}

// TypeScript types for query response
export interface Blog {
  content: string;
  date: string;
  desc: string;
  readingTime: number;
  slug: string;
  title: string;
}

export interface GetBlogsByCategoriesResponse {
  bloghubCollection: {
    items: Blog[];
  };
}
