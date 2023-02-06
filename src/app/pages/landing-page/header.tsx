import React, { useState } from "react";
import SearchBar from "../../components/landing-components/search-bar/searchBar";
import Results from "../../components/landing-components/search-results/results";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	return (
		<div className="landing-container">
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			{searchQuery && <Results searchQuery={searchQuery} />}
		</div>
	);
};

export default Header;
