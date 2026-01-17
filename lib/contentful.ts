import { createClient } from "contentful";

import { GraphQLClient } from "graphql-request";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string, // Your Contentful Space ID
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, // Your Contentful Access Token
});
const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});
