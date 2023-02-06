export interface SearchResult {
	config?: {};
	data?: Artwork[];
	info?: {
		license_text: string;
	};
	pagination?: Pagination;
	preference?: unknown;
}

type Pagination = {
	total: number;
	limit: number;
	offset: number;
	total_pages: number;
	current_page: number;
};

export type Artwork = {
	api_link: string;
	api_model: string;
	id: number;
	image_id?: string;
	is_boosted: boolean;
	thumbnail: {
		alt_text: string;
		height: number;
		lqip: string;
		width: number;
	};
	timestap: string;
	title: string;
	_score: number;
};
