import React from "react";
import type { Route } from "./+types/defer";
import Location from "~/components/location";
import { Link } from "react-router";
import { getLocation } from "~/data/get-location";
import { getContext } from "~/server/middleware/context";

export async function loader() {
	return {
		location: getLocation("WORKS!"),
		ctx: getContext(),
	};
}

export default function ProjectRoute({ loaderData }: Route.ComponentProps) {
	return (
		<main>
			<h1>Check defer</h1>
			<React.Suspense fallback={<p>Loading location...</p>}>
				<Location location={loaderData.location} />
			</React.Suspense>
			<p className="text-xs text-gray-500">{JSON.stringify(loaderData.ctx)}</p>
			<Link to="/">Go to home →</Link>
		</main>
	);
}
