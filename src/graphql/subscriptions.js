/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePHOTO = /* GraphQL */ `
  subscription OnCreatePHOTO($filter: ModelSubscriptionPHOTOFilterInput) {
    onCreatePHOTO(filter: $filter) {
      id
      name
      snappedAt
      scannedAt
      isSafe
      plantationID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePHOTO = /* GraphQL */ `
  subscription OnUpdatePHOTO($filter: ModelSubscriptionPHOTOFilterInput) {
    onUpdatePHOTO(filter: $filter) {
      id
      name
      snappedAt
      scannedAt
      isSafe
      plantationID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePHOTO = /* GraphQL */ `
  subscription OnDeletePHOTO($filter: ModelSubscriptionPHOTOFilterInput) {
    onDeletePHOTO(filter: $filter) {
      id
      name
      snappedAt
      scannedAt
      isSafe
      plantationID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePLANTATION = /* GraphQL */ `
  subscription OnCreatePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
  ) {
    onCreatePLANTATION(filter: $filter) {
      id
      lib
      img
      PHOTOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePLANTATION = /* GraphQL */ `
  subscription OnUpdatePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
  ) {
    onUpdatePLANTATION(filter: $filter) {
      id
      lib
      img
      PHOTOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePLANTATION = /* GraphQL */ `
  subscription OnDeletePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
  ) {
    onDeletePLANTATION(filter: $filter) {
      id
      lib
      img
      PHOTOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
