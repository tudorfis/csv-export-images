import { gql, useMutation } from "@apollo/client";
import { Button, Spinner } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';
import { useState } from "react";

const DELETE_PRODUCT = gql`
    mutation productDelete($input: ProductDeleteInput!) {
        productDelete(input: $input) {
            deletedProductId
            userErrors {
                field
                message
            }
        }
    }
`

export function ProductDelete({ productId, reloadProducts }) {
    const [startedDelete, setStartedDelete] = useState(false);
    const [mutateFunction] = useMutation(DELETE_PRODUCT);

    if (startedDelete) return (
        <Spinner size="small" />
    )

    const handleDeleteProduct = async () => {
        setStartedDelete(true)

        await mutateFunction({
            variables: {
                input: {
                    id: productId
                }
            },
        })

        reloadProducts()
    }

    return (
        <Button
            size="slim"
            destructive
            icon={DeleteMinor}
            onClick={handleDeleteProduct}
        >
            Delete
        </Button>
    )
}
