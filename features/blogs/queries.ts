import { gql } from "graphql-request";

export const GET_BLOGS = gql`
  query {
    bloghubCollection(order: sys_publishedAt_DESC, limit: 3) {
      items {
        content
        date
        desc
        readingTime
        slug
        title
      }
    }
  }
`;
export const GET_BLOGS_BY_CATEGORIES = gql`
  query ($slug: String) {
    bloghubCollection(where: { categories: { slug: $slug } }) {
      items {
        content
        content
        date
        desc
        readingTime
        slug
        title
      }
    }
  }
`;
export const GET_BLOG_BY_SLUG = `
  query GetBlogBySlug($slug: String!) {
    bloghubCollection(where: { slug: $slug }, limit: 1) {
      items {
        content
        date
        desc
        readingTime
        slug
        title
      }
    }
  }
`;
