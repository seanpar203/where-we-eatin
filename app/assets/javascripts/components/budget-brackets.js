import Occasion from './../services/occasion';

export default {
  props: ['selected'],

  template: require('./../../../templates/budget-brackets.html'),

  data() {
    return {
      budgets: Occasion.budgets
    }
  },
  methods: {
    isSelectedBudget: function(budget) {
      return this.selected == budget;
    }
  }
}
