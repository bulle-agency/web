export const prerender = false;

export async function POST({ request }) {
	const data = await request.json();

	const response = await fetch(
		"https://script.google.com/macros/s/AKfycbxK3m1J9K1wPfV9eFQJ1K5pLahCRwKyp1zfsNxKB5Zz7lMlik8RJIiZmvEYaTLlgQugjA/exec",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		},
	);

	const json = await response.json();

	return new Response(JSON.stringify(json), {
		status: response.ok ? 200 : 500,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
