import * as React from 'react';
<<<<<<< HEAD
import { Button } from "@shopify/polaris";
=======
import { Button, Spinner } from "@shopify/polaris";
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
import { DeleteMinor } from '@shopify/polaris-icons';

import ProductsContext from '../../context/ProductsContext';

const ProductDelete = ({ productId }) => {
    const { actions } = React.useContext(ProductsContext);
<<<<<<< HEAD
    const [deleting, setDeleting] = React.useState(false);
=======
    const [deleting, setDeleting] = useState(false);
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67

    return (
        <Button
            destructive
            disabled={deleting}
<<<<<<< HEAD
            icon={DeleteMinor}
=======
            icon={!deleting ? DeleteMinor : Spinner}
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
            onClick={async () => {
                setDeleting(true);
                await actions.removeById(productId);
            }}
            size="slim"
        >
<<<<<<< HEAD
            {deleting ? 'Deleting...' : 'Delete'}
=======
            {deleting ? 'Deleting...' :'Delete'}
>>>>>>> 9e887fd8ecde9933198777507901198f57eaec67
        </Button>
    )
}

export default ProductDelete;
