import { CartItem, IProduct } from './../utils/globals'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type state = {
  items: CartItem[]
  quantity: number
  total: number
}
const initialState: state = {
  items: [],
  quantity: 0,
  total: 0,
}
type CartItemPayload = PayloadAction & {
  payload: CartItem
}
export const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToCart: (state: state, { payload }: any) => {
      state.items.push(payload)
      state.quantity += 1
      state.total += payload.product.price
      console.log('added to the cart via reducer')
    },
    removeFromCart: (state: state, { payload }: any) => {
      console.log('deleting cart item ')
      state.items = state.items.filter((item) => {
        if (item.id === payload.id) {
          state.quantity -= 1
          state.total -= item.product.price
        }
        return item.id !== payload.id
      })
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
