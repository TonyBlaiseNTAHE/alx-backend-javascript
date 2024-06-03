export default function signUpUser(firstname, lastname) {
	return Promise.resolve({
		firtName: firstname,
		lastname: lastname,
	});
}
