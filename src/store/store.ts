import { configureStore } from "@reduxjs/toolkit";
import artworkReducer from "./artworkSlice";
import { artworkApi } from "../api/artworkApi";
// ...

export const store = configureStore({
	reducer: {
		[artworkApi.reducerPath]: artworkApi.reducer,
		artwork: artworkReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat([artworkApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
