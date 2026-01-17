import { gql } from "graphql-request";

export const GET_CATEGORIES = gql`
  query {
    categoriesCollection {
      items {
        _id
        name
        slug
        desc
        icon
        style
      }
    }
  }
`;
export const GET_CATEGORY_BY_SLUG = gql`
  query ($slug: String) {
    categoriesCollection(where: { slug: $slug }) {
      items {
        name
        desc
        icon
        style
      }
    }
  }
`;
