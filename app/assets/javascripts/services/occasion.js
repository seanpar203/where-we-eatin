import _ from 'lodash';

class Occasion {
  constructor() {
    this._ = _;
    this.occasions = [
      {name: 'Breakfast', cssClass: 'breakfast', term: 'Breakfast'},
      {name: 'Lunch', cssClass: 'lunch', term: 'Lunch'},
      {name: 'Dinner', cssClass: 'dinner', term: 'Dinner'},
      {name: 'Dessert', cssClass: 'dessert', term: 'Desserts'},
      {name: 'Pizza', cssClass: 'pizza', temr: 'Pizza'},
      {name: 'Ice-cream', cssClass: 'ice-cream', term: 'Ice Cream & Frozen Yogurt'},
      {name: 'Sushi', cssClass: 'sushi', term: 'sushi'},
      {name: 'Ramen', cssClass: 'ramen', term: 'ramen noodles'},
      {name: 'Drinks', cssClass: 'drinks', term: 'bars'}
    ];

    this.selectedOccasion = {};
    this.results = [];
    this.error = null;
  }

  formatPlaces(placesArray) {
    return this._(placesArray)
      .filter( (places) => {
        return !places.is_closed;
      })
      .map( (place) => {
        return {
          phoneNumber: place.display_phone,
          address:     place.location['display_address'].join(),
          phone:       place.display_phone,
          distance:    Math.floor(place.distance * 0.000621371),
          categories:  _(place['categories']).map( a => a[0]).value(),
          imageUrl:    place.image_url,
          name:        place.name,
          rating:      place.rating,
          ratingImg:   place.rating_img_url,
          yelpUrl:     place.url
        }
      })
      .orderBy(['rating', 'distance'], ['desc', 'asc'])
      .value();
  }
}

export default new Occasion();
