export async function getLocation(location: string) {
	return new Promise((resolve) => setTimeout(() => resolve(location), 2000)) as Promise<string>;
}
