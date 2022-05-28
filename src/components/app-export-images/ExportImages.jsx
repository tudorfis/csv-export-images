import { Page } from '@shopify/polaris';
import ActionList from '/src/components/base/ActionList';
import SettingToggle from '/src/components/base/SettingToggle';
import * as React from 'react';

export function ExportImages() {
    return (
        <Page fullWidth>
            <ActionList />
            <br />
            <SettingToggle />
        </Page>
    )
}