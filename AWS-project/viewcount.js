const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://5o2yfwbmy9.execute-api.ca-central-1.amazonaws.com/dev/cloud-resume-api")
	let data = await response.json();
	counter.innerHTML = `Visitors: ${data}`;
}

updateCounter();
