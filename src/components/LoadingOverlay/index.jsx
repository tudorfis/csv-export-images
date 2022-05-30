
import * as React from 'react';
import { Page, Spinner } from '@shopify/polaris'

/*  NOTE: This is just a concept, you might want to style it or something */
const LoadingOverlay = () => (
    <Page fullWidth>
        <Spinner size="large" />
    </Page>
);

export default LoadingOverlay;