
import { Page, Spinner } from '@shopify/polaris'

export function LoadingOverlay() {
    return (
        <Page fullWidth>
            <Spinner size="large" />
        </Page>
    )
}
