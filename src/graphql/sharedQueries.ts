import gql from 'graphql-tag';

export const GetEmployeeAvailableTime = gql`
  query QGetEmployeeAvailableTime($id: ID!, $duration: Int!, $date: String!) {
    getEmployeeAvailableTime(id: $id, duration: $duration, date: $date)
  }
`;
