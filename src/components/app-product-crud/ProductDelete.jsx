import { Button, Spinner } from "@shopify/polaris";
import { DeleteMinor } from '@shopify/polaris-icons';
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { withApollo } from '@apollo/client/react/hoc';

const DELETE_PRODUCT = gql`
    mutation productDelete($input: ProductDeleteInput!) {
        productDelete(input: $input) {
            deletedProductId
        }
    }
`

const ProductDelete = ({ client, productId }) => {
    const [startedDelete, setStartedDelete] = useState(false);
    const [mutateFunction] = useMutation(DELETE_PRODUCT);

    if (startedDelete) return (
        <Spinner size="small" />
    )

    return (
        <Button
            destructive
            icon={DeleteMinor}
            onClick={async () => {
                try {
                    setStartedDelete(true);
                    await mutateFunction({
                        variables: {
                            input: {
                                id: productId
                            }
                        },
                    })

                    // This will trigger refetch on all the queries in this page.
                    await client.resetStore();
                }
                catch (err) {
                    console.error(err);
                    setStartedDelete(false);
                }
            }}
            size="slim"
        >
            Delete
        </Button>
    )
}

export default withApollo(ProductDelete);
