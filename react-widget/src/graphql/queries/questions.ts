import { gql } from '@apollo/client';

export const LIST_QUESTIONS = gql`
  query getQuestions {
    getQuestions {
      id
      questionDesc
      gradingInput
      answer
      grade
      gradingOutput
      autoGrade
    }
  }
`;
export const GET_QUESTION = gql`
  query getQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      questionDesc
    }
  }
`;
