class Occasion {
  constructor() {
    this.occasions = [
      {name: 'breakfast'},
      {name: 'lunch'},
      {name: 'dinner'},
      {name: 'dessert'},
      {name: 'pizza'},
      {name: 'ice-cream'},
      {name: 'sushi'},
      {name: 'ramen'},
      {name: 'drinks'}
    ];

    this.budgets = [
      {price: 'cheap', qty: ['one']},
      {price: 'regular', qty: ['one', 'two']},
      {price: 'up-scale', qty: ['one', 'two','three']},
      {price: 'expensive', qty: ['one', 'two', 'three', 'four']}
    ];
    this.selectedBudget = {};
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
}

export default new Occasion();
