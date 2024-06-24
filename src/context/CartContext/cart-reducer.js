import {
	ADD_CART_ITEM,
  INCREASE_CART_ITEM,
	DECREASE_CART_ITEM,
	REMOVE_CART_ITEM
} from "context/actionTypes"

const storeCartItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : []
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const sumItems = cartItems => {
  storeCartItems(cartItems)
  return {
      itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
      total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
  }
}

const cartReducer = (state, action) => {

  switch(action.type) {
    case ADD_CART_ITEM:
      if (!state.cartItems.find(item => item.id === action.payload.id)) {
        if (!!action.payload.quantity) {
          state.cartItems.push({
            ...action.payload           
          })
        } else {
          state.cartItems.push({
            ...action.payload,
            quantity: 1
          })
        }        
      } else {
        const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)        
        if (!!action.payload.quantity) {
          state.cartItems[increaseIndex].quantity = action.payload.quantity + state.cartItems[increaseIndex].quantity
        } else {
          state.cartItems[increaseIndex].quantity++
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems)
      }
    case INCREASE_CART_ITEM:
      const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      state.cartItems[increaseIndex].quantity++
      return {
          ...state,
          cartItems: [...state.cartItems],
          ...sumItems(state.cartItems)
      }
    case DECREASE_CART_ITEM:
      const decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      const product = state.cartItems[decreaseIndex]
      if (product.quantity > 1) {
        product.quantity--
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems)
      }
    case REMOVE_CART_ITEM:
      const newCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
      return {
          ...state,
          cartItems: [...newCartItems],
          ...sumItems(newCartItems)
      }
    default:
      return state
  }
}

export default cartReducer
