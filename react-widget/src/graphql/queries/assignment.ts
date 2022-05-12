import { gql } from '@apollo/client';

export const LIST_ASSIGNMENT = gql`
  query assignmentList {
    assignmentList {
      id
      title
      questions {
        id
        questionDesc
      }
    }
  }
`;
