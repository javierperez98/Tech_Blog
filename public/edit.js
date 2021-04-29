const editPostHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector("#edit-title").value.trim();
	const id = document.querySelector("#edit-title");
	const description = document.querySelector("#edit-des").value.trim();

	if (title && description) {
		const response = await fetch("/api/posts/" + id.dataset.id, {
			method: "PUT",
			body: JSON.stringify({ title, description }),
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
