import Occasion from '../factories/occasion';
import Vue from 'vue';
import _ from 'lodash';

Vue.config.debug = true;


const app = {
  el: '#occasion-section',

  data: {
    occasions:        Occasion.occasions,
    selectedOccasion: Occasion.selectedOccasion
  },

  methods: {
    selectOccasion: Occasion.select,
    isSelected:     Occasion.isSelected
  }
};

export default new Vue(app);
