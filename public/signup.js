const signupFormHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector("#signup-name").value.trim();
	const password = document.querySelector("#signup-password").value.trim();

	if (name && password) {
		const response = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify({ name, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/login");
		} else {
			alert(response.statusText);
		}
	}
};

document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);
