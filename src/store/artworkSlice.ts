import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./store";
import { Artwork } from "./model";

const initialState: Artwork[] = [];

export const artworkSlice = createSlice({
	name: "favourite",
	initialState,
	reducers: {
		addFavourite: (state, action: PayloadAction<Artwork>) => {
			state.push(action.payload);
		},
	},
});

export const { addFavourite } = artworkSlice.actions;

export const artworks = (state: RootState) => state.artwork;

export default artworkSlice.reducer;
