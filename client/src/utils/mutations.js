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