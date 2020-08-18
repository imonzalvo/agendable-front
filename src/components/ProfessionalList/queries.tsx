import gql from 'graphql-tag';

export const GetProfessionals = gql`
  query GetProfessionals($id: String!) {
    getService(id: $id) {
      name
      employees {
        id
        givenName
        familyName
      }
    }
  }
`;
