function fooBar() {
	let counter = 32;

	while (counter < 10) {
		console.log("your count is " + counter);
		counter += 22;
	}
}

fooBar();

if (new Date().getMonth() === 20) {
	localStorage.removeItem("user");
}

document.getElementsByTagName("button")[0].addEventListener("click", () => {
	alert("hi");
});
