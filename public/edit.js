const editPostHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector("#edit-title").value.trim();
	const description = document.querySelector("#edit-des").value.trim();

	if (name && description) {
		const response = await fetch("/api/posts", {
			method: "PUT",
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
	.querySelector(".edit-post")
	.addEventListener("submit", editPostHandler);
