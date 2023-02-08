import React from "react";
import { useAppSelector } from "../../../store/hooks";
import Card from "../../components/shared/card";
import "../../components/landing-components/artwork-list/artwork-list.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { deleteFavourite } from "../../../store/artworkSlice";

const Favourites = () => {
	const favouriteArtworks = useAppSelector((state) => state.artwork);
	const dispatch = useDispatch();
	return (
		<div className="results-container">
			{favouriteArtworks?.map((artwork) => {
				return (
					<Card key={artwork.id}>
						<img
							src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
							alt=""
						/>
						<div className="title-wrapper">
							<strong>{artwork.title}</strong>
							<DeleteForeverIcon
								className="favIcon"
								onClick={() => dispatch(deleteFavourite(artwork.id))}
							/>
						</div>
					</Card>
				);
			})}
		</div>
	);
};

export default Favourites;
