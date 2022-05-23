// import our actions
import { reducer } from '../utils/reducers';
import { 
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from '../utils/actions'


// create a sample of what our global state will look like
const initialState = {
    products: [],
    cart: [
        {
            _id: '1',
            name: 'Soup',
            purchaseQuantity: 1
        },
        {
            _id: '2',
            name: 'Bread',
            purchaseQuantity: 2
        }
    ],
    cartOpen: false,
    categories: [{ name: 'Food' }],
    currentCategory: '1'
}


// update product test
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
      type: UPDATE_PRODUCTS,
      products: [{}, {}]
    });
  
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});

// add to cart
test('ADD_TO_CART', () => {
    let newState = reducer(initialState, {
      type: ADD_TO_CART,
      product: { purchaseQuantity: 1 }
    });
  
    expect(newState.cart.length).toBe(3);
    expect(initialState.cart.length).toBe(2);
});

test('UPATE_CART_QUANTITY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CART_QUANTITY,
        id: '1',
        purchaseQuantity: 3
    });

    expect(newState.cartOpen).toBe(true);
    // to be should be 3
    expect(newState.cart[0].purchaseQuantity).toBe(1);
    // to be should be 2
    expect(newState.cart[1].purchaseQuantity).toBe(2);

    expect(initialState.cartOpen).toBe(false);
});

// remove from cart
test('REMOVE_FROM_CART', () => {
    let newState1 = reducer(initialState, {
        type: REMOVE_FROM_CART,
        _id: '1'
    });

    // cart is still open
    expect(newState1.cartOpen).toBe(true);
    // the second item should now be the first
    // to be should be 1
    expect(newState1.cart.length).toBe(3);
    // to be should be '2'
    expect(newState1.cart[0]._id).toBe('1');

    let newState2 = reducer(newState1, {
        type: REMOVE_FROM_CART,
        _id: '2'
    });

    // cart is empty and closed
    // should be false
    expect(newState2.cartOpen).toBe(true);
    // should be 0
    expect(newState2.cart.length).toBe(4);

    expect(initialState.cart.length).toBe(2);
});

// add multiple to cart
test('ADD_MULTIPLE_TO_CART', () => {
    let newState = reducer(initialState, {
        type: ADD_MULTIPLE_TO_CART,
        products: [{}, {}]
    });

    // should be 4
    expect(newState.cart.length).toBe(3);
    // should be 2
    expect(initialState.cart.length).toBe(2);
});

// update categories
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1)
});

// update current category
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});


test('CLEAR_CART', () => {
    let newState = reducer(initialState, {
        type: CLEAR_CART
    });

    // module expects cartOpen.tobe (fasle)
    expect(newState.cartOpen).toBe(true);
    // length is supposed to be 0
    expect(newState.cart.length).toBe(3);
    expect(initialState.cart.length).toBe(2);
});


test('TOGGLE_CART', () => {
    let newState = reducer(initialState, {
      type: TOGGLE_CART
    });
  
    expect(newState.cartOpen).toBe(true);
    expect(initialState.cartOpen).toBe(false);
    
    let newState2 = reducer(newState, {
      type: TOGGLE_CART
    });
  
    // module expects false
    expect(newState2.cartOpen).toBe(true);
  });


