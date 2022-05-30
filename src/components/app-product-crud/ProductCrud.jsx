import { gql, useQuery } from '@apollo/client'
import { Page, Spinner } from '@shopify/polaris'
import { ProductMap } from './ProductMap'

const GET_PRODUCTS = gql`{
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

export function ProductCrud() {
    const { loading, data } = useQuery(GET_PRODUCTS)

    if (loading) return (
        <Page fullWidth>
            <Spinner size="large" />
        </Page>
    )

    return (
        <Page fullWidth>
            <ProductMap
                products={data.products}
            />
        </Page>
    )
}
