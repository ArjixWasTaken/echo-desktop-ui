import "mdui/mdui.css";
import "mdui";

import { render } from "solid-js/web";
import { RouterProvider, createRouter } from "@tanstack/solid-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/solid-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement) {
	render(() => <RouterProvider router={router} />, rootElement);
}
