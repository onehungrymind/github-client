import gql from 'graphql-tag';

const userFragment = gql`
  fragment userFragment on User {
    avatarUrl
    id
    name
    login
    bio
    location
    email
    websiteUrl
    company
  }
`;

export const getUsernameQuery = gql`
  query getUsernameQuery {
    viewer {
      login
    }
  }
`;

export const usersQuery = gql`
  query usersQuery($login: String!) {
    user(login: $login) {
      ...userFragment
    }
  }
  ${userFragment}
`;
