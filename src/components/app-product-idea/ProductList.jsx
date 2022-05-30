import { useContext } from 'react';
import { Stack, TextStyle, Spinner } from "@shopify/polaris";
import ProductsContext from '/src/context/products/ProductsContext';
import ProductDelete from './ProductDelete';

export default () => {
    const { state } = useContext(ProductsContext);

    if (!state?.products?.edges) return <Spinner />

    return (
        <Stack vertical>
            {state.products.edges.map(({ node: product }) => (
                <Stack.Item key={product.id}>
                    <Stack>
                        <TextStyle variation="code">Product 👉 </TextStyle>
                        <TextStyle variation="strong">{product.title}</TextStyle>
                        <TextStyle variation="code">{product.description ? 'YES' : 'NO'}</TextStyle>
                        <ProductDelete productId={product.id} />
                    </Stack>
                </Stack.Item>
            ))}
        </Stack>
    );
}
