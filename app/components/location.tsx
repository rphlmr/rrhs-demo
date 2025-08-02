import React from "react";

export default function Location(props: { location: Promise<string> }) {
	const data = React.use(props.location);

	return <p>Location: {data}</p>;
}
