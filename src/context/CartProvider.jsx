import { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

const shoppingReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CART] add Item':
            return [...state, action.payload]
        case '[CART] Increase Quantity':
            return state.map(item => {
                const cant = item.cantidad +1
                if (item.id === action.payload) return {...item, cantidad: cant}
                return item
            })
  
        case '[CART] Decrease Quantity':
            return state.map(item => {
                const cant = item.cantidad -1
                if (item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
                return item
            })
        case '[CART] Delete Item':
            return state.filter(compra => compra.id !== action.payload)
    
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {

    const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

    const addItem = (compra) => {
        compra.cantidad = 1;
         const action = {
            type: '[CART] add Item',
            payload: compra
         }
         dispatch(action)
    }
    const increaseQuantity = (id) => {
         const action = {
            type: '[CART] Increase Quantity',
            payload: id
         }
         dispatch(action)

    }
    const decreaseQuantity = (id) => {
         const action = {
            type: '[CART] Decrease Quantity',
            payload: id
         }
         dispatch(action)

    }
    const deleteItem = (id) => {
         const action = {
            type: '[CART] Delete Item',
            payload: id
         }
         dispatch(action)

    }



    return (
    <CartContext.Provider value={{shoppingList, addItem, increaseQuantity, decreaseQuantity, deleteItem}}>
        {children}
    </CartContext.Provider>
    );
};
