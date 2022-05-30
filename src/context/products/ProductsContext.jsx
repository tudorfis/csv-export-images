import { createContext } from 'react';

export const initialState = {
    products: [],
};

export default createContext({
    actions: {},
    state: initialState,
});
