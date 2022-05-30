import { useContext } from 'react';
import { Stack, TextStyle, Loading } from "@shopify/polaris";

import ProductsContext from '/src/context/ProductsContext';
import ProductDelete from './ProductDelete';

export default () => {
    const { state } = useContext(ProductsContext);

    if (!state?.products?.edges) return <Loading />

    return (
        <Stack vertical>
            {state.products.edges.map(({ node: product }) => (
                <Stack.Item key={product.id}>
                    <Stack>
                        <TextStyle variation="code">Product 👉 </TextStyle>
                        <TextStyle variation="strong">{product.title}</TextStyle>
                        <ProductDelete productId={product.id} />
                    </Stack>
                </Stack.Item>
            ))}
        </Stack>
    );
}
