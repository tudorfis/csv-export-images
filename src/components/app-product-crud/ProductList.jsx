import { Stack, TextStyle } from "@shopify/polaris";
import { ProductDelete } from "./ProductDelete";

export function ProductList({ products, reloadProducts }) {
    return <>
        <Stack vertical>
            {products.edges.map(({ node: product }) => (
                <p key={product.id}>
                    <Stack>
                        <TextStyle variation="code">Product</TextStyle> 👉
                        <TextStyle variation="strong"> {product.title}</TextStyle>
                        <ProductDelete
                            reloadProducts={reloadProducts}
                            productId={product.id}
                        />
                    </Stack>
                </p>
            ))}
        </Stack>
    </>
}
