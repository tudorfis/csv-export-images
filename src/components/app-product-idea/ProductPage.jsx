import * as React from 'react';
import { Page } from '@shopify/polaris'

import ProductsContextProvider from '../../context/ProductsContext/provider';

import { ProductList } from './ProductList';

const ProductPage = () => {
    return (
        <ProductsContextProvider>
            <Page fullWidth>
                <ProductList />
            </Page>
        </ProductsContextProvider>
    );
}

export default ProductPage;§