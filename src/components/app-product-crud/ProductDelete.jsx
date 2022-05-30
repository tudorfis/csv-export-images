import { gql, useMutation } from "@apollo/client";
import { Button, Spinner } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';

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
    const [mutateFunction, { data, loading }] = useMutation(DELETE_PRODUCT);
    if (loading) return <Spinner size="small" />;

    const handleDeleteProduct = async () => {
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
