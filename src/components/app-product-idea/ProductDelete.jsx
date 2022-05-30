import * as React from 'react';
import { Button } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';

import ProductsContext from '../../context/ProductsContext';

const ProductDelete = ({ productId }) => {
    const { actions } = React.useContext(ProductsContext);
    const [deleting, setDeleting] = React.useState(false);

    return (
        <Button
            destructive
            disabled={deleting}
            icon={DeleteMinor}
            onClick={async () => {
                setDeleting(true);
                await actions.removeById(productId);
            }}
            size="slim"
        >
            {deleting ? 'Deleting...' : 'Delete'}
        </Button>
    )
}

export default ProductDelete;
