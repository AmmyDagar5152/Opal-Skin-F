import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:4000/graphql";

export const getClient = () => {
  return new GraphQLClient(endpoint, {
    credentials: "include", // 🔥 IMPORTANT (cookies)
  });
};