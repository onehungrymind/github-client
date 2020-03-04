import gql from 'graphql-tag';

const userFragment = gql`
  fragment userFragment on User {
    id
    avatarUrl
    name
    login
    url
    email
    bio
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
