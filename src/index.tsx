import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

import "./index.scss";
import ThemeProvider from "./providers/ThemeProvider.component";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "./components/NotFound.component";
const router = createRouter({
	routeTree,
	basepath: "/jukidevtools",
	defaultNotFoundComponent: () => {
		return <NotFound />;
	},
});
// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// biome-ignore lint/style/noNonNullAssertion: root element should always be present
ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ReduxProvider store={store}>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</ReduxProvider>
	</StrictMode>,
);
