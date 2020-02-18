<<<<<<< HEAD
  import gql from 'graphql-tag';
=======
import gql from 'graphql-tag';
>>>>>>> f229dfa8b73a63967af4e56cd37758e6bac5a3d9

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