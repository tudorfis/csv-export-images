import { gql, useQuery } from '@apollo/client'
import { Page, Spinner } from '@shopify/polaris'
import { ProductList } from './ProductList'

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
    console.clear()

    const { loading, data } = useQuery(GET_PRODUCTS)

    if (loading) return (
        <Spinner size="large" />
    )

    console.log(data)

    return (
        <Page fullWidth>
            <ProductList
                products={data.products}
            />
        </Page>
    )
}