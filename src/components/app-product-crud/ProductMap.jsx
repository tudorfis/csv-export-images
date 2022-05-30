import { Stack, TextStyle } from "@shopify/polaris";
import ProductRemove from "./ProductRemove";


export function ProductMap({ products }) {
    return <>
        <Stack vertical>
            {products.edges.map(({ node: product }) => (
                <Stack.Item key={product.id}>
                    <Stack>
                        <TextStyle variation="code">Product 👉 </TextStyle>
                        <TextStyle variation="strong">{product.title}</TextStyle>
                        <ProductDelete productId={product.id} />
                    </Stack>
                </Stack.Item>
            ))}
        </Stack>
    </>
}
