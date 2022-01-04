fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk", {
	"method": "GET",
	"headers": {
		"x-user-agent": "desktop",
		"x-proxy-location": "US",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "609dfb19d4mshad75b9bdd7a1375p1e4513jsn577e2a9522d7"
	}
})
.then(response => {
	console.log(response);
	console.log(response.content);
	//document.write(response['url'])
	//let myVar = response.originator['name']
	//document.write(`-${myVar}`)
})
.catch(err => {
	console.error(err);
});
