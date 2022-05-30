import * as React from 'react';
import { Stack, TextStyle } from "@shopify/polaris";

import ProductsContext from '../../context/ProductsContext';

import ProductDelete from './ProductDelete';

const ProductList = () => {
    const { state } = React.useContext(ProductsContext);
    
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

export default ProductList;