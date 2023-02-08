import React, { useState } from "react";
import SearchBar from "../../components/landing-components/search-bar/searchBar";
import ArtworkList from "../../components/landing-components/artwork-list/artwork-list";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	return (
		<div className="landing-container">
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			{searchQuery && <ArtworkList searchQuery={searchQuery} />}
		</div>
	);
};

export default Header;
