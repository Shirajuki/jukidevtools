import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "./routes/Router/Router.component";
import store from "./store";

import "./index.scss";
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider.component";

// biome-ignore lint/style/noNonNullAssertion: root element should in theory always be present
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<ThemeProvider>
				<Router />
			</ThemeProvider>
		</ReduxProvider>
	</React.StrictMode>,
);
