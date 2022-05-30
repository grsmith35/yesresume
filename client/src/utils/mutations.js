import { gql } from '@apollo/client';

export const ADD_APP = gql`
    mutation addApp($name: String!, $email: String!, $date: String!) {
        addApp(name: $name, email: $email, date: $date) {
            name,
            email,
            date
        }
    }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      email
    }
  }
`;