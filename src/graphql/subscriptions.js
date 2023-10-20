/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePHOTO = /* GraphQL */ `
  subscription OnCreatePHOTO(
    $filter: ModelSubscriptionPHOTOFilterInput
    $owner: String
  ) {
    onCreatePHOTO(filter: $filter, owner: $owner) {
      id
      name
      snappedAt
      scannedAt
      isSafe
      plantationID
      src
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePHOTO = /* GraphQL */ `
  subscription OnUpdatePHOTO(
    $filter: ModelSubscriptionPHOTOFilterInput
    $owner: String
  ) {
    onUpdatePHOTO(filter: $filter, owner: $owner) {
      id
      name
      snappedAt
      scannedAt
      isSafe
      plantationID
      src
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePHOTO = /* GraphQL */ `
  subscription OnDeletePHOTO(
    $filter: ModelSubscriptionPHOTOFilterInput
    $owner: String
  ) {
    onDeletePHOTO(filter: $filter, owner: $owner) {
      id
      name
      snappedAt
      scannedAt
      isSafe
      plantationID
      src
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreatePLANTATION = /* GraphQL */ `
  subscription OnCreatePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
    $author: String
  ) {
    onCreatePLANTATION(filter: $filter, author: $author) {
      id
      lib
      img
      PHOTOS {
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePLANTATION = /* GraphQL */ `
  subscription OnUpdatePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
    $author: String
  ) {
    onUpdatePLANTATION(filter: $filter, author: $author) {
      id
      lib
      img
      PHOTOS {
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePLANTATION = /* GraphQL */ `
  subscription OnDeletePLANTATION(
    $filter: ModelSubscriptionPLANTATIONFilterInput
    $author: String
  ) {
    onDeletePLANTATION(filter: $filter, author: $author) {
      id
      lib
      img
      PHOTOS {
        nextToken
        __typename
      }
      author
      createdAt
      updatedAt
      __typename
    }
  }
`;
