// Services
import Occasion from '../services/occasion';

// Components
import OccasionIcons from './../components/occasion-icons';
import BudgetBrackets from './../components/budget-brackets';

// Third Party Libraries
import Vue from 'vue';
import _ from 'lodash';

Vue.config.debug = true;


const app = {
  el: '#occasion-section',

  data: {
    selectedOccasion: Occasion.selectedOccasion,
    selectedBudget:   Occasion.selectedBudget
  },
  components: {OccasionIcons, BudgetBrackets}
};

export default new Vue(app);
