/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPHOTO = /* GraphQL */ `
  query GetPHOTO($id: ID!) {
    getPHOTO(id: $id) {
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
export const listPHOTOS = /* GraphQL */ `
  query ListPHOTOS(
    $filter: ModelPHOTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPHOTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const pHOTOSByPlantationID = /* GraphQL */ `
  query PHOTOSByPlantationID(
    $plantationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPHOTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pHOTOSByPlantationID(
      plantationID: $plantationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPLANTATION = /* GraphQL */ `
  query GetPLANTATION($id: ID!) {
    getPLANTATION(id: $id) {
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
export const listPLANTATIONS = /* GraphQL */ `
  query ListPLANTATIONS(
    $filter: ModelPLANTATIONFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPLANTATIONS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lib
        img
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
