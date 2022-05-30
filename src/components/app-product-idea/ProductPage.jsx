import { Page } from '@shopify/polaris'
import ProductsContextProvider from '/src/context/ProductsContext/provider';
import ProductList from './ProductList';

export default () => {
    return (
        <ProductsContextProvider>
            <Page fullWidth>
                <ProductList />
            </Page>
        </ProductsContextProvider>
    );
}
