import { gql } from '@apollo/client';

export const QUERY_APPS = gql`
    query applications {
        applications {
            name,
            email,
            date
        }
    }
`;