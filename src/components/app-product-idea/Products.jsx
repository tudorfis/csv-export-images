import React from 'react'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { Card, Page } from '@shopify/polaris'
import { createContext, useEffect, useState } from 'react'
import { PRODUCT_DELETE_MUTATION } from './product-gql/product-mutation'
import { PRODUCTS_QUERY } from './product-gql/product-query'
import LoadingOverlay from '../base/LoadingOverlay'
import ProductDataTable from './ProductDataTable'
import { userLoggedInFetch } from '../../App'
import { useAppBridge } from '@shopify/app-bridge-react'

export const ProductContext = createContext({ state: {}, actions: {} })

export default function Products() {
    const app = useAppBridge();
    const fetch = userLoggedInFetch(app);

    const [productCount, setProductCount] = useState(0)
    const [products, setProducts] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useQuery(PRODUCTS_QUERY, {
        onCompleted: async ({ products }) => {
            setProducts(products)
            setIsLoading(false)
        }
    });

    async function fetchProductCount() {
        const { count } = await fetch("/products-count").then((res) => res.json());
        setProductCount(count);
    }
    useEffect(() => {
        fetchProductCount()
    }, [])

    const [queryProducts] = useLazyQuery(PRODUCTS_QUERY);
    const [mutationDeleteProduct] = useMutation(PRODUCT_DELETE_MUTATION);

    const providerValue = {
        state: {
            productCount,
            products,
        },
        actions: {
            deleteProduct: async (productId) => {
                await mutationDeleteProduct({
                    variables: {
                        input: {
                            id: productId
                        }
                    },
                });

                setIsLoading(true)

                await fetchProductCount()
                const { data: { products } } = await queryProducts();

                setProducts(products);
                setIsLoading(false)
            }
        }
    }

    return (
        <ProductContext.Provider value={providerValue}>
            <Page title={'Products (' + productCount + ')'}>
                {isLoading ? <LoadingOverlay title="Loading products..." /> :
                    <Card sectioned>
                        <ProductDataTable />
                    </Card>
                }
            </Page>
        </ProductContext.Provider>
    )
}
