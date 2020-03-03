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
              name
              description
          }
        }
      }
    }
  }
}
`;

export const organizationQuery = gql`
  query organizationQuery($login: String!) {
    user(login: $login)
      organizations(first: 10) {
        nodes {
          ...organizationFragment
      }
    }
  }
${organizationFragment}
`;