/**
 * Initial processing of login data
 * @param {*} url
 * @param {*} database
 * @param {*} username
 * @param {*} password
 */

function oauthLogin(url, email, password) {
	let discoveryUrl = url + "/api/v1/user/login";

	return new Promise(function(resolve, reject) {
		
		// Getting the OAuth Server URL
		var tokenRequest = new XMLHttpRequest();
		tokenRequest.open("POST", discoveryUrl);
		let body = [];
		body["email"] = email;
		body["password"] = password;

		let urlEncodedDataPairs = [];
		// Turn the data object into an array of URL-encoded key/value pairs.
		for (var name in body) {
			urlEncodedDataPairs.push(encodeURIComponent(name) + "=" + encodeURIComponent(body[name]));
		}

		// Combine the pairs into a single string and replace all %-encoded spaces to
		// the '+' character; matches the behaviour of browser form submissions.
		let urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

		tokenRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");

		tokenRequest.send(urlEncodedData);

		tokenRequest.onreadystatechange = function() {
			if (tokenRequest.readyState == 4 && tokenRequest.status == 200) {
				var token = JSON.parse(tokenRequest.responseText);
				if (token.error)
					reject(token);
				else
					resolve(token);
			} else if (tokenRequest.readyState == 4 && tokenRequest.status == 400) {
				reject(null);
			}
		};
	});
}

module.exports = oauthLogin;
