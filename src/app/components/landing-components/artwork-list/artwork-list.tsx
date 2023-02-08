import React from "react";
import { useGetArtworksQuery } from "../../../../api/artworkApi";
import Card from "../../shared/card";
import "./artwork-list.scss";
import { useDispatch } from "react-redux";
import { addFavourite } from "../../../../store/artworkSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ResultsProps {
	searchQuery: string;
}

const ArtworkList = (props: ResultsProps | null) => {
	const { searchQuery } = props as ResultsProps;
	const dispatch = useDispatch();

	const results = useGetArtworksQuery(`${searchQuery}&page=1&limit=9`);

	return (
		<div className="results-container">
			{results &&
				results?.data?.data?.map((artwork) => {
					return (
						<Card key={artwork.id}>
							<img
								src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
								alt=""
							/>
							<div className="title-wrapper">
								<strong>{artwork.title}</strong>
								<FavoriteIcon
									className="favIcon"
									onClick={() => dispatch(addFavourite(artwork))}
								/>
							</div>
						</Card>
					);
				})}
		</div>
	);
};

export default ArtworkList;
