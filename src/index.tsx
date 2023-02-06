import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import common_en from "./i18n/en/common.json";
import common_hu from "./i18n/hu/common.json";

i18next.init({
	interpolation: { escapeValue: false },
	lng: "en",
	resources: {
		en: {
			common: common_en,
		},
		de: {
			common: common_hu,
		},
	},
});

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<I18nextProvider i18n={i18next}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</I18nextProvider>
		</Provider>
	</React.StrictMode>,
);
