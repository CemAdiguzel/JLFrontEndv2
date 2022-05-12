import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      token
      user {
        id
        userRole
      }
    }
  }
`;
