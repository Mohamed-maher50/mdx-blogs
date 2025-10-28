import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string, // Your Contentful Space ID
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string, // Your Contentful Access Token
});
