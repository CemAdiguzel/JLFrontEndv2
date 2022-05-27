import { gql } from "@apollo/client";
export const CREATE_EXAM = gql`
  mutation createExam(
    $title: String!
    $description: String!
    $type: String!
    $date: String!
    $time: String!
    $dueDate: String!
    $dueTime: String!
    $duration: String!
    $gradeScale: String!
    $resubmissionNumber: String!
    $resubmissionTime: String!
    $resubmissionDate: String!
    $status: Boolean!
    $isEnded: Boolean!
  ) {
    createExam(
      title: $title
      description: $description
      type: $type
      date: $date
      time: $time
      dueDate: $dueDate
      dueTime: $dueTime
      duration: $duration
      gradeScale: $gradeScale
      resubmissionNumber: $resubmissionNumber
      resubmissionTime: $resubmissionTime
      resubmissionDate: $resubmissionDate
      status: $status
      isEnded: $isEnded
    ) {
      id
      title
      description
      type
      date
      time
      dueDate
      dueTime
      duration
      gradeScale
      resubmissionNumber
      resubmissionTime
      resubmissionDate
      status
      isEnded
    }
  }
`;
export const DELETE_EXAM = gql`
  mutation deleteExam($id: ID!) {
    deleteExam(id: $id) {
      id
    }
  }
`;
export const UPDATE_EXAM = gql`
  mutation updateExam(
    $id: ID!
    $title: String
    $description: String
    $type: String
    $date: String
    $time: String
    $dueDate: String
    $dueTime: String
    $duration: String
    $gradeScale: String
    $resubmissionNumber: String
    $resubmissionTime: String
    $resubmissionDate: String
    $status: Boolean
    $isEnded: Boolean
  ) {
    updateExam(
      id: $id
      title: $title
      description: $description
      type: $type
      date: $date
      time: $time
      dueDate: $dueDate
      dueTime: $dueTime
      duration: $duration
      gradeScale: $gradeScale
      resubmissionNumber: $resubmissionNumber
      resubmissionTime: $resubmissionTime
      resubmissionDate: $resubmissionDate
      status: $status
      isEnded: $isEnded
    ) {
      id
      title
      description
      type
      date
      time
      dueDate
      dueTime
      duration
      gradeScale
      resubmissionNumber
      resubmissionTime
      resubmissionDate
      status
      isEnded
    }
  }
`;
export const ASSIGNED_EXAM_TO_USERS = gql`
  mutation assignedExamToUsers($examId: ID!, $userId: ID!) {
    assignedExamToUsers(examId: $examId, userId: $userId) {
      id
    }
  }
`;
