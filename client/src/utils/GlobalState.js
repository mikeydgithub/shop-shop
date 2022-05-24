import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers'

// insatntaite the global state object.
const StoreContext = createContext();
// every context object comes with tow compnents, a Provider and Consumer. Providers hold data and Consumers grab it.
const { Provider } = StoreContext;


// store provider
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    // use this to confirm it works!
    console.log(state);
    // dispatch bring the most updated state
    return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };