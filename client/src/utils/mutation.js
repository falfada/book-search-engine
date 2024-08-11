import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($input: saveBookInput!) {
    saveBook(input: $input) {
      savedBooks {
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      savedBooks {
        title
      }
    }
  }
`;
