import { useContext, useState } from 'react';
import { Button } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';
import ProductsContext from '/src/context/products/ProductsContext';

const ProductDelete = ({ productId }) => {
    const { actions } = useContext(ProductsContext);
    const [deleting, setDeleting] = useState(false);

    const handleProductDelete = async () => {
        setDeleting(true);
        await actions.deleteProduct(productId);
        await actions.refetchProducts();
        setDeleting(false);
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
