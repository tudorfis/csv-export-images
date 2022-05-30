import { Card, Page } from '@shopify/polaris'
import ProductsContextProvider from '/src/context/products/ProductsContextProvider';
import ProductDataTable from './ProductDataTable';

export default () => {
    return (
        <ProductsContextProvider>
            <Page title="Products for deletion">
                <Card>
                    <ProductDataTable />
                </Card>
            </Page>
        </ProductsContextProvider>
    );
}
