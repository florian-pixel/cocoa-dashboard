/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPHOTO = /* GraphQL */ `
  mutation CreatePHOTO(
    $input: CreatePHOTOInput!
    $condition: ModelPHOTOConditionInput
  ) {
    createPHOTO(input: $input, condition: $condition) {
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
export const updatePHOTO = /* GraphQL */ `
  mutation UpdatePHOTO(
    $input: UpdatePHOTOInput!
    $condition: ModelPHOTOConditionInput
  ) {
    updatePHOTO(input: $input, condition: $condition) {
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
export const deletePHOTO = /* GraphQL */ `
  mutation DeletePHOTO(
    $input: DeletePHOTOInput!
    $condition: ModelPHOTOConditionInput
  ) {
    deletePHOTO(input: $input, condition: $condition) {
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
export const createPLANTATION = /* GraphQL */ `
  mutation CreatePLANTATION(
    $input: CreatePLANTATIONInput!
    $condition: ModelPLANTATIONConditionInput
  ) {
    createPLANTATION(input: $input, condition: $condition) {
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
export const updatePLANTATION = /* GraphQL */ `
  mutation UpdatePLANTATION(
    $input: UpdatePLANTATIONInput!
    $condition: ModelPLANTATIONConditionInput
  ) {
    updatePLANTATION(input: $input, condition: $condition) {
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
export const deletePLANTATION = /* GraphQL */ `
  mutation DeletePLANTATION(
    $input: DeletePLANTATIONInput!
    $condition: ModelPLANTATIONConditionInput
  ) {
    deletePLANTATION(input: $input, condition: $condition) {
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
