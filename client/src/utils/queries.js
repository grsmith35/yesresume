import { gql } from '@apollo/client';

export const QUERY_APPS = gql`
    query applications($date: String) {
        applications(date: $date) {
            name,
            email,
            date
        }
    }
`;