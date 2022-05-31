import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
    query getProducts(
        $first: Int, 
        $last: Int, 
        $after: String, 
        $before: String
    ) {
        products(
            first: $first, 
            last: $last,
            after: $after,
            before: $before,
            sortKey:CREATED_AT, 
            reverse: true
        ) {
            edges {
                node {
                    id
                    title
                    description
                    onlineStorePreviewUrl
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
            }
        }
    }
`
