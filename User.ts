import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	firstName: string;
	lastName: string;
	location: {
		lat: number;
		lng: number;
	};
	color: string


	constructor() {
		this.firstName = faker.name.firstName();
		this.lastName = faker.name.lastName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
		this.color = "orange";
	}

	markerContent(): string {
		return `Username: ${this.firstName} ${this.lastName}`
	}
}