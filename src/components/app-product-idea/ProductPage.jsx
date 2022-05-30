import * as React from 'react';
import { Page } from '@shopify/polaris'

import ProductsContextProvider from '../../context/ProductsContext/provider';
<<<<<<< HEAD
import ProductList from './ProductList';
=======

import { ProductList } from './ProductList';
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67

const ProductPage = () => {
    return (
        <ProductsContextProvider>
            <Page fullWidth>
                <ProductList />
            </Page>
        </ProductsContextProvider>
    );
}

<<<<<<< HEAD
export default ProductPage
=======
export default ProductPage;§
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
