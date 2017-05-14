import axios from 'axios';

class ApiService {
	constructor() {
		this.requesting = false;

		this.geo = {
			url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
			key: '&key=AIzaSyA3wiqdA1T_ultL7n51EVbaO0uMqtco5YA'
		};

		this.http = axios.create();
	}

	Search(url, data) {
		return this.http.post(url, data, { baseURL: 'https://where-we-eatin.herokuapp.com/' })
	}

	getLocation(lat, lon) {
		return this.http.get(this.geo.url + lat + ',' + lon + this.geo.key)
	}
}

export default new ApiService();
