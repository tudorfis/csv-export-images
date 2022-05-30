import * as React from 'react';
import { noop } from 'lodash';

export const initialState = {
    products: [],
};

export default React.createContext({
    actions: {
        removeById: (productId) => noop(productId),
    },
    state: initialState,
});