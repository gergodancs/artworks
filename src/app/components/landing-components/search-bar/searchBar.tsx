import React, { SetStateAction, Dispatch } from "react";

interface SearchBarProps {
	searchQuery: string;
	setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = (props: SearchBarProps) => {
	const { searchQuery, setSearchQuery } = props;
	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};
	return (
		<>
			<label htmlFor="search">Alkotások keresése: </label>
			<input
				type="text"
				name="search"
				value={searchQuery}
				onChange={(e) => onInputChange(e)}
			/>
		</>
	);
};

export default SearchBar;
