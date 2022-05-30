import { useState } from 'react';
import { gql, useMutation, useQuery, useLazyQuery } from '@apollo/client';
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

    const initialProductsQueryResults = useQuery(PRODUCTS_QUERY, {
        onCompleted: async ({ products }) => {
            setState(prevState => ({
                ...prevState,
                products,
            }));
        }
    });

    const [productsQuery, productsQueryResults] = useLazyQuery(PRODUCTS_QUERY, {
        onCompleted: async ({ products }) => {
            setState(prevState => ({
                ...prevState,
                products,
            }));
        }
    })

    const [productDeleteMutation] = useMutation(PRODUCT_DELETE_MUTATION);

    const isLoading = (
        initialProductsQueryResults.loading ||
        productsQueryResults.loading
    )

    return (
        <ProductsContext.Provider value={{
            actions: {
                refetchProducts: async () => {
                    await productsQuery()
                },
                deleteProduct: async (productId) => {
                    await productDeleteMutation({
                        variables: {
                            input: {
                                id: productId
                            }
                        },
                    });
                }
            },
            state,
        }}>
            {isLoading ? <LoadingOverlay /> : children}
        </ProductsContext.Provider>
    )

}

export default withApollo(ProductsContextProvider);
