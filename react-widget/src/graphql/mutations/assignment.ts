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
    $time: String
    $dueDate: String
    $dueTime: String
    $duration: String
    $gradeScale: String
    $resubmissionNumber: String
    $resubmissionTime: String
    $resubmissionDate: String
    $status: Boolean!
  ) {
    updateAssignment(
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
    }
  }
`;
