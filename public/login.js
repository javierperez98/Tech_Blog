const loginFormHandler = async (event) => {
	event.preventDefault();

	// Collect values from the login form
	const userName = document.querySelector("#login-name").value.trim();
	const password = document.querySelector("#login-password").value.trim();

	if (userName && password) {
		// Send a POST request to the API endpoint
		const response = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify({ name, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// If successful, redirect the browser to the profile page
			document.location.replace("/profile");
		} else {
			alert(response.statusText);
		}
	}
};

const signupFormHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector("#name-signup").value.trim();
	const userName = document.querySelector("#userName-signup").value.trim();
	const password = document.querySelector("#password-signup").value.trim();

	if (name && userName && password) {
		const response = await fetch("/api/users", {
			method: "POST",
			body: JSON.stringify({ name, userName, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert(response.statusText);
		}
	}
};

document
	.querySelector(".login-form")
	.addEventListener("submit", loginFormHandler);

document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);
