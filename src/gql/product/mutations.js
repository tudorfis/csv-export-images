import { gql } from '@apollo/client';

export const PRODUCT_DELETE_MUTATION = gql`
    mutation productDelete($input: ProductDeleteInput!) {
        productDelete(input: $input) {
            deletedProductId
        }
    }
`;