import * as React from 'react';
import { Button, Spinner } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';

import ProductsContext from '../../context/ProductsContext';

const ProductDelete = ({ productId }) => {
    const { actions } = React.useContext(ProductsContext);
    const [deleting, setDeleting] = useState(false);

    return (
        <Button
            destructive
            disabled={deleting}
            icon={!deleting ? DeleteMinor : Spinner}
            onClick={async () => {
                setDeleting(true);
                await actions.removeById(productId);
            }}
            size="slim"
        >
            {deleting ? 'Deleting...' :'Delete'}
        </Button>
    )
}

export default ProductDelete;
