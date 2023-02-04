import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the artwork state


// Define the initial state using that type

const initialState = undefined;


export const artworkSlice = createSlice({
    name: "artwork",
    initialState,
    reducers:{}

})

export const {} = artworkSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default artworkSlice.reducer