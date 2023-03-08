/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFountain = /* GraphQL */ `
  mutation CreateFountain(
    $input: CreateFountainInput!
    $condition: ModelFountainConditionInput
  ) {
    createFountain(input: $input, condition: $condition) {
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
export const updateFountain = /* GraphQL */ `
  mutation UpdateFountain(
    $input: UpdateFountainInput!
    $condition: ModelFountainConditionInput
  ) {
    updateFountain(input: $input, condition: $condition) {
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
export const deleteFountain = /* GraphQL */ `
  mutation DeleteFountain(
    $input: DeleteFountainInput!
    $condition: ModelFountainConditionInput
  ) {
    deleteFountain(input: $input, condition: $condition) {
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
