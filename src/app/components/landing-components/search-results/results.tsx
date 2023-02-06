import React, { useEffect } from "react";
import { useGetArtworksQuery } from "../../../../api/artworkApi";
import Card from "../../shared/card";
import "./results.scss";
import { useDispatch } from "react-redux";
import { addFavourite } from "../../../../store/artworkSlice";
import { useAppSelector } from "../../../../store/hooks";
import { Artwork } from "../../../../store/model";

interface ResultsProps {
	searchQuery: string;
}

const Results = (props: ResultsProps) => {
	const { searchQuery } = props;
	const dispatch = useDispatch();

	const results = useGetArtworksQuery(`${searchQuery}&page=1&limit=9`);

	return (
		<div className="results-container">
			{results &&
				results?.data?.data?.map((artwork) => {
					return (
						<Card key={artwork.id}>
							<img
								onClick={() => dispatch(addFavourite(artwork))}
								src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
								alt=""
							/>
							<span>{artwork.title}</span>
						</Card>
					);
				})}
		</div>
	);
};

export default Results;
