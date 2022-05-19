// import our actions

import { 
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions'

// create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1'
}

// update product test
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        // type: the action being performed. in this case update.
        type: UPDATE_PRODUCTS,
        // products: is the value of new data.
        products: [{}, {}]
    });

    // newState  2
    expect(newState.products.length).toBe(2);
    // initialState  0
    expect(initialState.products.length).toBe(0);
})


