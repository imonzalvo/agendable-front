import gql from 'graphql-tag';

export const GetProfessionals = gql`
  query GetProfessionals($id: ID!) {
    getService(id: $id) {
      name
      employees {
        items {
          employee {
            id
            givenName
            familyName
          }
        }
      }
    }
  }
`;
