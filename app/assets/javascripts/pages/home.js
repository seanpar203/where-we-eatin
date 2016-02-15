// Services
import OccasionService from '../services/occasion';

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
    Occasion: OccasionService
  },
  components: {OccasionIcons, BudgetBrackets}
};

export default new Vue(app);
