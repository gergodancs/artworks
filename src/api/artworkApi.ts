import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchResult } from "../store/model";

export const artworkApi = createApi({
	reducerPath: "artworkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.artic.edu/api/v1/artworks/search?",
	}),
	endpoints: (builder) => ({
		getArtworks: builder.query<SearchResult, string>({
			query(query: string) {
				return `q=${query}`;
			},
			transformResponse(response: { data: { artwork: SearchResult } }) {
				return response.data.artwork;
			},
		}),
	}),
});

export const { useGetArtworksQuery, usePrefetch } = artworkApi;
