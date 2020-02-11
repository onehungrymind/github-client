import gql from 'graphql-tag';

export interface RepositoriesType {
  allrepos: Repository[];
  notfixed: Repository[];
}

export interface Repository {
  name: string,
  url: string,
    vulnerabilityAlerts: {
      totalCount: number
  }
}

export const vulFragment = gql`
  fragment vulFragment on Repository {
    name
    url
    vulnerabilityAlerts(first: 100) {
      totalCount
    }
  }
`

export const vulQuery = gql`
  query vulQuery {
  organization(login: "onehungrymind") {
    repositories(last: 100) {
      totalCount
      nodes {
        ...vulFragment
      }
    }
  }
}
${vulFragment}
`