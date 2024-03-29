import { gql } from "@apollo/client";
export const CREATE_QUESTION = gql`
  mutation createQuestion(
    $questionDesc: String!
    $gradingInput: String!
    $answer: String!
    $grade: String!
    $gradingOutput: String!
    $autoGrade: Boolean!
  ) {
    createQuestion(
      questionDesc: $questionDesc
      gradingInput: $gradingInput
      answer: $answer
      grade: $grade
      gradingOutput: $gradingOutput
      autoGrade: $autoGrade
    ) {
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

export const ADD_QUESTION_TO_EXAM = gql`
  mutation assignedQuestionToExam($ExamId: ID!, $questionId: ID!) {
    assignedQuestionToExam(ExamId: $ExamId, questionId: $questionId) {
      id
      questionDesc
    }
  }
`;
export const ADD_QUESTION_TO_ASSIGNMENT = gql`
  mutation assignedQuestionToAssignment($AssignmentId: ID!, $questionId: ID!) {
    assignedQuestionToAssignment(
      AssignmentId: $AssignmentId
      questionId: $questionId
    ) {
      id
      questionDesc
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($id: ID!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`;
