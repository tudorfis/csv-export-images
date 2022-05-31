import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`{
    products(
        first: 10, 
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
            endCursor
        }
    }
}`
