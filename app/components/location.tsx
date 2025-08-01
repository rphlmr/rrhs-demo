import React from "react";

export default function Location(props: { location: Promise<string> }) {
	const data = React.use(props.location);

	return <p>Your project is at {data}.</p>;
}
