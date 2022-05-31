import { useContext, useState } from 'react';
import { Button, Spinner } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';
import { ProductContext } from './Products';

const ProductDelete = ({ productId }) => {
    const { actions } = useContext(ProductContext);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleProductDelete = () => {
        setIsDeleting(true);
        actions.deleteProduct(productId);
    }

    return (
        <Button
            size="slim"
            destructive
            disabled={isDeleting}
            icon={isDeleting ? <Spinner size="small" /> : DeleteMinor}
            onClick={handleProductDelete}
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
    )
}

export default ProductDelete;
