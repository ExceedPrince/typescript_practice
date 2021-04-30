import { User } from './User';
import { Company } from './Company';
import { CostumMap } from './CustomMap';

function load() {

	const user = new User();
	const company = new Company();
	const costumMap = new CostumMap("root");

	costumMap.addMarker(user);
	costumMap.addMarker(company);

}

window.addEventListener('load', load);