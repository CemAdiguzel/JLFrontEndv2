import { gql } from '@apollo/client';

export const LIST_EXAM = gql`
  query examList {
    examList {
      id
      title
      questions {
        id
        questionDesc
      }
      status
    }
  }
`;
export const GET_EXAM = gql`
  query getExam($id: ID!) {
    getExam(id: $id) {
      id
      title
      questions {
        id
        questionDesc
      }
    }
  }
`;
