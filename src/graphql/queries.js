/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFountain = /* GraphQL */ `
  query GetFountain($id: ID!) {
    getFountain(id: $id) {
      id
      name
      year
      site
      district
      city
      county
      description
      material
      londonrecord
      remarks
      createdAt
      updatedAt
    }
  }
`;
export const listFountains = /* GraphQL */ `
  query ListFountains(
    $filter: ModelFountainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFountains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        year
        site
        district
        city
        county
        description
        material
        londonrecord
        remarks
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
