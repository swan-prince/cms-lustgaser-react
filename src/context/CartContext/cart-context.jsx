import React, { createContext, useReducer } from 'react'
import cartReducer, { sumItems } from "./cart-reducer"
import {
	ADD_CART_ITEM,
	INCREASE_CART_ITEM,
	DECREASE_CART_ITEM,
	REMOVE_CART_ITEM
} from "context/actionTypes"


export const CartContext = createContext()

const cartFromStorage = localStorage.getItem('cart') ?
	JSON.parse(localStorage.getItem('cart')) : []

const initialState = { cartItems: cartFromStorage, ...sumItems(cartFromStorage) }

const CartContextProvider = ({children}) => { 
	const [state, dispatch] = useReducer(cartReducer, initialState)

	const addToCart = (product) => dispatch({type: ADD_CART_ITEM, payload: product})
	const increase = (product) => dispatch({type: INCREASE_CART_ITEM, payload: product})
	const decrease = (product) => dispatch({type: DECREASE_CART_ITEM, payload: product})
	const removeProduct = (product) => dispatch({type: REMOVE_CART_ITEM, payload: product})

	const contextValues = {
		...state,
		addToCart,
		increase,
		decrease,
		removeProduct
	}

	return (
		<CartContext.Provider value={ contextValues }>
			{
				children
			}
		</CartContext.Provider>
	)
}

export default CartContextProvider
