import { User } from './User';
import { Company } from './Company';
import { CostumMap } from './CustomMap';

function load() {
	document.getElementById("root").insertAdjacentHTML("afterbegin", `
		<div id="map"></div>
		<div id="infos">
			<button id="newBtn">Create new user</button>
			<h1>Infos</h1>
		</div>
	`);

	let user = new User();
	let company = new Company();

	let costumMap = new CostumMap("map");
	costumMap.addMarker(user);
	costumMap.addMarker(company);

	let text: HTMLParagraphElement;

	function addText(firstName: string, lastName: string, companyName: string): void {
		function getAge(min: number, max: number): number {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		text = document.createElement("p");
		text.innerHTML = `Hi! My name is <b>${firstName} ${lastName}</b>, I'm ${getAge(18, 65)} years old and I work at the <b>${companyName}</b> company. <br> 
	Currently I'm on a vacation somewhere in the world, as you can see on the map, such as the location of my workplace!`;                   // Insert text
		document.getElementById("infos").appendChild(text);
	}

	addText(user.firstName, user.lastName, company.companyName);

	function createNew(): void {
		user = new User();
		company = new Company();
		costumMap = new CostumMap("map");

		costumMap.addMarker(user);
		costumMap.addMarker(company);

		document.querySelector("p").remove();

		addText(user.firstName, user.lastName, company.companyName);
	}

	document.getElementById("newBtn").addEventListener("click", createNew);

}

window.addEventListener('load', load);