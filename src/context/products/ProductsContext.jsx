import { createContext } from 'react';
import { noop } from 'lodash';

export const initialState = {
    products: [],
};

export default createContext({
    actions: {
        removeById: (productId) => noop(productId),
    },
    state: initialState,
});