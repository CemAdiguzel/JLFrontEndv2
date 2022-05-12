import { gql } from '@apollo/client';

export const CREATE_ANSWER = gql`
  mutation createAnswer($questionId: ID!, $answer: String!) {
    createAnswer(questionId: $questionId, answer: $answer) {
      id
      questionId
      answer
    }
  }
`;
export const ASSIGN_ANSWER_TO_QUESTION = gql`
  mutation assignAnswerToQuestion($questionId: ID!, $answerId: ID!) {
    assignAnswerToQuestion(questionId: $questionId, answerId: $answerId) {
      id
    }
  }
`;
