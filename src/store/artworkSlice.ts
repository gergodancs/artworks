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
			const existingFavourites = state.filter(
				(artwork) => artwork.id === action.payload.id,
			);
			if (existingFavourites.length > 0) {
				return;
			} else {
				state.push(action.payload);
			}
		},
		deleteFavourite: (state, action: PayloadAction<number>) => {
			return state.filter((artwork) => artwork.id !== action.payload);
		},
	},
});

export const { addFavourite, deleteFavourite } = artworkSlice.actions;

export const artworks = (state: RootState) => state.artwork;

export default artworkSlice.reducer;
