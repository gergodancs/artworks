import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./store";
import { ArtworkState, SearchResult } from "./model";

export const artworkSlice = createSlice({
	name: "artwork",
	initialState: {
		searchResult: null,
	} as ArtworkState,
	reducers: {
		setSearchResult: (state, action: PayloadAction<SearchResult>) => {
			state.searchResult = action.payload;
		},
	},
});

export const { setSearchResult } = artworkSlice.actions;

export const artworks = (state: RootState) => state.artwork.searchResult;

export default artworkSlice.reducer;
