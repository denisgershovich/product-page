import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value - 1 < 0)return
      state.value -= 1
    },
    clearCounter: (state) => {
      state.value = 0
    },
    setCounter:(state,value) =>{
      state.value = value.payload
    }
}})


export const { increment, decrement,clearCounter,setCounter } = counterSlice.actions

export default counterSlice.reducer