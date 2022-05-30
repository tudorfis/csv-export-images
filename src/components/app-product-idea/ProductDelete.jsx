import { useContext, useState } from 'react';
import { Button } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';
import ProductsContext from '/src/context/products/ProductsContext';

const ProductDelete = ({ productId }) => {
    const { actions } = useContext(ProductsContext);
    const [deleting, setDeleting] = useState(false);

    const handleProductDelete = async () => {
        try {
            setDeleting(true);
            await actions.removeById(productId);
            setDeleting(false);
        } catch (err) {
            setDeleting(false);
        }
    }

    return (
        <Button
            size="slim"
            destructive
            disabled={deleting}
            icon={DeleteMinor}
            onClick={handleProductDelete}
        >
            {deleting ? 'Deleting...' : 'Delete'}
        </Button>
    )
}

export default ProductDelete;
