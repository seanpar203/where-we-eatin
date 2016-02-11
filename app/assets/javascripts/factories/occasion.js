class Occasion {
  constructor() {
    this.occasions = [
      {name: 'breakfast'},
      {name: 'lunch'},
      {name: 'dinner'},
      {name: 'desert'},
      {name: 'pizza'},
      {name: 'ice-cream'},
      {name: 'sushi'},
      {name: 'ramen'},
      {name: 'drinks'}
    ];
    this.selectedOccasion = {};
  }

  select(occasion) {
    this.selectedOccasion = occasion;
  }

  isSelected(occasion) {
    return this.selectedOccasion == occasion;
  }
}

export default new Occasion();
