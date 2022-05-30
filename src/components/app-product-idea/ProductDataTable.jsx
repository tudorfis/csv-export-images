import { useContext } from 'react';
import { DataTable, Link, Spinner, TextStyle } from '@shopify/polaris';
import ProductsContext from '/src/context/products/ProductsContext';
import ProductDelete from './ProductDelete';

export default function ProductDataTable() {
    const { state } = useContext(ProductsContext);

    if (!state?.products?.edges) return <Spinner />

    return (
        <DataTable
            columnContentTypes={[
                'text',
                'text',
                'text',
            ]}
            headings={[
                <strong>Title</strong>,
                <strong>Can delete?</strong>,
                <strong>Controls</strong>,
            ]}
            rows={state.products.edges.map(({ node: product }) => ([
                <Link url={product.onlineStorePreviewUrl} external>{product.title}</Link>,
                <TextStyle variation="code">{product.description.length ? 'NO' : 'YES'}</TextStyle>,
                <ProductDelete productId={product.id} />
            ]))}
        />
    );
}
