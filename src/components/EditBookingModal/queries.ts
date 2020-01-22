import gql from 'graphql-tag';

export const GetBooking = gql`
  query GetBooking($id: ID!) {
    __typename
    getBooking(id: $id) {
      clientEmail
      clientFamilyName
      clientName
      clientPhone
      end
      id
      start
      status
      services {
        items {
          service {
            id
          }
          id
        }
      }
    }
  }
`;

export const EditBooking = gql`
  mutation EditBooking($id: ID!) {
    __typename
    updateBooking(input: { id: $id }) {
      id
    }
  }
`;
