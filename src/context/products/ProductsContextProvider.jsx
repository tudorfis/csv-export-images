import { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { withApollo } from '@apollo/client/react/hoc';
import { LoadingOverlay } from '/src/components/base/LoadingOverlay';
import ProductsContext, { initialState } from '/src/context/products/ProductsContext';

const PRODUCTS_QUERY = gql`{
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

const PRODUCT_DELETE_MUTATION = gql`
    mutation productDelete($input: ProductDeleteInput!) {
        productDelete(input: $input) {
            deletedProductId
        }
    }
`;

const ProductsContextProvider = ({ children, client }) => {
    const [state, setState] = useState(initialState);

    const { loading } = useQuery(PRODUCTS_QUERY, {
        onCompleted: async ({ products }) => {
            setState(prevState => ({
                ...prevState,
                products,
            }));
        }
    });

    const [deleteProduct] = useMutation(PRODUCT_DELETE_MUTATION);

    return (
        <ProductsContext.Provider value={{
            actions: {
                removeById: async (productId) => {
                    try {
                        await deleteProduct({
                            variables: {
                                input: {
                                    id: productId
                                }
                            },
                        });

                        await client.resetStore();
                    }
                    catch (err) {
                        console.error(err);
                    }
                }
            },
            state,
        }}>
            {loading ? <LoadingOverlay /> : children}
        </ProductsContext.Provider>
    )

}

export default withApollo(ProductsContextProvider);
