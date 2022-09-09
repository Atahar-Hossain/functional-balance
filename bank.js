document.getElementById(`login-submit`).addEventListener(`click`, function () {
	const emailField = document.getElementById(`user-email`);
	const userEmail = emailField.value;
	const passwordField = document.getElementById(`user-password`);
	const userPassword = passwordField.value;
	if (
		userEmail == `hasanmahadicse@gmail.com` &&
		userPassword == `Creative@7110`
	) {
		window.location.href = `home.html`;
	} else {
		window.alert(`invalid user id or password`);
	}
});
