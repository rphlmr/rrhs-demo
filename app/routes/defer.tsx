import React from "react";
import type { Route } from "./+types/defer";
import Location from "~/components/location";
import { Link } from "react-router";
import { getLocation } from "~/data/get-location";

export async function loader() {
	return {
		location: getLocation("DEFERRED WORKS!"),
	};
}

export default function ProjectRoute({ loaderData }: Route.ComponentProps) {
	return (
		<main>
			<h1>Let's locate your project</h1>
			<React.Suspense fallback={<p>Loading project location...</p>}>
				<Location location={loaderData.location} />
			</React.Suspense>
			<Link to="/">Go to home →</Link>
		</main>
	);
}
