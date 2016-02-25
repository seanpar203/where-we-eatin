import axios from 'axios';

class ApiService {
  constructor() {
    this.requesting = false;
    this.geo = {
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
      key: '&key=AIzaSyAGxlO3d-bVPYU1o2_rDh4Wo7jFfZTHBsY'
    };
    this.http = axios.create();
  }
  Search(url, data) {
    return this.http.post(url, data, {baseURL: 'http://sean.dev:8080/'})
  }
  getLocation(lat, lon) {
    return this.http.get(this.geo.url + lat + ',' + lon + this.geo.key)
  }
}

export default new ApiService();
