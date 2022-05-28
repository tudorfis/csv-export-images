import { useCallback, useEffect, useState } from 'react';
import { ActionList, Button, Popover } from '@shopify/polaris';
import { SaveMinor, ExitMajor } from '@shopify/polaris-icons';

export default function () {
    const [active, setActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleActive = useCallback(() => {
        setActive((active) => !active)
    }, []);

    const handleSaveProducts = useCallback(() => {
        console.log('Save products')

        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1500)
    }, []);

    useEffect(() => {
        setActive(false)
    }, [isLoading])

    const handleExitPage = useCallback(() => {
        console.log('handleExitPage')

        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1500)
    }, []);

    const activator = (
        <Button
            primary
            loading={isLoading}
            disclosure="down"
            onClick={toggleActive}
        >
            Actions
        </Button>
    );

    return (
        <Popover
            active={active}
            activator={activator}
            autofocusTarget="first-node"
            onClose={toggleActive}
        >
            <ActionList
                actionRole="menuitem"
                items={[
                    {
                        content: 'Save products',
                        onAction: handleSaveProducts,
                        icon: SaveMinor
                    },
                    {
                        content: 'Exit page',
                        onAction: handleExitPage,
                        icon: ExitMajor,
                        destructive: true,
                    },
                ]}
            />
        </Popover>
    );
}
