import { gql } from "@apollo/client";

export const LIST_ASSIGNMENT = gql`
  query assignmentList {
    assignmentList {
      id
      title
      questions {
        id
        questionDesc
        grade
        answer
      }
      status
      isEnded
    }
  }
`;

export const GET_ASSIGNMENT = gql`
  query getAssignment($id: ID!) {
    getAssignment(id: $id) {
      id
      title
      questions {
        id
        questionDesc
        grade
        answer
      }
      status
      isEnded
    }
  }
`;
