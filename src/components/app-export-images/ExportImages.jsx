import { Page } from '@shopify/polaris';
import ActionList from '/src/components/base/ActionList';
import SettingToggle from '/src/components/base/SettingToggle';
import { useState, useEffect } from 'react';

export function ExportImages() {
    const [productCount, setProductCount] = useState(0)

    async function updateProductCount() {
        const { count } = await fetch("/products-count").then((res) => res.json());
        setProductCount(count);
    }

    useEffect(() => {
        updateProductCount()
    }, [])

    return (
        <Page fullWidth>
            <ActionList />
            <br />
            <SettingToggle />
            <br />
            <p>Total products: {productCount}</p>
        </Page>
    )
}