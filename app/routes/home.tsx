import React from "react";
import { Await, Link } from "react-router";
import type { Route } from "./+types/home";
import { getLocation } from "~/data/get-location";

export async function loader() {
	return {
		location: getLocation("HOME"),
	};
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return (
		<main>
			<React.Suspense fallback={<p>Loading...</p>}>
				<Await resolve={loaderData.location}>{(location) => <h2>{location}</h2>}</Await>
			</React.Suspense>
			<Link to="/defer">Go to defer →</Link>
		</main>
	);
}
