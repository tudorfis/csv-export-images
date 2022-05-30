import * as React from 'react';
<<<<<<< HEAD
import { gql, useMutation, useQuery } from '@apollo/client';
=======
import { gel, useMutation, useQuery } from '@apollo/client';
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
import { withApollo } from '@apollo/client/react/hoc';

import ProductsContext, { initialState } from '.';
import LoadingOverlay from '../../components/LoadingOverlay';

<<<<<<< HEAD
const PRODUCTS_QUERY = gql`{
=======
const PROD_QUERY = gql`{
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
    products(first: 10) {
        edges {
            cursor
            node {
                id
                title
                description
            }
        }
        pageInfo {
            hasNextPage
            endCursor
        }
    }
}`

<<<<<<< HEAD
const PRODUCT_DELETE_MUTATION = gql`
=======
const PROD_DELETE_MUTATION = gql`
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
    mutation productDelete($input: ProductDeleteInput!) {
        productDelete(input: $input) {
            deletedProductId
        }
    }
`;

const Provider = ({ children, client }) => {
    const [state, setState] = React.useState(initialState);

<<<<<<< HEAD
    const { loading } = useQuery(PRODUCTS_QUERY, {
        onCompleted: async ({ products }) => {
=======
    const { loading } = useQuery(PROD_QUERY, {
        onCompleted: async ( { products }) => {
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
            setState(prevState => ({
                ...prevState,
                products,
            }));
        }
    });

<<<<<<< HEAD
    const [deleteProduct] = useMutation(PRODUCT_DELETE_MUTATION);
=======
    const [deleteProduct] = useMutation(PROD_DELETE_MUTATION);
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67


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
<<<<<<< HEAD
                    catch (err) {
=======
                    catch(err) {
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
                        console.error(err);
                    }
                }
            },
            state,
        }}>
<<<<<<< HEAD
            {loading ? <LoadingOverlay /> : children}
        </ProductsContext.Provider>
    )

=======
            { loading ? <LoadingOverlay /> : children }
        </ProductsContext.Provider>
    )
    
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
}

export default withApollo(Provider);