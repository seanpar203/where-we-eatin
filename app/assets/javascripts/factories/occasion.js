class OccasionsFactory {
  constructor() {
    this.occasions = [
      {name: 'breakfast'},
      {name: 'lunch'},
      {name: 'dinner'},
      {name: 'drinks'},
      {name: 'pizza'},
      {name: 'desert'},
      {name: 'sushi'},
      {name: 'ice-cream'}
    ];
    this.selectedOccasion = {};
  }
}

export default new OccasionsFactory();
