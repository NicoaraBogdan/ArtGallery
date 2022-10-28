import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], 
  hasItems: false
}

const cartSlice = createSlice({
  name: 'cart',
  
  initialState,

  reducers: {
    add: (state, action) => {
       state.items.push(action.payload.item);
       state.hasItems = true;
    },

    remove: (state, action) => {
        state.items = state.items.filters( x => x.name !== action.payload.name);
        if(state.items.length === 0){
          state.hasItems = false;
        }
      }
    }
})

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer