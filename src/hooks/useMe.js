import { useQuery } from "@tanstack/react-query";
import { getClient } from "@/lib/graphqlClient";

const ME_QUERY = `
  query {
    me {
      id
      email
    }
  }
`;

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const client = getClient();
      return client.request(ME_QUERY);
    },
    retry: false,
  });
};