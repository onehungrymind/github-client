import gql from 'graphql-tag';
  
export const repositoriesFragment = gql`
  fragment repoFragment on repositories {
    id
    name
    positiom
  }
`;