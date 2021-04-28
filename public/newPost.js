const newFormHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector("#newpost-title").value.trim();
	const description = document.querySelector("#newpost-des").value.trim();

	if (name && description) {
		const response = await fetch(`/api/posts`, {
			method: "POST",
			body: JSON.stringify({ name, description }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert("Failed to create project");
		}
	}
};

document
	.querySelector(".create-post")
	.addEventListener("submit", newFormHandler);
