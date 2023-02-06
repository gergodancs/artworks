import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./app/pages/landing-page/header";
import NavBar from "./app/components/nav/nav";
import Footer from "./app/components/footer/footer";
import Favourites from "./app/pages/favourites/favourites";
import Details from "./app/pages/details/details";

import { useGetArtworksQuery } from "./api/artworkApi";

function App() {
	const { t, i18n } = useTranslation("common");

	const result = useGetArtworksQuery("cats&page=1");

	useEffect(() => {
		result && console.log(result);
	}, []);

	return (
		<div className="app-container">
			<main>
				<NavBar />
				<Routes>
					<Route path="/" element={<Header />} />
					<Route path="/details" element={<Details />} />
					<Route path="/favourites" element={<Favourites />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
