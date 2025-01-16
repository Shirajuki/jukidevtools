import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";

import AppLayout from "../layouts/AppLayout/AppLayout.component";
import NotFound from "./NotFound.component";

import { TOOL_ROUTES } from "./routes";
import Home from "./Home.component";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import InternalError from "../components/500/InternalError.component";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			...TOOL_ROUTES.reduce((acc, toolRouteGroup) => {
				for (const { path, component: Component } of toolRouteGroup.routes) {
					acc.push({
						path: path,
						element: (
							<ErrorBoundary fallback={<InternalError />}>
								<Suspense>
									<Component />
								</Suspense>
							</ErrorBoundary>
						),
					});
				}

				return acc;
			}, [] as RouteObject[]),
			{
				path: "/404",
				element: <NotFound />,
			},
			{
				path: "/*",
				element: <NotFound />,
			},
		],
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};
