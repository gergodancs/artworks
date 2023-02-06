import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchResult } from "../store/model";

export const artworkApi = createApi({
	reducerPath: "artworkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.artic.edu/api/v1/artworks",
	}),
	endpoints: (builder) => ({
		getArtworks: builder.query<SearchResult, string>({
			query(query: string) {
				return `search?q=${query}&fields=id,title,image_id,thumbnail`;
			},
		}),
	}),
});

export const { useGetArtworksQuery, usePrefetch } = artworkApi;

// details: `https://api.artic.edu/api/v1/artworks/${id}`
// img:  `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`
// img: `https://www.artic.edu/iiif/2/${props.imgId}/full/843,/0/default.jpg`
