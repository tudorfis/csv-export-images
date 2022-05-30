import { Stack, TextStyle } from "@shopify/polaris";

export function ProductList({ products }) {
    return <>
        <Stack vertical>
            {products.edges.map(({ node: product }) => (
                <p key={product.id}>
                    <TextStyle variation="code">Product</TextStyle> 👉
                    <TextStyle variation="strong"> {product.title}</TextStyle>
                </p>
            ))}
        </Stack>
    </>
}
