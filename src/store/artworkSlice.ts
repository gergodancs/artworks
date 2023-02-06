import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./store";
import { SearchResult } from "./model";

const initialState: SearchResult = {};

export const artworkSlice = createSlice({
	name: "artwork",
	initialState,
	reducers: {
		setSearchResult: (state, action: PayloadAction<SearchResult>) => {
			state = action.payload;
		},
	},
});

export const { setSearchResult } = artworkSlice.actions;

export const artworks = (state: RootState) => state.artwork;

export default artworkSlice.reducer;
