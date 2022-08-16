import {gql, useQuery} from "@apollo/client";
import {MeQueryQuery} from "../graphql/generated";

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const useMe = () => {
  return useQuery<MeQueryQuery>(ME_QUERY);
};