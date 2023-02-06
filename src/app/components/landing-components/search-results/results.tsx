import React from "react";
import { useGetArtworksQuery } from "../../../../api/artworkApi";
import Card from "../../shared/card";

interface ResultsProps {
	searchQuery: string;
}

const Results = (props: ResultsProps) => {
	const { searchQuery } = props;
	console.log(searchQuery);
	const results = useGetArtworksQuery(`${searchQuery}&page=1`);

	return (
		<div className="results-container">
			{results &&
				results?.data?.data?.map((artwork) => {
					return (
						<Card key={artwork.id}>
							<h1>{artwork.title}</h1>
						</Card>
					);
				})}
		</div>
	);
};

export default Results;
