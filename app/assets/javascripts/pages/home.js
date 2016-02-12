import Occasion from '../factories/occasion';
import Vue from 'vue';
import _ from 'lodash';

Vue.config.debug = true;


const app = {
  el: '#occasion-section',

  data: {
    occasions:        Occasion.occasions,
    selectedOccasion: Occasion.selectedOccasion,
    budgets:          Occasion.budgets,
    selectedBudget:   Occasion.selectedBudget
  },

  methods: {
    selectOccasion:     Occasion.selectOccasion,
    isSelectedOccasion: Occasion.isSelectedOccasion,
    selectBudget:       Occasion.selectBudget,
    isSelectedBudget:   Occasion.isSelectedBudget
  }
};

export default new Vue(app);
