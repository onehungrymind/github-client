import gql from 'graphql-tag';

const organizationFragment = gql`
  fragment organizationFragment on Organization {
    name
    repositories(first: 10) {
      nodes {
        name
        vulnerabilityAlerts(first: 10) {
          nodes {
            repository {
              description
              name
          }
        }
      }
    }
  }
}
`;

export const organizationQuery = gql`
  query organizationQuery($login: String!) {
    user(login: $login) {
      login
      organizations(first: 10) {
        nodes {
          ...organizationFragment
      }
    }
  }
}
${organizationFragment}
`;
