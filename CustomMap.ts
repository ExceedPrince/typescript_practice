export interface Mappable {
	location: {
		lat: number;
		lng: number;
	}
	color: string;
	markerContent(): string;
}

export class CostumMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			},
			icon: {
				url: `http://maps.google.com/mapfiles/ms/icons/${mappable.color}-dot.png`
			}
		})

		marker.addListener('click', () => {
			const infowindow = new google.maps.InfoWindow({
				content: mappable.markerContent()
			});

			infowindow.open(this.googleMap, marker)
		})
	}

}