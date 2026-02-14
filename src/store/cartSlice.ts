import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {items: []},
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
      
            if(existingItem) existingItem.quantity += 1;
            else state.items.push({ ...action.payload, quantity: 1 });
        },
        removeItem: (state, action) => {
            const ind = state.items.findIndex(ele => ele.id === action.payload.id)
            if(ind !== -1){
                if(state.items[ind].quantity > 1){
                    state.items[ind].quantity -= 1
                } else state.items.splice(ind, 1)
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export default cartSlice.reducer

export const {addItem, removeItem, clearCart} = cartSlice.actions
