import { gql } from "@apollo/client";
export const CREATE_ASSIGNMENT = gql`
  mutation createAssignment(
    $title: String!
    $description: String!
    $type: String!
    $date: String!
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
    createAssignment(
      title: $title
      description: $description
      type: $type
      date: $date
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
export const DELETE_ASSIGNMENT = gql`
  mutation deleteAssignment($id: ID!) {
    deleteAssignment(id: $id) {
      id
    }
  }
`;
export const UPDATE_ASSIGNMENT = gql`
  mutation updateAssignment(
    $id: ID!
    $title: String
    $description: String
    $type: String
    $date: String
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
    updateAssignment(
      id: $id
      title: $title
      description: $description
      type: $type
      date: $date
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
