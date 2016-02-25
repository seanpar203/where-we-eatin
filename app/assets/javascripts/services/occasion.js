import _ from 'lodash';

class Occasion {
  constructor() {
    this._ = _;
    this.occasions = [
      {name: 'Breakfast', cssClass: 'breakfast'},
      {name: 'Lunch', cssClass: 'lunch'},
      {name: 'Dinner', cssClass: 'dinner'},
      {name: 'Dessert', cssClass: 'dessert'},
      {name: 'Pizza', cssClass: 'pizza'},
      {name: 'Ice-cream', cssClass: 'ice-cream'},
      {name: 'Sushi', cssClass: 'sushi'},
      {name: 'Ramen', cssClass: 'ramen'},
      {name: 'Drinks', cssClass: 'drinks'}
    ];

    this.selectedOccasion = {};
    this.results = [];
    this.error = null;
  }

  /**
   * Occasion Comparison and Setter Functions
   */

  selectOccasion(occasion) {
    this.selectedOccasion = occasion;
  }

  isSelectedOccasion(occasion) {
    return this.selectedOccasion == occasion;
  }

  /**
   * Budget Comparison and Setter Functions
   */

  selectBudget(budget) {
    this.selectedBudget = budget;
  }

  isSelectedBudget(budget){
    return this.selectedBudget == budget;
  }

  formatPlaces(placesArray) {
    return this._(placesArray)
      .filter( (places) => {
        return !places.is_closed;
      })
      .map( (place) => {
        return {
          phoneNumber: place.display_phone,
          address:     place.location["display_address"][0] + ', ' +
          place.location["display_address"][1],
          distance:    Math.floor(place.distance * 0.000621371),
          categories:  place["categories"],
          imageUrl:    place.image_url,
          name:        place.name,
          rating:      place.rating,
          ratingImg:   place.rating_img_url,
          review:      place.snippet_text,
          yelpUrl:     place.url
        }
      })
      .value();
  }
}

export default new Occasion();
