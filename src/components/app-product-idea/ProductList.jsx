import * as React from 'react';
import { Stack, TextStyle } from "@shopify/polaris";

import ProductsContext from '../../context/ProductsContext';

import ProductDelete from './ProductDelete';

const ProductList = () => {
    const { state } = React.useContext(ProductsContext);
<<<<<<< HEAD

    if (!state?.products?.edges) return (<hr />)

    return (
        <Stack vertical>
            {state.products?.edges.map(({ node: product }) => (
=======
    
    return (
        <Stack vertical>
            {state.products.edges.map(({ node: product }) => (
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
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